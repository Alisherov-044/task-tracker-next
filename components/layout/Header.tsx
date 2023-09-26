"use client";
import { Button } from "..";
import { useRouter } from "@/hooks";
import { useLayoutContext } from "@/context";

export function Header() {
  const { hasRoute } = useRouter();
  const { showTaskForm, toggle } = useLayoutContext();

  return (
    <header className="header">
      <h1 className="header--title">Task Tracker</h1>
      {hasRoute(["/"]) ? (
        <Button onClick={toggle} color={showTaskForm ? "red" : "blue"}>
          {showTaskForm ? "Close" : "Add Task"}
        </Button>
      ) : null}
    </header>
  );
}
