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
      priority: "High",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar1.png",
      description: "### Task Details\n- **Location:** Living Room\n- **Objective:** Organize bookshelf and deep clean the area."
    },
    {
      id: "2b3c4d5e",
      label: "Work",
      title: "Complete Monthly Report and Submit to Manager",
      status: "Done",
      priority: "Medium",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar2.png",
      description: "### Task Details\n- **Deadline:** End of the month\n- **Objective:** Compile and submit the monthly report."
    },
    {
      id: "3c4d5e6f",
      label: "Side-Project",
      title: "Build a Personal Portfolio Website with React",
      status: "Todo",
      priority: "High",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar3.png",
      description: "### Task Details\n- **Objective:** Create a personal portfolio website using React."
    },
    {
      id: "4d5e6f7g",
      label: "Home",
      title: "Fix the Leaky Faucet in the Kitchen",
      status: "In Progress",
      priority: "Medium",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar4.png",
      description: "### Task Details\n- **Location:** Kitchen\n- **Objective:** Repair the leaky faucet."
    },
    {
      id: "5e6f7g8h",
      label: "Work",
      title: "Review Pull Requests and Merge Approved Changes",
      status: "Done",
      priority: "Low",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar5.png",
      description: "### Task Details\n- **Objective:** Review and merge pull requests."
    },
    {
      id: "6f7g8h9i",
      label: "Side-Project",
      title: "Write a Blog Post on JavaScript Performance Optimization",
      status: "Todo",
      priority: "Medium",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar6.png",
      description: "### Task Details\n- **Objective:** Write a blog post on optimizing JavaScript performance."
    },
    {
      id: "7g8h9i0j",
      label: "Work",
      title: "Prepare Slides for Upcoming Client Presentation",
      status: "In Progress",
      priority: "High",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar7.png",
      description: "### Task Details\n- **Objective:** Create slides for the client presentation."
    },
    {
      id: "8h9i0j1k",
      label: "Home",
      title: "Plan and Organize the Weekly Meal Prep",
      status: "Done",
      priority: "Low",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar8.png",
      description: "### Task Details\n- **Objective:** Plan and organize meals for the week."
    },
    {
      id: "9i0j1k2l",
      label: "Side-Project",
      title: "Add Dark Mode Support to My Open Source Project",
      status: "Todo",
      priority: "High",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar9.png",
      description: "### Task Details\n- **Objective:** Implement dark mode support in the open source project."
    },
    {
      id: "0j1k2l3m",
      label: "Work",
      title: "Conduct Code Review for New Team Member",
      status: "In Progress",
      priority: "Medium",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar10.png",
      description: "### Task Details\n- **Objective:** Review code submitted by the new team member."
    },
    {
      id: "1k2l3m4n",
      label: "Home",
      title: "Rearrange Bedroom Furniture for Better Space Utilization",
      status: "Todo",
      priority: "Low",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar11.png",
      description: "### Task Details\n- **Location:** Bedroom\n- **Objective:** Rearrange furniture to optimize space."
    },
    {
      id: "2l3m4n5o",
      label: "Side-Project",
      title: "Refactor Existing Codebase and Improve Documentation",
      status: "Done",
      priority: "Medium",
      username: "BykaWf",
      avatarUrl: "https://example.com/avatar12.png",
      description: "### Task Details\n- **Objective:** Refactor codebase and enhance documentation."
    }
  ];
}