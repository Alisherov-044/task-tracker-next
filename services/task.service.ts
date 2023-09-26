import { TaskScheme } from "@/interface";
import { BaseUrl, TasksUrl } from "@/utils";

export class TaskService {
  getTasks(): Promise<TaskScheme[]> {
    return fetch(`${BaseUrl}/${TasksUrl}`).then((tasks) => tasks.json());
  }

  addTask(task: TaskScheme): Promise<TaskScheme> {
    return fetch(`${BaseUrl}/${TasksUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((task) => task.json());
  }

  updateTask(task: TaskScheme): Promise<TaskScheme> {
    return fetch(`${BaseUrl}/${TasksUrl}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, reminder: !task.reminder }),
    }).then((task) => task.json());
  }

  deleteTask(id: number): Promise<TaskScheme> {
    return fetch(`${BaseUrl}/${TasksUrl}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((task) => task.json());
  }
}
