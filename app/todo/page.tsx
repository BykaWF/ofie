import TaskList from "@/components/todo/task-list";

export default function Page() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">TODO Page</h1>
            <TaskList/>
        </div>
    );
}
