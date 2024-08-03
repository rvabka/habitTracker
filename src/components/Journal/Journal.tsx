import { useLocation } from "react-router-dom";
import BadHabbit from "./BadHabit";
import GoodHabbit from "./GoodHabit";
import WeekCalendar from "./WeekCalendar";

export default function Journal() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const myParam = searchParams.get("date") || "";

  function getStringFromDate(): string | undefined {
    switch (calculateCurrentDate()) {
      case "0":
        return "Tomorrow";
      case "-1":
        return "Today";
      case "-2":
        return "Yesterday";
      case "-3":
        return "Day before yesterday";
      default:
        return calculateCurrentDate();
    }
  }

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }

  function calculateCurrentDate(): string {
    const currentDate: Date = new Date();
    const callendarDate: Date | string =
      myParam != "" ? new Date(myParam) : currentDate;
    const stripedCallendarDate: Date =
      callendarDate instanceof Date ? callendarDate : currentDate;

    const time1: number = currentDate.getTime();
    const time2: number = stripedCallendarDate.getTime();

    const timeDifference: number = time2 - time1;
    const millisecondsInOneDay: number = 24 * 60 * 60 * 1000;
    const dayDifference: string = Math.round(
      timeDifference / millisecondsInOneDay,
    ).toString();
    return parseInt(dayDifference) >= -3 && parseInt(dayDifference) <= 0
      ? dayDifference
      : formatDate(stripedCallendarDate);
  }

  return (
    <div className="relative h-screen">
      <div className="flex w-screen items-center justify-between border-b-[0.1rem] border-b-second p-5 pb-8">
        <h1 className="text-2xl">{getStringFromDate()}</h1>
        <div className="flex gap-2">
          <BadHabbit />
          <GoodHabbit />
        </div>
      </div>
      <WeekCalendar />
    </div>
  );
}
