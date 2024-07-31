import { useLocation } from "react-router-dom";
import BadHabbit from "./BadHabbit";
import GoodHabbit from "./GoodHabbit";
import WeekCalendar from "./WeekCalendar";

export default function Journal() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const myParam = searchParams.get("date");
  console.log(myParam);

  function calculateCurrentDate(): string {
    const currDay = new Date();
    currDay.getDay();
    currDay.toLocaleDateString();
    // console.log(currDay)
    // currDay.split(".");
    return "Chuj";
  }

  return (
    <div className="relative h-screen">
      <div className="flex w-screen items-center justify-between border-b-[0.1rem] border-b-second p-5 pb-8">
        <h1 className="text-2xl">{calculateCurrentDate()}</h1>
        <div className="flex gap-2">
          <BadHabbit />
          <GoodHabbit />
        </div>
      </div>
      <WeekCalendar />
    </div>
  );
}
