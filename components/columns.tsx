"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Task = {
    id:string
    label: "Home" | "Work" | "Sport" | "Side-Project"
    title:string
    status: "In Progress" | "Todo" | "Canceled" | "Done" | "Backlog"
    priority: "Low" | "Medium" | "High"

}

export const columns : ColumnDef<Task>[] = [
    {
        accessorKey:"id",
        header:"ID"
    },
    {
        accessorKey:"title",
        header:"Title"
    },
    {
        accessorKey: "status",
        header:"Status"
    },
    {
        accessorKey:"priority",
        header:"Priority"
    },
    {
        accessorKey:"label",
        header:"Label"
    }
]