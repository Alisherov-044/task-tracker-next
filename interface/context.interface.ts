import { ReactNode } from "react";

export interface LayoutContextInterface {
  showTaskForm: boolean;
  toggle: () => void;
}

export interface ProviderInterface {
  children: ReactNode;
}

export interface LayoutProviderInterface extends ProviderInterface {}
