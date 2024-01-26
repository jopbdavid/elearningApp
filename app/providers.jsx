"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <div>
      <Toaster position="top-center" />
      {children}
    </div>
  );
};

export default Providers;
