/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHabit } from "../context/HabitContext";
import { DataEntry } from "../context/types";
import { MdBlock } from "react-icons/md";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { Calendar } from "@/components/ui/calendar";
import * as Progress from "@radix-ui/react-progress";
import "../../styles/index.css";

export default function HabitDetails() {
  const { date, id } = useParams();
  const filteredArray = useHabit(id);
  const [startedProgress, setStartedProgress] = useState<number | undefined>(0);
  const dateFromParams = date ? new Date(date) : new Date();

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const findToday = (data: DataEntry[] = []): number => {
    return data.findIndex((entry) => {
      const date1 = new Date(entry.day);
      return isSameDay(date1, dateFromParams);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStartedProgress((prevProgress) =>
        prevProgress! + 1 <=
        (filteredArray?.data?.[findToday(filteredArray?.data)]?.presentCount ??
          0)
          ? prevProgress! + 1
          : filteredArray?.data[findToday(filteredArray?.data)].presentCount,
      );
    }, 200);
    return () => clearInterval(timer);
  }, []);

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
                className="ProgressRoot relative text-center"
                value={progressPercentage}
                style={{ boxShadow: `0 0 13px ${filteredArray.color}` }}
              >
                <span className="absolute inset-0 z-10 flex items-center justify-center text-lg font-semibold text-first">
                  {startedProgress} / {filteredArray?.count}
                </span>
                <Progress.Indicator
                  className="ProgressIndicator"
                  style={{
                    transform: `translateX(-${100 - progressPercentage}%)`,
                    backgroundColor: `${filteredArray.color}`,
                  }}
                />
              </Progress.Root>
            </div>
            <div className="flex-grow-1 flex flex-wrap items-center gap-6 rounded-xl">
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
              selected={[
                // eslint-disable-next-line no-unsafe-optional-chaining
                ...filteredArray?.data
                  .filter((entry) => entry.done === 1)
                  .map((entry) => new Date(entry.day)),
                // eslint-disable-next-line no-unsafe-optional-chaining
                ...filteredArray?.data
                  .filter((entry) => entry.done === 0)
                  .map((entry) => new Date(entry.day)),
                // eslint-disable-next-line no-unsafe-optional-chaining
                ...filteredArray?.data
                  .filter((entry) => {
                    const date1 = new Date(entry.day);
                    return isSameDay(date1, dateFromParams);
                  })
                  .map((entry) => new Date(entry.day)),
              ]}
              className="rounded-xl border-2 border-babyBlue p-5 text-2xl"
              modifiersClassNames={{
                clickedDay: "border-2",
                selected: "bg-green-500 text-white",
                failed: "bg-red-500 text-white",
                inProgress: "bg-yellow-500 text-white",
              }}
              modifiers={{
                failed: filteredArray?.data
                  .filter((entry) => entry.done === 0)
                  .map((entry) => new Date(entry.day)),
                inProgress: filteredArray?.data
                  .filter((entry) => entry.presentCount > 0 && entry.done === 0)
                  .map((entry) => new Date(entry.day)),
                clickedDay: filteredArray?.data
                  .filter((entry) => {
                    const date1 = new Date(entry.day);
                    return isSameDay(date1, dateFromParams);
                  })
                  .map((entry) => new Date(entry.day)),
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
