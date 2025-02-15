export type Task = {
    id:string
    label: "Home" | "Work" | "Sport" | "Side-Project"
    title:string
    status: "In Progress" | "Todo" | "Canceled" | "Done" | "Backlog"
    priority: "Low" | "Medium" | "High"

}