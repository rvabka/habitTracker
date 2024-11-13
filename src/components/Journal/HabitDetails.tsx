import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";
import Calendar from "react-calendar";
import { DataEntry, Habit } from "../context/types";
import { FaFire } from "react-icons/fa";

export default function HabitDetails() {
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const location = useLocation();
  const [value] = useState<Date>(new Date());

  const habitId = location.pathname.slice(1);
  const filteredArray: Habit | undefined = habitArray.find(
    (item) => item.id === habitId,
  );

  const isMarked = (date: Date): boolean => {
    if (!filteredArray) return false;
    const dateString = date.toISOString().split("T")[0];
    return filteredArray?.data.some(
      (item) => item.day === dateString && item.done === 1,
    );
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isMarked(date)) {
      return "bg-babyBlue text-black";
    }
    return null;
  };

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

  // const lostDays = (data: DataEntry[] = []): number => {
  //   let lostDays = 0;

  //   data.forEach(element => {
  //     if(element.done === 0)
  //   })
  // }

  console.log(new Date().getDate());

  return (
    <div>
      {filteredArray ? (
        <div className="top">
          <div className="my-2 flex items-center justify-center p-2 text-2xl">
            <h1 className="top-title rounded-xl text-center font-bold">
              {filteredArray.name.slice(0, -2)}
            </h1>
            <span className="">{filteredArray.name.slice(-2)}</span>
          </div>
          <div className="top__streak mb-2 flex items-center border border-second p-2 text-xl">
            <div className="top__streak-icon ml-2">
              <FaFire color="#ff9100" size={35} />
            </div>
            <div className="ml-3 font-bold">
              <p>Najdłuższa seria: </p>
              <h2>{longestStreak(filteredArray?.data)} dni</h2>
            </div>
          </div>
        </div>
      ) : (
        <p>Habit not found</p>
      )}
      <Calendar
        // onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        calendarType={"iso8601"}
      />
    </div>
  );
}

