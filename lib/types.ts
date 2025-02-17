export type Task = {
    id:string
    label: "Home" | "Work" | "Sport" | "Side-Project"
    title:string
    status: "In Progress" | "Todo" | "Done"
    priority: "Low" | "Medium" | "High"

}