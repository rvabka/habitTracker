import { GoNoEntry } from "react-icons/go";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Popup from "reactjs-popup";
import { badHabit } from "../data/habitOptions";
import { v4 as uuidv4 } from "uuid";
import { HabitContext } from "../context/HabitContext";
import { Habit } from "../context/types";
import { addHabitToFirestore } from "../../firebase/firebase";

export default function BadHabit() {
  const [open, setOpen] = useState<boolean>(false);
  const initialFormState = {
    name: "",
    date: "",
    reminder: "",
    goal: "",
    count: 1,
    data: [],
  };
  const [formState, setFormState] =
    useState<Omit<Habit, "id">>(initialFormState);
  const closeModal = () => {
    setOpen(false);
    setFormState(initialFormState);
  };

  const habitContext = useContext(HabitContext);
  if (!habitContext) {
    throw new Error("HabitContext must be used within a HabitProvider");
  }
  const { dispatch } = habitContext;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addHabit = async () => {
    const newHabit: Habit = {
      id: uuidv4(),
      ...formState,
    };

    dispatch({
      type: "ADD_DATA",
      payload: newHabit,
    });
    await addHabitToFirestore(newHabit);
    setFormState(initialFormState);
    closeModal();
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
        <div className="relative -mt-20 flex w-[28rem] flex-col items-center justify-center rounded-md bg-second p-5 shadow-md sm:w-80">
          <h1 className="text-center text-green-600">Bad Habit 😔</h1>
          <motion.button
            className="pointer absolute right-1 top-1 text-white"
            onClick={closeModal}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <IoClose size={35} />
          </motion.button>
          <div className="flex w-full flex-col gap-y-4 p-5">
            <label className="-mb-[0.75rem] block text-sm font-medium dark:text-white">
              Habit name <span className="text-red-600">*</span>
            </label>
            <select
              name="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-second dark:focus:border-babyBlue"
              value={formState.name}
              onChange={handleInputChange}
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
              Start date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="date"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
              placeholder="Start date"
              value={formState.date}
              onChange={handleInputChange}
            />
            <label className="-mb-[0.5rem] block text-sm font-medium dark:text-white">
              Time
            </label>
            <input
              type="time"
              name="reminder"
              className="relative block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue"
              placeholder="Time"
              value={formState.reminder}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-1/2 rounded-lg border p-2 text-white transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0"
            onClick={addHabit}
          >
            Save✅
          </button>
        </div>
      </Popup>
    </div>
  );
}
