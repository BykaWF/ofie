export type Task = {
    id:string
    username:string
    label: "Home" | "Work" | "Sport" | "Side-Project"
    title:string
    status: "In Progress" | "Todo" | "Done"
    priority: "Low" | "Medium" | "High"
    description?:any
    dueDate?: Date;
    reminderDate?: Date;
    avatarUrl:string
}