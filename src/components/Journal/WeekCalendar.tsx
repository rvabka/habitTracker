import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeekCalendar() {
  // const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideDirection, setSlideDirection] = useState<number>(0);

  const clickedDate: string | null = searchParams.get("date");
  const clickedDateDate: Date | null = clickedDate
    ? new Date(clickedDate)
    : null;

  const today = new Date();
  const currentDateFromParams = new Date(searchParams.get("date") || today);

  const getStartOfWeek = (date: Date): Date => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    return startOfWeek;
  };

  const startOfWeek = getStartOfWeek(currentDateFromParams);

  const handleWeek = (symbol: string) => {
    setSlideDirection(symbol === "+" ? 1 : -1);
    const calculatedWeek = new Date(currentDateFromParams);
    calculatedWeek.setDate(
      currentDateFromParams.getDate() + (symbol === "+" ? +7 : -7),
    );

    const newStartOfWeek = getStartOfWeek(calculatedWeek);
    const weekDays = Array.from({ length: 7 }, (_, index) => {
      const day = new Date(newStartOfWeek);
      day.setDate(newStartOfWeek.getDate() + index);
      return day;
    });

    checkIfIsToday(weekDays)
      ? setSearchParams({ date: today.toDateString() })
      : setSearchParams({ date: newStartOfWeek.toDateString() });
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + index);
    return day;
  });

  const checkIfIsToday = (dates: Date[]): boolean =>
    dates.some(
      (item: Date) =>
        item.getFullYear() === today.getFullYear() &&
        item.getMonth() === today.getMonth() &&
        item.getDate() === today.getDate(),
    );

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
    <div className="mx-auto mb-2 mt-4 w-full overflow-hidden rounded-3xl">
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
            className="mb-6 grid grid-cols-7"
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
                    className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl shadow-lg transition-all duration-300 ${
                      isToday
                        ? "bg-green-500 text-white shadow-lg"
                        : clickedDay
                          ? "bg-white/20 text-white shadow-md"
                          : "bg-backgroundButton text-white/90 hover:bg-buttonHover"
                    }`}
                  >
                    <span className="text-sm font-medium opacity-75">
                      {currentDayFormat.split(",")[0]}
                    </span>
                    <span className="text-sm font-bold">
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
            className="flex items-center justify-center rounded-lg bg-[#5A4C8C] px-4 py-2 text-base font-medium text-white/90 transition-all duration-300 hover:bg-[#4F4277]"
            onClick={() => handleWeek("-")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Prev Week
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center rounded-lg bg-[#5A4C8C] px-4 py-2 text-base font-medium text-white/90 transition-all duration-300 hover:bg-[#4F4277]"
            onClick={() => handleWeek("+")}
          >
            Next Week
            <ChevronRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
