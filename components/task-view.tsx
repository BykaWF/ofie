import { useState } from "react";
import { Task } from "@/lib/types";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown"
import { ScrollArea } from "@/components/ui/scroll-area"



const TaskView = ({ task }: { task: Task }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        // Handle save logic here
        console.log("Task saved:", { title, description });
    };

    const handleCancel = () => {
        // Handle cancel logic here
        setTitle(task.title);
        setDescription(task.description);
    };

    return (
        <Card className="h-dvh mt-4">
            <CardHeader className="flex items-start justify-between">
                <div className="flex items-start">
                    <div>
                        <h1 className="text-lg font-semibold">{task.title}</h1>
                    </div>
                </div>
                <Badge className="w-1/8 text-center">
                    {task.status}
                </Badge>
            </CardHeader>

            <Separator />
            
            <ScrollArea className="h-full w-full flex-1 [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100vh-200px)]">
                <form className="flex" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    {/* Left box for description and editing */}
                    <div className="flex-1 p-4">
                        <h2 className="text-lg font-semibold mb-2">Description</h2>
                        <Textarea
                            className="w-full max-w-xl border p-2 rounded resize-none"
                            placeholder="Edit description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <ReactMarkdown>{description}</ReactMarkdown>
                        <div>
                            <Button type="submit" className="mt-2 mr-2">Save</Button>
                            <Button type="button" variant="secondary" onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>

                    <Separator orientation="vertical" />

                    {/* Right box for actions */}
                    <div className="flex-1 p-4">
                        <div>
                            <Button type="submit" className="m-2">Save</Button>
                            <Button type="button" variant="secondary" onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </form>

            </ScrollArea>
        </Card>
    );
};

export default TaskView;