import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event) => {
      if (
        event.target.closest("a") ||
        event.target.closest("button")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${
        hovering ? "custom-cursor-hover" : ""
      }`}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.2,
      }}
    />
  );
}

export default CustomCursor;