import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeekCalendar() {
  const habitContext = useContext(HabitContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const habitArray = habitContext?.state.habits || [];
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideDirection, setSlideDirection] = useState<number>(0);

  const clickedDate: string | null = searchParams.get("date");
  const clickedDateDate: Date | null = clickedDate
    ? new Date(clickedDate)
    : null;

  const getStartOfWeek = (date: Date): Date => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    return startOfWeek;
  };

  const startOfWeek = getStartOfWeek(currentDate);

  function handleNextWeek() {
    setSlideDirection(1);
    setCurrentDate((prevDate) => {
      const nextWeek = new Date(prevDate);
      nextWeek.setDate(prevDate.getDate() + 7);

      const newStartOfWeek = getStartOfWeek(nextWeek);
      const formattedDate = newStartOfWeek.toDateString();
      const currentDate = searchParams.get("date");

      if (currentDate !== formattedDate) {
        setTimeout(() => setSearchParams({ date: formattedDate }), 0);
      }

      return nextWeek;
    });
  }

  const handlePreviousWeek = () => {
    setSlideDirection(-1);
    setCurrentDate((prevDate) => {
      const previousWeek = new Date(prevDate);
      previousWeek.setDate(prevDate.getDate() - 7);

      // Oblicz nowy startOfWeek bezpośrednio z previousWeek
      const newStartOfWeek = getStartOfWeek(previousWeek);
      const formattedDate = newStartOfWeek.toDateString();
      const currentDate = searchParams.get("date");

      if (currentDate !== formattedDate) {
        setTimeout(() => setSearchParams({ date: formattedDate }), 0);
      }

      return previousWeek;
    });
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + index);
    return day;
  });

  const handleClick = (day: Date) => {
    const newPrams = new URLSearchParams();
    newPrams.append("date", day.toDateString());
    setSearchParams(newPrams);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <div className="mx-auto mb-2 mt-4 w-full max-w-3xl overflow-hidden rounded-3xl">
      <div className="bg-babyBlue p-6 text-white">
        <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
          <motion.div
            key={startOfWeek.toISOString()}
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="mb-6 grid grid-cols-7 gap-4"
          >
            {daysOfWeek.map((day, index) => {
              const isToday =
                day.toLocaleDateString() === new Date().toLocaleDateString();
              const clickedDay =
                clickedDateDate?.toLocaleDateString() ===
                day.toLocaleDateString();
              const currentDayFormat = day.toLocaleDateString("en-GB", {
                day: "numeric",
                weekday: "short",
              });

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center"
                >
                    <button
                    onClick={() => handleClick(day)}
                    className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg transition-all duration-300 ${
                      isToday
                      ? "bg-green-500 text-white shadow-lg"
                      : clickedDay
                        ? "bg-white/20 text-white shadow-md"
                        : "bg-backgroundButton hover:bg-buttonHover text-white/90"
                    }`}
                    >
                    <span className="text-xs font-medium opacity-75">
                      {currentDayFormat.split(",")[0]}
                    </span>
                    <span className="text-base font-bold">
                      {currentDayFormat.split(",")[1]}
                    </span>
                    </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-between px-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center rounded-lg bg-[#5A4C8C] px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-[#4F4277]"
            onClick={handlePreviousWeek}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Prev Week
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center rounded-lg bg-[#5A4C8C] px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-[#4F4277]"
            onClick={handleNextWeek}
          >
            Next Week
            <ChevronRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
