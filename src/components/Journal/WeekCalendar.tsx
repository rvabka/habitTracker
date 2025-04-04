import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeekCalendar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideDirection, setSlideDirection] = useState<number>(0);

  // setting searchParams on current day if not set yey
  useEffect(() => {
    if (!searchParams.get("date")) {
      setSearchParams({ date: new Date().toDateString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickedDate: string | null = searchParams.get("date");
  const clickedDateDate: Date | null = clickedDate
    ? new Date(clickedDate)
    : null;

  const currentDateFromParams = new Date(
    searchParams.get("date") || new Date(),
  );

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

    setSearchParams({
      date: checkIfIsToday(weekDays)
        ? new Date().toDateString()
        : newStartOfWeek.toDateString(),
    });
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + index);
    return day;
  });

  const checkIfIsToday = (dates: Date[]): boolean =>
    dates.some(
      (item: Date) =>
        item.getFullYear() === new Date().getFullYear() &&
        item.getMonth() === new Date().getMonth() &&
        item.getDate() === new Date().getDate(),
    );

  const handleClick = (day: Date) => {
    setSearchParams({ date: day.toDateString() });
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
            className="mb-6 grid grid-cols-7 gap-8 sm:gap-2"
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
                  className="flex w-full flex-1 flex-col items-center"
                >
                  <button
                    onClick={() => handleClick(day)}
                    className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl shadow-lg transition-all duration-300 sm:h-16 sm:w-16 ${
                      isToday
                        ? "bg-green-500 text-white shadow-lg"
                        : clickedDay
                          ? "bg-white/20 text-white shadow-md"
                          : "bg-backgroundButton text-white/90 hover:bg-buttonHover"
                    }`}
                  >
                    <span className="text-sm font-medium opacity-75">
                      {currentDayFormat.split(",")[0]}
                      <br />
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
