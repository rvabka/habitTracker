import { Habit } from "../context/types";
import { useHabitContext } from "../context/HabitContext";
import { useState } from "react";
import {
  addHabitToFirestore,
  addNewDayIfNecessary,
} from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

interface HabitFormProps {
  habbitData: string[];
  initialFormState: Omit<Habit, "id">;
  closeModal: () => void;
}

const HabitForm: React.FC<HabitFormProps> = ({
  habbitData,
  initialFormState,
  closeModal,
}) => {
  const [errors, setErrors] = useState<Partial<Habit>>({});
  const [formState, setFormState] =
    useState<Omit<Habit, "id">>(initialFormState);

  const habitContext = useHabitContext();
  const { dispatch } = habitContext;

  const addHabit = async () => {
    if (validateForm()) {
      const countValue = parseInt(formState.goal.split(" ")[0]) || 1;
      const newHabit: Habit = {
        id: uuidv4().slice(0, 8),
        ...formState,
        count: countValue,
        data: [
          {
            day: formState.date,
            done: 0,
            presentCount: 0,
          },
        ],
      };
      dispatch({
        type: "ADD_DATA",
        payload: newHabit,
      });

      await addHabitToFirestore(newHabit);
      addNewDayIfNecessary(dispatch);
      closeModal();
    }
  };

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
      if (name === "goal") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [prevValue, prevUnit] = prevState.goal.split(" ");
        return {
          ...prevState,
          goal: `${value} ${prevUnit || "day"}`.trim(),
          count: parseInt(value) || 1,
        };
      } else if (name === "goalUnit") {
        const [prevValue] = prevState.goal.split(" ");
        return {
          ...prevState,
          goal: `${prevValue || "1"} ${value}`.trim(),
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  return (
    <>
      <div className="flex w-full flex-col gap-y-4 p-5">
        <label className="-mb-[0.75rem] flex text-sm font-medium dark:text-white">
          Habit name{" "}
          <span className="ml-1 text-red-600">
            * {errors.name && `${errors.name}`}
          </span>
        </label>
        <select
          name="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-first focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-first dark:placeholder-first dark:focus:border-babyBlue"
          value={formState.name}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select a habit
          </option>
          {habbitData.map((option: string) => (
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-first placeholder-gray-500 focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-first dark:placeholder-gray-400 dark:focus:border-babyBlue"
          placeholder="Start date"
          value={formState.date}
          onChange={handleInputChange}
        />
        <label className="-mb-[0.5rem] block text-sm font-medium dark:text-white">
          Color
        </label>
        <input
          type="color"
          name="color"
          className="relative block w-full rounded-lg border border-gray-300 p-1 text-sm focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:placeholder-white dark:focus:border-babyBlue"
          placeholder="Color"
          value={formState.color}
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
              className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-first focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-first dark:placeholder-first dark:focus:border-babyBlue"
              type="number"
              name="goal"
              placeholder="Goal"
              value={formState.goal.split(" ")[0] || ""}
              onChange={handleInputChange}
            />
            <select
              className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-first focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-first dark:placeholder-first dark:focus:border-babyBlue"
              name="goalUnit"
              value={formState.goal.split(" ")[1] || ""}
              onChange={handleInputChange}
              disabled={!formState.goal.trim()}
            >
              <option value="" disabled>
                How often?
              </option>
              <option value="day">For day</option>
              <option value="week">For week</option>
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
    </>
  );
};

export default HabitForm;
