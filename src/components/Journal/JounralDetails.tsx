import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { useSearchParams } from "react-router-dom";

export default function JournalDetails() {
  const [searchData] = useSearchParams();
  const habitContext = useContext(HabitContext);
  const habitArray = habitContext?.state.habits || [];
  const presentData = searchData.get("date") || new Date();

  const filteredHabits = habitArray.filter((item) => {
    const dateObj1 = new Date(presentData);
    const dateObj2 = new Date(item.date);
    return (
      dateObj1.getFullYear() === dateObj2.getFullYear() &&
      dateObj1.getMonth() === dateObj2.getMonth() &&
      dateObj1.getDate() === dateObj2.getDate()
    );
  });

  console.log(habitArray)

  return (
    <div>
      {filteredHabits.length > 0 ? (
        filteredHabits.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))
      ) : (
        <h1>There aren't planned habits for today.</h1>
      )}
    </div>
  );
}
