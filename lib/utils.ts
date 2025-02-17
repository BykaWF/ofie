import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Task } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getData(): Promise<Task[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      label: "Home",
      title: "Lunch",
      status:"In Progress",
      priority:"High"
    },
    {
      id: "728ed52f",
      label: "Side-Project",
      title: "Build todo list",
      status:"Done",
      priority:"Low"
    },
    {
      id: "728ed52f",
      label: "Side-Project",
      title: "Lunch",
      status:"Todo",
      priority:"Medium"
    },
    // ...
  ]
}