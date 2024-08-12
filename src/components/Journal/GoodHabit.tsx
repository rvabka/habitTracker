import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Popup from "reactjs-popup";
import { goodHabit } from "../data/habitOptions";
import { v4 as uuidv4 } from "uuid";
import { HabitContext } from "../context/HabitContext";
import { Habit } from "../context/types";
import { addHabit as addHabitAction } from "../context/habitActions";

export default function BadHabit() {
  const [open, setOpen] = useState<boolean>(false);
  const initialFormState = {
    name: "",
    date: "",
    reminder: "",
    goal: "",
    count: 1,
    presentCount: 0,
    data: [],
  };
  const [formState, setFormState] =
    useState<Omit<Habit, "id">>(initialFormState);
  const closeModal = () => {
    setOpen(false);
    setFormState(initialFormState);
    setErrors({});
  };

  //context
  const habitContext = useContext(HabitContext);
  if (!habitContext) {
    throw new Error("HabitContext must be used within a HabitProvider");
  }
  const { dispatch } = habitContext;

  const [errors, setErrors] = useState<Partial<Habit>>({});

  function validateForm(): boolean {
    const newErrors: Partial<Habit> = {};
    if (!formState.name) newErrors.name = "Name is required";
    if (!formState.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      let countValue = prevState.count;

      if (name === "goal") {
        countValue = parseInt(value) || 1;
      }

      if (name === "goal" || name === "goalUnit") {
        const [currentValue, currentUnit] = prevState.goal.split(" ");
        if (name === "goal") {
          return {
            ...prevState,
            goal: `${value} ${currentUnit || ""}`.trim(),
            count: countValue,
          };
        } else {
          return {
            ...prevState,
            goal: `${currentValue || ""} ${value}`.trim(),
          };
        }
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  const addHabit = async () => {
    if (validateForm()) {
      const countValue = parseInt(formState.goal.split(" ")[0]) || 1;
      const newHabit: Habit = {
        id: uuidv4(),
        ...formState,
        count: countValue,
        data: [{ day: formState.date, done: 0 }],
      };
      await addHabitAction(newHabit, dispatch);
      closeModal();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue"
        onClick={() => setOpen((o) => !o)}
      >
        <FaBrain size={30} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="relative -mt-20 flex w-[28rem] flex-col items-center justify-center rounded-md bg-second p-5 shadow-md sm:w-80">
          <h1 className="text-center text-green-600">Good Habit 😎</h1>
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
            <label className="-mb-[0.75rem] flex text-sm font-medium dark:text-white">
              Habit name{" "}
              <span className="ml-1 text-red-600">
                * {errors.name && `${errors.name}`}
              </span>
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
              {goodHabit.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="-mb-[0.75rem] block text-sm font-medium dark:text-white">
              Start date
              <span className="ml-1 text-red-600">
                * {errors.date && `${errors.date}`}
              </span>
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
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    How often?
                  </option>
                  <option value="day">For day</option>
                  <option value="week">For week</option>
                  <option value="month">For month</option>
                </select>
              </div>
            </div>
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
