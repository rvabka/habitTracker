import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Popup from "reactjs-popup";
import { goodHabit } from "../data/habitOptions";
import { HabitContext } from "../context/HabitContext";
import { Habit } from "../context/types";
import HabitForm from "./HabitForm";

export default function GoodHabit() {
  const initialFormState = {
    name: "",
    date: "",
    color: "#e66465",
    goal: "",
    count: 1,
    data: [],
  };
  const [open, setOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState<Partial<Habit>>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, setFormState] =
    useState<Omit<Habit, "id">>(initialFormState);

  const habitContext = useContext(HabitContext);
  if (!habitContext) {
    throw new Error("HabitContext must be used within a HabitProvider");
  }

  const closeModal = () => {
    setOpen(false);
    setFormState(initialFormState);
    setErrors({});
  };

  return (
    <div>
      <button
        type="button"
        className="flex flex-col items-center justify-center rounded-full bg-first p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue"
        onClick={() => setOpen((o) => !o)}
      >
        <FaBrain size={30} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="relative -mt-20 flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-first p-7 text-white shadow-md sm:w-80">
          <h1 className="text-center text-xl text-green-600">Good Habit 😎</h1>
          <motion.button
            className="pointer absolute right-2 top-2 text-white"
            onClick={closeModal}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <IoClose size={35} />
          </motion.button>
          <HabitForm
            habbitData={goodHabit}
            initialFormState={initialFormState}
            closeModal={closeModal}
          />
        </div>
      </Popup>
    </div>
  );
}
