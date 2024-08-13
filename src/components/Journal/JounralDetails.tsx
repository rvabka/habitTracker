import { useContext, useState, useEffect } from "react";
import { HabitContext } from "../context/HabitContext";
import { useSearchParams } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { fetchHabits } from "../context/habitActions";
import {
  updateCountInFirestore,
  addNewDayIfNecessary,
  updateDoneStatus,
} from "../../firebase/firebase";

export default function JournalDetails() {
  addNewDayIfNecessary();
  const [searchData] = useSearchParams();
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  
  const filteredHabits = habitArray.filter((item) => {
    const presentData = searchData.get("date") || new Date();
    const dateObj1 = new Date(presentData);
    const dateObj2 = new Date(item.date);
    return (
      (dateObj1.getFullYear() === dateObj2.getFullYear() &&
        dateObj1.getMonth() === dateObj2.getMonth() &&
        dateObj1.getDate() === dateObj2.getDate()) ||
      item.count > 0
    );
  });

  if (!habitContext) {
    throw new Error("JournalDetails must be used within a HabitProvider");
  }
  const { state, dispatch } = habitContext;

  useEffect(() => {
    fetchHabits(dispatch);
  }, [dispatch]);

  const dateStr: string = searchData.get("date") || "";
  let formattedDate: string = "";
  if (dateStr) {
    const date = new Date(dateStr);

    if (!isNaN(date.getTime())) {
      formattedDate = date.toLocaleDateString("en-CA");
    } else {
      console.error("Incorrect data");
    }
  } else {
    console.error("No data");
  }

  const handleChangeCount = async (id: string, presentCount: number) => {
    const habit = state.habits.find((habit) => habit.id === id);

    if (!habit) {
      console.error("Habit not found in state");
      return;
    }

    const todayEntryIndex = habit.data.findIndex(
      (entry) => entry.day === formattedDate,
    );

    if (todayEntryIndex === -1) {
      console.error("Today's entry not found in habit data");
      return;
    }

    // Zaktualizuj presentCount
    const updatedData = habit.data.map((entry, index) =>
      index === todayEntryIndex
        ? { ...entry, presentCount: presentCount + 1, done: entry.done }
        : entry,
    );

    // Sprawdź, czy osiągnięto cel
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

  return (
    <>
      <div
        className={`confetti-container ${showConfetti ? "fade-in" : "fade-out"}`}
      >
        <Confetti width={width} height={height} />
      </div>
      <div className="w-full overflow-y-auto">
        {filteredHabits.length > 0 ? (
          filteredHabits.map((item, index: number) => {
            const isComplete = item.data.some(
              (entry) => entry.day === formattedDate && entry.done === 1,
            );
            const todayEntry = item.data.find(
              (entry) => entry.day === formattedDate,
            );

            return (
              <div
                key={item.id}
                className="flex w-full items-center justify-around border-y-[0.1rem] border-y-second p-2 py-4"
              >
                <div className="text-center text-lg">
                  <h1>{index + 1}</h1>
                </div>
                <div
                  className={`flex w-full flex-col items-center justify-center`}
                >
                  <h1
                    className={`text-lg font-bold ${isComplete ? "italic line-through" : ""}`}
                  >
                    {item.name}
                  </h1>
                  <p
                    className={`font-thin ${isComplete ? "text-green-500" : "text-red-500"} `}
                  >
                    {isComplete
                      ? "Habit completed for today"
                      : todayEntry
                        ? todayEntry.presentCount + " / " + item.count
                        : "No data for today"}
                  </p>
                </div>
                <div>
                  <button
                    className={`flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue ${isComplete ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={() =>
                      !isComplete &&
                      handleChangeCount(item.id, todayEntry?.presentCount ?? 0)
                    }
                  >
                    <MdOutlineDone size={25} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">
            There aren't planned habits for today.
          </h1>
        )}
      </div>
    </>
  );
}
