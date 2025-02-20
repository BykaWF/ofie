"use client"

import { ColumnDef } from "@tanstack/react-table"
import { 
    ArrowUp, 
    ArrowRight, 
    ArrowDown, 
    Timer,
    CircleOff, 
    CircleHelp, 
    Circle, 
    CircleCheckBig, 
    MoreHorizontal,
    ChevronsUpDown,
} from "lucide-react"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Card } from "../ui/card"
import EditPannel from "../task-view"
import TaskView from "../task-view"


export type Task = {
    id:string
    label: "Home" | "Work" | "Sport" | "Side-Project"
    username:string
    title:string
    status: "In Progress" | "Todo" |"Done"
    priority: "Low" | "Medium" | "High"
    description?:any
    dueDate?: Date;
    reminderDate?: Date;
    avatarUrl: string;
}


export const columns : ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      
    {
        accessorKey:"id",
        header:"ID"
    },
    {
        accessorKey:"label",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Label
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell:({row}) =>{
            const label = row.getValue("label") as "Home" | "Work" | "Sport" | "Side-Project";
            const title = row.getValue("title") as string;


            return(
                <div className="flex items-center">
                   <Badge >{label}</Badge>
                </div>
            )
        }
    },
    {
        accessorKey:"title",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Title
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
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
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Status
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell:({row}) =>{
            const status = row.getValue("status") as "In Progress" | "Todo" | "Done";
            const size = 16;
            const statusIcon = (()=>{
                switch(status){
                    case "In Progress":
                        return <Timer size={size}/>;
                    case "Done":
                        return <CircleCheckBig size={size}/>;
                    case "Todo":
                        return <Circle size={size}/>
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
    // TODO add priority logic to sort, like numbers behind
    // https://ui.shadcn.com/docs/components/data-table#update-columns-definition-1
    {
        accessorKey:"priority",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Priority
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
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
            const [sheetOpen, setSheetOpen] = React.useState<boolean>(false);
            
                
            const triggerSheet = () => {
                setSheetOpen(true);
            };
            
            return(
                <div>
                    <div>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    {/* TODO add function here to edit, create copy, Delete */}

                    {/* add open sheet here after a click */}
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={triggerSheet}
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
                    </div>
                     <Sheet
                         open={sheetOpen}
                         onOpenChange={() => {
                           setSheetOpen(!sheetOpen);
                           }}
                    > 
                        <SheetContent className="w-full sm:max-w-5xl">
                            <SheetHeader>
                                <SheetTitle>Edit Task</SheetTitle>
                                <SheetDescription>
                                    Make changes to your task here.
                                </SheetDescription>
                            </SheetHeader>
                                <TaskView task={task}/>
                        </SheetContent>
                    </Sheet>
                </div>
                
            )
        }
    }
]