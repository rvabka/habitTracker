import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";
import Calendar from "react-calendar";
import { Habit } from "../context/types";

export default function HabitDetails() {
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const location = useLocation();
  const [value, setValue] = useState<Date>(new Date());

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

  return (
    <div>
      {filteredArray ? (
        <div>
          <h1 className="p-4 text-2xl font-bold">{filteredArray.name}</h1>
          {/* Możesz dodać więcej informacji o habit tutaj */}
        </div>
      ) : (
        <p>Habit not found</p>
      )}
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        calendarType={"iso8601"}
      />
    </div>
  );
}
