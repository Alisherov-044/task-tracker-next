import { ReactNode } from "react";
import { TaskScheme } from "./scheme.interface";

export interface ButtonInterface {
  color?: string;
  children: string;
  variant?: "input";
  onClick?: () => void;
}

export interface InputInterface {
  type?: string;
  placeholder: string;
  name?: string;
  register?: object;
}

export interface CheckboxInterface {
  id: string;
  label: string;
  name?: string;
  register?: object;
}

export interface TaskCardInterface {
  task: TaskScheme;
  onUpdate?: (task: TaskScheme) => void;
  onDelete?: (id: number) => void;
}

export interface LayoutInterface {
  children: ReactNode;
}
