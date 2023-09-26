"use client";
import { LayoutContextInterface, LayoutProviderInterface } from "@/interface";
import { createContext, useContext, useState } from "react";

const initialValue: LayoutContextInterface = {
  showTaskForm: false,
  toggle: () => {},
};

const LayoutContext = createContext<LayoutContextInterface>(initialValue);

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider = ({ children }: LayoutProviderInterface) => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);

  const toggle = () => {
    setShowTaskForm((prev) => !prev);
  };

  return (
    <LayoutContext.Provider value={{ showTaskForm, toggle }}>
      {children}
    </LayoutContext.Provider>
  );
};
