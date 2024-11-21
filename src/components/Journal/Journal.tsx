import { useParams } from "react-router-dom";
import BadHabbit from "./BadHabit";
import GoodHabbit from "./GoodHabit";
import JournalDetails from "./JounralDetails";
import WeekCalendar from "./WeekCalendar";

export default function Journal() {
  const { date } = useParams();

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getRelativeDay = (diff: number): string => {
    const days: Record<number, string> = {
      2: "Tomorrow",
      1: "Today",
      0: "Yesterday",
      [-1]: "Day before yesterday",
    };
    return days[diff] || "";
  };

  const getStringFromDate = (): string => {
    const currentDate = new Date();
    const targetDate = date ? new Date(date) : currentDate;

    const dayDiff = Math.ceil(
      (targetDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000) +
        1,
    );

    return getRelativeDay(dayDiff) || formatDate(targetDate);
  };

  return (
    <div className="relative h-full rounded-3xl bg-first p-5 shadow-[11px_-5px_31px_-12px_rgba(0,_0,_0,_0.35)]">
      <div className="flex items-center justify-between border-b-[0.1rem] border-b-first pb-3">
        <h1 className="text-2xl">{getStringFromDate()}</h1>
        <div className="flex gap-2">
          <BadHabbit />
          <GoodHabbit />
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <JournalDetails />
        <WeekCalendar />
      </div>
    </div>
  );
}
