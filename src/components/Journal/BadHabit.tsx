import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { GoNoEntry } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import Popup from "reactjs-popup";
import { badHabit } from "./habitOptions";
import { v4 as uuidv4 } from "uuid";
import { HabitContext } from "../context/HabitContext";
import { Habit } from "../context/types";

export default function BadHabit() {
  const [open, setOpen] = useState<boolean>(false);
  const [formState, setFormState] = useState<Omit<Habit, "id">>({
    name: "",
    date: "",
    goal: "",
    reminder: "",
    repeat: "",
  });
  console.log(formState);
  const closeModal = () => {
    setOpen(false);
    setFormState({
      name: "",
      date: "",
      goal: "",
      reminder: "",
      repeat: "",
    });
  };

  const habitContext = useContext(HabitContext);
  if (!habitContext) {
    throw new Error("HabitContext must be used within a HabitProvider");
  }

  const { dispatch } = habitContext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name as keyof Omit<Habit, "id">]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "goalUnit") {
      // Łączenie liczby z jednostką
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [currentGoalValue, currentGoalUnit] = formState.goal.split(" ");
      setFormState((prevState) => ({
        ...prevState,
        goal: `${currentGoalValue || "0"} ${value}`,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name as keyof Omit<Habit, "id">]: value,
      }));
    }
  };

  const addHabit = () => {
    const newHabit: Habit = {
      id: uuidv4(),
      ...formState,
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });

    // Resetuje pola formularza
    setFormState({
      name: "",
      date: "",
      goal: "",
      reminder: "",
      repeat: "",
    });
  };

  return (
    <div>
      <button
        type="button"
        className="flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue"
        onClick={() => setOpen((o) => !o)}
      >
        <GoNoEntry size={30} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="main relative rounded-md bg-second p-5 shadow-md">
          <h1 className="text-center text-white">Bad Habit</h1>
          <motion.button
            className="pointer absolute right-1 top-1 text-white"
            onClick={closeModal}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <IoClose size={35} />
          </motion.button>
          <div className="flex flex-col gap-y-4 p-5">
            <label className="-mb-[0.75rem] block text-sm font-medium dark:text-white">
              Habit name
            </label>
            <select
              name="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-second dark:focus:border-babyBlue"
              value={formState.name}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select a habit
              </option>
              {badHabit.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="-mb-[0.75rem] block text-sm font-medium dark:text-white">
              Start date
            </label>
            <input
              type="date"
              name="date"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
              placeholder="Start date"
              value={formState.date}
              onChange={handleInputChange}
            />
            <div className="flex flex-col items-center justify-center gap-3">
              <div>
                <label className="-mb-[0.5rem] block text-sm font-medium dark:text-white">
                  Frequency
                </label>
              </div>
              <div className="flex w-full items-center justify-center gap-3">
                <input
                  className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
                  type="number"
                  name="goal"
                  placeholder="Goal"
                  value={formState.goal.split(" ")[0] || ""}
                  onChange={handleInputChange}
                />
                <select
                  className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
                  name="goalUnit"
                  value={formState.goal.split(" ")[1] || ""}
                  onChange={handleSelectChange}
                >
                  <option value="For day" disabled>
                    How often?
                  </option>
                  <option value="For day">For day</option>
                  <option value="For month">For month</option>
                  <option value="For year">For year</option>
                </select>
              </div>
            </div>
            <input
              type="time"
              name="time"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
              placeholder="Time"
              value={formState.reminder}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={addHabit}>Add Habit</button>
        </div>
      </Popup>
    </div>
  );
}
