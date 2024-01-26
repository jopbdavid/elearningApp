"use client";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

const themes = {
  autumn: "autumn",
  halloween: "halloween",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.autumn);

  const toggleTheme = () => {
    const newTheme = theme === themes.autumn ? themes.halloween : themes.autumn;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "autumn" ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
