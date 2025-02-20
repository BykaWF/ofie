import { DataTable } from "../data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import {getData} from "@/lib/utils"
import {columns} from "@/components/todo/columns"

import { Button } from "@/components/ui/button"
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

export default async function TaskList(){
    const data = await getData();
    return(
        <div className="w-full p-6 pt-0">
            <Card
                className="overflow-hidden rounded-[0.5rem] border bg-background shadow"
            >
                <CardHeader>
                    <CardTitle>Task List</CardTitle>
                    <CardDescription>Here's a list of your tasks</CardDescription>
                </CardHeader>
                <CardContent>
                    <Sheet>
                        <DataTable columns={columns} data={data}/>
                    </Sheet>
                </CardContent>
            </Card>
        </div>
        
    )
}