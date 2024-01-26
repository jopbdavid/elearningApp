import React from "react";
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <h2 className="text-xl font-extrabold text-primary mr-auto">
        MOÇO DA QUÍMICA
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
