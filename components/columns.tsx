"use client"

import { ColumnDef } from "@tanstack/react-table"
import {ArrowUp, ArrowRight, ArrowDown} from "lucide-react"

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
        accessorKey:"label",
        header: "Label"
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
        header:"Priority",
        cell: ({row}) => {
            const priority = row.getValue("priority");
            let arrowIcon;
            const size = 16;
            
            switch (priority){
                case "High":
                    arrowIcon = <ArrowUp size={size}/>
                    break;
                case "Medium":
                    arrowIcon = <ArrowRight size={size}/>
                    break;
                case "Low":
                    arrowIcon = <ArrowDown size={size}/>
            }

            return(
                <div className="flex items-center gap-2">
                    {arrowIcon}
                    <span>{row.getValue("priority")}</span>
                </div>
            )
        }
    },
]