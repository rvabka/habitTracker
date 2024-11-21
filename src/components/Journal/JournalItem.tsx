import { useNavigate, useSearchParams } from "react-router-dom";
import { useHabitContext } from "../context/HabitContext";
import { MdOutlineDone } from "react-icons/md";
import {
  updateCountInFirestore,
  updateDoneStatus,
} from "../../firebase/firebase";
import { DataEntry, Habit } from "../context/types";

interface JournalItemProps {
  formattedDate: string;
  isComplete: boolean;
  todayEntry: DataEntry | undefined;
  item: Habit;
  index: number;
  setShowConfetti: (value: boolean) => void;
}

export default function JournalItem({
  formattedDate,
  isComplete,
  todayEntry,
  item,
  index,
  setShowConfetti,
}: JournalItemProps) {
  const navigate = useNavigate();
  const [searchData] = useSearchParams();
  const { state, dispatch } = useHabitContext();

  console.log(item.color);
  const handleChangeCount = async (id: string, presentCount: number) => {
    const habit = state.habits.find((habit: Habit) => habit.id === id);

    if (!habit) {
      console.error("Habit not found in state");
      return;
    }

    const todayEntryIndex = habit.data.findIndex(
      (entry: { day: string }) => entry.day === formattedDate,
    );

    if (todayEntryIndex === -1) {
      console.error("Today's entry not found in habit data");
      return;
    }

    const updatedData = habit.data.map((entry: DataEntry, index: number) =>
      index === todayEntryIndex
        ? { ...entry, presentCount: presentCount + 1, done: entry.done }
        : entry,
    );

    let newPresentCount = updatedData[todayEntryIndex].presentCount;
    if (newPresentCount >= habit.count) {
      newPresentCount = 0;
      updatedData[todayEntryIndex].done = 1;

      dispatch({
        type: "UPDATE_DONE_STATUS",
        payload: { id, targetDate: formattedDate },
      });
      await updateDoneStatus(id, formattedDate);

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    dispatch({
      type: "UPDATE_PRESENT_COUNT",
      payload: {
        id,
        presentCount: newPresentCount,
        targetDate: formattedDate,
      },
    });
    await updateCountInFirestore({ ...habit, data: updatedData });
  };

  const handleNavigate = (habitId: string) => {
    const date = searchData.get("date");

    navigate(`/${date}/${habitId}`, {
      state: { search: searchData.toString() },
    });
  };

  const dynamicStyle = {
    "--hover-text-color": item.color,
  } as React.CSSProperties;

  return (
    <div
      key={item.id}
      className="habit mb-2 flex w-full items-center justify-around border-b-[0.1rem] border-b-first py-3"
    >
      <div className="flex items-center text-center text-lg">
        <h1>{index + 1}</h1>
        <div
          className="ml-2 size-4 rounded-full text-center text-lg"
          style={{
            backgroundColor: item.color,
            boxShadow: `0 0 8px ${item.color}`,
          }}
        ></div>
      </div>

      <button
        onClick={() => handleNavigate(item.id)}
        className="mx-2 flex w-4/5 flex-col items-center justify-center rounded-2xl bg-backgroundButton p-1 shadow-xl transition-all duration-200 hover:bg-buttonHover"
      >
        <h1
          className={`text-lg font-bold ${isComplete ? "italic line-through" : ""}`}
        >
          {item.name}
        </h1>
        <p className={`${isComplete ? "text-green-500" : "text-red-500"} `}>
          {isComplete
            ? "Habit completed for today"
            : todayEntry
              ? todayEntry.presentCount + " / " + item.count
              : "Come back another day"}
        </p>
      </button>
      <div>
        <button
          className={`flex flex-col items-center justify-center rounded-full bg-second p-3 text-white shadow-lg transition duration-200 hover:scale-105 ${isComplete ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() =>
            !isComplete &&
            handleChangeCount(item.id, todayEntry?.presentCount ?? 0)
          }
          style={dynamicStyle}
        >
          <MdOutlineDone size={25} />
        </button>
      </div>
    </div>
  );
}
