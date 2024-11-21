// PageTransitionWrapper.js
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
