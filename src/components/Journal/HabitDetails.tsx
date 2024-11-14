import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";
import { DataEntry, Habit } from "../context/types";
import { MdBlock } from "react-icons/md";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { Calendar } from "@/components/ui/calendar";
import * as Progress from "@radix-ui/react-progress";
import "../../styles/index.css";

export default function HabitDetails() {
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const location = useLocation();
  const habitId = location.pathname.slice(1);
  const filteredArray: Habit | undefined = habitArray.find(
    (item) => item.id === habitId,
  );

  const [startedProgress, setStartedProgress] = useState<number | undefined>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartedProgress((prevProgress) =>
        prevProgress! + 1 <=
        (filteredArray?.data?.[filteredArray.data.length - 1]?.presentCount ??
          0)
          ? prevProgress! + 1
          : filteredArray?.data[filteredArray?.data.length - 1].presentCount,
      );
    }, 500);
    return () => clearInterval(timer);
  }, [filteredArray?.data]);

  const longestStreak = (data: DataEntry[] = []): number => {
    let maxStreak = 0;
    let currentStreak = 0;

    data.forEach((element) => {
      if (element.done === 1) {
        currentStreak++;
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });
    return maxStreak;
  };

  const lostDays = (data: DataEntry[] = []): number => {
    let lostDays = 0;

    data.forEach((element) => {
      if (element.done === 0) {
        lostDays++;
      }
    });

    return lostDays;
  };

  const progressPercentage = filteredArray?.count
    ? Math.round(((startedProgress ?? 0) / filteredArray.count) * 100)
    : 0;

  return (
    <div className="rounded-xl bg-first p-5">
      {filteredArray ? (
        <>
          <div className="mb-6 rounded-2xl bg-babyBlue p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="block w-1/2 text-3xl font-light tracking-tight">
                {filteredArray.name.slice(0, -2)}
              </h1>
              <Progress.Root
                className="ProgressRoot"
                value={progressPercentage}
              >
                <Progress.Indicator
                  className="ProgressIndicator"
                  style={{
                    transform: `translateX(-${100 - progressPercentage}%)`,
                  }}
                />
              </Progress.Root>
              <span className="-ml-14 block min-w-[2.5rem] text-green-500 text-lg font-semibold 2xl:-ml-6">
                {startedProgress} from {filteredArray?.count}
              </span>
            </div>
            <div className="flex-grow-1 flex items-center gap-6 rounded-xl">
              <div className="possible flex min-h-36 min-w-36 flex-col items-center justify-center rounded-xl bg-white/10 p-3 text-center shadow-lg shadow-red-400">
                <MdOutlineIncompleteCircle className="mb-1 size-8 text-red-400" />
                <div>
                  <p className="text-sm text-gray-300">
                    Possible <br></br> completions
                  </p>
                  <p className="text-2xl font-medium">
                    {filteredArray?.data.length} days
                  </p>
                </div>
              </div>
              <div className="done flex min-h-36 min-w-36 flex-col items-center justify-center rounded-xl bg-white/10 p-3 text-center shadow-lg shadow-green-500">
                <GrCompliance className="mb-1 size-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-300">
                    All <br></br> completions
                  </p>
                  <p className="text-2xl font-medium">
                    {filteredArray?.data.length - lostDays(filteredArray?.data)}{" "}
                    days
                  </p>
                </div>
              </div>
              <div className="skipDays flex min-h-36 min-w-36 flex-col items-center justify-center rounded-xl bg-white/10 p-3 text-center shadow-lg shadow-red-600">
                <MdBlock className="mb-1 size-8 text-red-600" />
                <div>
                  <p className="text-sm text-gray-300">Lost days</p>
                  <p className="text-2xl font-medium">
                    {lostDays(filteredArray?.data)} days
                  </p>
                </div>
              </div>
              <div className="streak flex min-h-36 min-w-36 flex-col items-center justify-center rounded-xl bg-white/10 p-3 text-center shadow-lg shadow-orange-400">
                <FaFire className="mb-1 size-8 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-300">Longest streak</p>
                  <p className="text-2xl font-medium">
                    {longestStreak(filteredArray?.data)} days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar
              mode="multiple"
              selected={filteredArray?.data
                .filter((entry) => entry.done === 1)
                .map((entry) => new Date(entry.day))}
              className="rounded-xl border-2 border-babyBlue p-5 text-2xl"
              modifiersClassNames={{
                selected: "bg-green-500 text-white",
                today: "border-2",
              }}
            />
          </div>
        </>
      ) : (
        <p>Habit not found</p>
      )}
    </div>
  );
}
