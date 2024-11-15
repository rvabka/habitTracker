import { useContext, useState, useEffect } from "react";
import { HabitContext } from "../context/HabitContext";
import { useSearchParams } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { BallTriangle } from "react-loader-spinner";
import {
  updateCountInFirestore,
  updateDoneStatus,
  getHabitsFromFirestore,
  addNewDayIfNecessary,
} from "../../firebase/firebase";
import { Link } from "react-router-dom";

export default function JournalDetails() {
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];

  const [searchData] = useSearchParams();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { width, height } = useWindowSize();

  if (!habitContext) {
    throw new Error("JournalDetails must be used within a HabitProvider");
  }
  const { state, dispatch } = habitContext;

  useEffect(() => {
    const loadHabits = async () => {
      addNewDayIfNecessary(dispatch);
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const habits = await getHabitsFromFirestore();
        dispatch({ type: "SET_DATA", payload: habits });
      } catch (error) {
        console.error("Error fetching habits: ", error);
      }
    };

    dispatch({ type: "SET_LOADING", payload: false });
    loadHabits();
  }, [dispatch]);

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

  const dateStr: string =
    searchData.get("date") || new Date().toLocaleDateString("en-CA");
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

    const updatedData = habit.data.map((entry, index) =>
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

  return (
    <>
      {" "}
      {state.loading ? (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          <BallTriangle
            height="50"
            width="50"
            color="#72d7f0"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="habitList h-[400px] w-full overflow-y-auto rounded-3xl bg-babyBlue p-6">
          <div
            className={`confetti-container ${showConfetti ? "fade-in" : "fade-out"}`}
          >
            <Confetti width={width} height={height} />
          </div>
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

                  <Link
                    to={item.id}
                    className="mx-2 flex w-4/5 flex-col items-center justify-center rounded-2xl bg-backgroundButton p-1 shadow-xl transition-all duration-200 hover:bg-buttonHover"
                  >
                    <h1
                      className={`text-lg font-bold ${isComplete ? "italic line-through" : ""}`}
                    >
                      {item.name}
                    </h1>
                    <p
                      className={`${isComplete ? "text-green-500" : "text-red-500"} `}
                    >
                      {isComplete
                        ? "Habit completed for today"
                        : todayEntry
                          ? todayEntry.presentCount + " / " + item.count
                          : "Come back another day"}
                    </p>
                  </Link>
                  <div>
                    <button
                      className={`flex flex-col items-center justify-center rounded-full bg-second p-3 text-white shadow-lg transition duration-200 hover:scale-105 hover:text-babyBlue ${isComplete ? "cursor-not-allowed" : "cursor-pointer"}`}
                      onClick={() =>
                        !isComplete &&
                        handleChangeCount(
                          item.id,
                          todayEntry?.presentCount ?? 0,
                        )
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
      )}
    </>
  );
}
