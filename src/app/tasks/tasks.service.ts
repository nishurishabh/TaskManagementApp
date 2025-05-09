import { NewTask } from "./task/task.model";
import {Injectable, Input} from "@angular/core";

@Injectable({providedIn: "root"})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTasks(userID: string) {
    return this.tasks.filter((task) => task.userId === userID)
  }

  addTask(taskData: NewTask, userID: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userID,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.saveTask()
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask()
  }

  saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
