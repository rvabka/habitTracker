import { useContext, useState, useEffect } from "react";
import { HabitContext, useHabitContext } from "../context/HabitContext";
import { useSearchParams } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { BallTriangle } from "react-loader-spinner";
import {
  getHabitsFromFirestore,
  addNewDayIfNecessary,
} from "../../firebase/firebase";
import JorunalItem from "./JournalItem";

export default function JournalDetails() {
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const { state, dispatch } = useHabitContext();
  const [searchData] = useSearchParams();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { width, height } = useWindowSize();

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
                <JorunalItem
                  key={index}
                  formattedDate={formattedDate}
                  isComplete={isComplete}
                  todayEntry={todayEntry}
                  item={item}
                  index={index}
                  setShowConfetti={setShowConfetti}
                />
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
