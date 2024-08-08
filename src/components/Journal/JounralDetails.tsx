import { useContext, useState, useEffect } from "react";
import { HabitContext } from "../context/HabitContext";
import { useSearchParams } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { fetchHabits } from "../context/habitActions";
import { updateHabitInFirestore } from "../../firebase/firebase";

export default function JournalDetails() {
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

  const handleChangeCount = async (id: string, presentCount: number) => {
    const habit = state.habits.find((habit) => habit.id === id);

    if (!habit) {
      console.error("Habit not found in state");
      return;
    }

    if (habit.presentCount >= habit.count) {
      return;
    }

    const updatedPresentCount = presentCount + 1;
    const updatedHabit = { ...habit, presentCount: updatedPresentCount };

    console.log("Updating habit:", updatedHabit);

    dispatch({
      type: "UPDATE_PRESENT_COUNT",
      payload: { id, presentCount: updatedPresentCount },
    });

    if (updatedPresentCount >= habit.count) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    try {
      await updateHabitInFirestore(updatedHabit);
      console.log("Habit updated successfully");
    } catch (error) {
      console.error("Error updating habit: ", error);
    }
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
            const isComplete = item.presentCount >= item.count;
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
                    className={`text-lg font-bold ${isComplete ? "italic line-through" : null}`}
                  >
                    {item.name}
                  </h1>
                  <p
                    className={`font-thin ${isComplete ? "text-green-500" : "text-red-500"} `}
                  >
                    {item.presentCount} / {item.count}
                  </p>
                </div>
                <div>
                  <button
                    className={`flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue ${isComplete ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={() =>
                      handleChangeCount(item.id, item.presentCount)
                    }
                  >
                    <MdOutlineDone size={25} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>There aren't planned habits for today.</h1>
        )}
      </div>
    </>
  );
}
