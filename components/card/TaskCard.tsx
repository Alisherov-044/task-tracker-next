"use client";
import { DeleteIcon } from "@/assets/icons";
import { TaskCardInterface } from "@/interface";

export function TaskCard({ task, onDelete, onUpdate }: TaskCardInterface) {
  const { id, text, day, reminder } = task;

  return (
    <div
      className={`task__card ${reminder ? "reminded" : ""}`}
      onDoubleClick={() => onUpdate?.(task)}
    >
      <h4 className="task__card--text">{text}</h4>
      <h5 className="task__card--day">{day}</h5>
      <DeleteIcon className="delete--icon" onClick={() => onDelete?.(id)} />
    </div>
  );
}
