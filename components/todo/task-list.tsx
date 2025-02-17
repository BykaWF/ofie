import { DataTable } from "../data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import {getData} from "@/lib/utils"
import {columns} from "@/components/todo/columns"

export default async function TaskList(){
    const data = await getData();
    
    return(
        <div className="container p-6">
            <Card
                className="overflow-hidden rounded-[0.5rem] border bg-background shadow"
            >
                <CardHeader>
                    <CardTitle>Task List</CardTitle>
                    <CardDescription>Here's a list of your tasks</CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={data}/>
                </CardContent>

            </Card>
        </div>
        
    )
}