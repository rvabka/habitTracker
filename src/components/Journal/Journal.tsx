import BadHabbit from "./BadHabbit";
import GoodHabbit from "./GoodHabbit";

export default function Journal() {
  return (
    <div className="">
      <div className="flex w-screen items-center justify-between p-5">
        <h1 className="text-2xl">Dzisiaj</h1>
        <div className="flex gap-2">
          <BadHabbit />
          <GoodHabbit />
        </div>
      </div>
    </div>
  );
}
