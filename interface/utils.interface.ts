import { FC } from "react";

export interface RouteInterface {
  id: number;
  path: string;
  component: FC;
}
