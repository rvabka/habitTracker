import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function WeekCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const getStartOfWeek = (date: Date): Date => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    return startOfWeek;
  };

  const startOfWeek = getStartOfWeek(currentDate);

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => {
      const nextWeek = new Date(prevDate);
      nextWeek.setDate(prevDate.getDate() + 7);
      return nextWeek;
    });
  };

  const handlePreviousWeek = () => {
    setCurrentDate((prevDate) => {
      const previousWeek = new Date(prevDate);
      previousWeek.setDate(prevDate.getDate() - 7);
      return previousWeek;
    });
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + index);
    return day;
  });

  const handleClick = (day: Date) => {
    const newPrams = new URLSearchParams();
    newPrams.append("date", day.toDateString());
    setSearchParams(newPrams);
  };

  return (
    <div className="week-calendar absolute bottom-[4.4rem] flex w-full flex-col items-center justify-center bg-second p-4 text-white sm:p-2 sm:text-sm">
      <div className="week-header text-md mb-4 flex gap-3 sm:gap-2">
        {daysOfWeek.map((day, index) => {
          const isToday: boolean =
            day.toLocaleDateString() === new Date().toLocaleDateString();
            console.log(isToday)
          return (
            <button
              onClick={() => handleClick(day)}
              key={index}
              className={`day flex size-16 cursor-pointer items-center justify-center rounded-md bg-first p-2 text-center transition duration-200 hover:scale-105 sm:size-12 ${isToday ? "text-babyBlue hover:shadow-md hover:shadow-babyBlue" : null}`}
            >
              {day.toLocaleDateString("en-GB", {
                day: "numeric",
                weekday: "short",
                month: "numeric",
              })}
            </button>
          );
        })}
      </div>
      <div className="flex w-full items-center justify-center gap-3 sm:flex sm:gap-2">
        <button
          className="w-1/2 rounded-lg border p-2 transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0"
          onClick={handlePreviousWeek}
        >
          Prev Week
        </button>
        <button
          className="w-1/2 rounded-lg border p-2 transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0"
          onClick={handleNextWeek}
        >
          Next Week
        </button>
      </div>
    </div>
  );
}
