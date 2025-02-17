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
      id: "1a2b3c4d",
      label: "Home",
      title: "Deep Clean the Living Room and Organize Bookshelf",
      status: "In Progress",
      priority: "High"
    },
    {
      id: "2b3c4d5e",
      label: "Work",
      title: "Complete Monthly Report and Submit to Manager",
      status: "Done",
      priority: "Medium"
    },
    {
      id: "3c4d5e6f",
      label: "Side-Project",
      title: "Build a Personal Portfolio Website with React",
      status: "Todo",
      priority: "High"
    },
    {
      id: "4d5e6f7g",
      label: "Home",
      title: "Fix the Leaky Faucet in the Kitchen",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: "5e6f7g8h",
      label: "Work",
      title: "Review Pull Requests and Merge Approved Changes",
      status: "Done",
      priority: "Low"
    },
    {
      id: "6f7g8h9i",
      label: "Side-Project",
      title: "Write a Blog Post on JavaScript Performance Optimization",
      status: "Todo",
      priority: "Medium"
    },
    {
      id: "7g8h9i0j",
      label: "Work",
      title: "Prepare Slides for Upcoming Client Presentation",
      status: "In Progress",
      priority: "High"
    },
    {
      id: "8h9i0j1k",
      label: "Home",
      title: "Plan and Organize the Weekly Meal Prep",
      status: "Done",
      priority: "Low"
    },
    {
      id: "9i0j1k2l",
      label: "Side-Project",
      title: "Add Dark Mode Support to My Open Source Project",
      status: "Todo",
      priority: "High"
    },
    {
      id: "0j1k2l3m",
      label: "Work",
      title: "Conduct Code Review for New Team Member",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: "1k2l3m4n",
      label: "Home",
      title: "Rearrange Bedroom Furniture for Better Space Utilization",
      status: "Todo",
      priority: "Low"
    },
    {
      id: "2l3m4n5o",
      label: "Side-Project",
      title: "Refactor Existing Codebase and Improve Documentation",
      status: "Done",
      priority: "Medium"
    }
  ];
  
}