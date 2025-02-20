import TaskList from "@/components/todo/task-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChartSpline } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";

export default function Page() {
    const progress = 33;
    
    return (
        <div >
            <Card
                className="overflow-hidden rounded-[0.5rem] border bg-background shadow m-6 mb-3"
            >
             <div className="flex items-center gap-x-4 p-6 w-full">
                <div className="w-8 flex-none">
                    <ChartSpline />
                </div>
                <Progress value={progress} className="flex-1"/>
                <div className="flex-1">
                    <h6>{progress}%</h6>
                </div>
           </div>      
            </Card>
          
            <Tabs defaultValue="overall" >
                <TabsList className="ml-[22px]">
                    <TabsTrigger value="overall">Overall</TabsTrigger>
                    <TabsTrigger value="board">Board</TabsTrigger>
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>
                <TabsContent value="overall">
                    <TaskList/>
                </TabsContent>
                <TabsContent value="board">
                    Board Kanban
                </TabsContent>
                <TabsContent value="calendar">
                    Calendar
                </TabsContent>
                <TabsContent value="timeline">
                    Timeline
                </TabsContent>
            </Tabs>
        </div>
    );
}
