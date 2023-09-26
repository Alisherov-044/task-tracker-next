"use client";
import { TaskScheme } from "@/interface";
import { TaskService } from "@/services/task.service";
import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState<TaskScheme[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskService = await new TaskService();
      await taskService.getTasks().then((tasks) => setTasks(tasks));
    };

    getTasks();
  }, []);

  const addTask = async (task: TaskScheme) => {
    const taskService = await new TaskService();
    await taskService.addTask(task).then((task) => setTasks([...tasks, task]));
  };

  const updateTask = async (task: TaskScheme) => {
    const taskService = await new TaskService();
    await taskService
      .updateTask(task)
      .then((task) =>
        setTasks(tasks.map((item) => (item.id === task.id ? task : item)))
      );
  };

  const deleteTask = async (id: number) => {
    const taskService = await new TaskService();
    await taskService
      .deleteTask(id)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  return { tasks, addTask, updateTask, deleteTask };
}
