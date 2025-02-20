import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html>
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar/>
            <main className="flex-1">
              <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>  
      </body>
    </html>
  );
}
