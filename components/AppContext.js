import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React, { useState, createContext, setState } from "react";

export const ColorContext = createContext();

export const AppProvider = (props) => {
  function changeTotal() {
    setState((prevState) => {
      // Object.assign would also work
      return { ...prevState, ...updatedValues };
    });
  }

  //    const [total, setTotal] = useState();

  const da = useState({
    colors: { blue: "#03619c", yellow: "#8c8f03", red: "#9c0312" },
    resorts: [
      { name: "Jolly Beach", id: 1 },
      { name: "Royalton", id: 2 },
      { name: "St James Club", id: 3 },
    ],
    total: 0,
    setTotal: () => {
      changeTotal();
    },
  });
  return (
    <ColorContext.Provider value={da}>{props.children}</ColorContext.Provider>
  );
};
