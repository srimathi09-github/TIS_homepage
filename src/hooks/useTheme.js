import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("tis-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("tis-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;