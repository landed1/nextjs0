import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React, { useState, createContext } from "react";

export const ColorContext = createContext();

export const AppProvider = (props) => {
  const da = useState({ blue: "#03619c", yellow: "#8c8f03", red: "#9c0312" });
  return (
    <ColorContext.Provider value={da}>{props.children}</ColorContext.Provider>
  );
};
