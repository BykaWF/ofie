"use client"

import { ColumnDef } from "@tanstack/react-table"
import {ArrowUp, ArrowRight, ArrowDown, Timer, CircleOff, CircleHelp, Circle, CircleCheckBig, MoreHorizontal,} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import React from "react"

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
        header: "Label",
        cell:({row}) =>{
            const label = row.getValue("label") as "Home" | "Work" | "Sport" | "Side-Project";
            const title = row.getValue("title") as string;


            return(
                <div className="flex items-center">
                   <Badge variant="outline">{label}</Badge>
                </div>
            )
        }
    },
    {
        accessorKey:"title",
        header:"Title",
        cell:({row}) =>{
            const title = row.getValue("title") as string;


            return(
                <div className="flex items-center gap-2">
                    <span>{title}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header:"Status",
        cell:({row}) =>{
            const status = row.getValue("status") as "In Progress" | "Todo" | "Canceled" | "Done" | "Backlog"| undefined;
            const size = 16;
            const statusIcon = (()=>{
                switch(status){
                    case "In Progress":
                        return <Timer size={size}/>;
                    case "Done":
                        return <CircleCheckBig size={size}/>;
                    case "Canceled":
                        return <CircleOff size={size}/>
                    case "Todo":
                        return <Circle size={size}/>
                    case "Backlog":
                        return <CircleHelp size={size}/>
                    default:
                        return null;       
                }
            })();

            return(
                <div className="flex items-center gap-2">
                    {statusIcon}
                    <span>{status}</span>
                </div>
            )
        }

    },
    {
        accessorKey:"priority",
        header:"Priority",
        cell: ({row}) => {
            const priority = row.getValue("priority") as "High" | "Medium" | "Low" | undefined;
            
            const size = 16;
            
            const arrowIcon = (() => {
                switch (priority) {
                    case "High":
                        return <ArrowUp size={size} />;
                    case "Medium":
                        return <ArrowRight size={size} />;
                    case "Low":
                        return <ArrowDown size={size} />;
                    default:
                        return null; 
                }
            })();

            return(
                <div className="flex items-center gap-2">
                    {arrowIcon}
                    <span>{priority}</span>
                </div>
            )
        }
    },

    {
        id:"actions",
        cell:({row}) =>{
            const task = row.original;
            const label = task.label as string
            const [position, setPosition] = React.useState(label)

            return(
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    {/* TODO add function here to edit, create copy, Delete */}
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(task.id)}
                        >
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Make a copy
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]