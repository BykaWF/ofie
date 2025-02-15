import { DataTable } from "./data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import {getData} from "@/lib/utils"
import {columns} from "@/components/columns"

export default async function TaskList(){
    const data = await getData();
    
    return(
        <Card>
            <CardHeader>
                <CardTitle>Task List</CardTitle>
                <CardDescription>List of tasks</CardDescription>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={data}/>
            </CardContent>

        </Card>
    )
}