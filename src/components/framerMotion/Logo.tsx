import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#7263B9",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#7263B9",
  },
};

const Logo = () => (
  <div
    className="container -mx-2"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "25px",
      height: "50px",
      width: "50px",
      backgroundColor: "#1E1C29",
      borderRadius: "10px",
    }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
      width="45"
      height="45"
    >
      <motion.rect
        x="30"
        y="20"
        width="10"
        height="60"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
        }}
        fill="none"
        stroke="#7263B9"
        strokeWidth="3"
        rx="5"
      />
      <motion.rect
        x="60"
        y="20"
        width="10"
        height="60"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
        }}
        fill="none"
        stroke="#7263B9"
        strokeWidth="3"
        rx="5"
      />
      <motion.rect
        x="30"
        y="45"
        width="40"
        height="10"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
        }}
        fill="none"
        stroke="#7263B9"
        strokeWidth="3"
        rx="5"
      />
    </motion.svg>
  </div>
);

export default Logo;
