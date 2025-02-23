import {Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings, ListTodo } from "lucide-react"
const items = [
    {
        title: "Home",
        url: "/",
        icon:Home,
    },
    {
        title: "Todo",
        url:"/plan",
        icon:ListTodo,
    },
    {
        title:"Settings",
        url:"/",
        icon:Settings
    }

]


export function AppSidebar(){
    return (
        <Sidebar
        collapsible="icon"
        >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Offie</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}