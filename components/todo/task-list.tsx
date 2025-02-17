import { DataTable } from "../data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import {getData} from "@/lib/utils"
import {columns} from "@/components/todo/columns"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import TaskImage from "@/public/jess-bailey-q10VITrVYUM-unsplash.jpg"
export default async function TaskList(){
    const data = await getData();
    const srcImg = TaskImage;
    return(
        <div className="container p-6">
            <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                    <Image 
                        src={srcImg}
                        alt="Image" 
                        className="rounded-md object-cover" />
                </AspectRatio>
            </div>
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