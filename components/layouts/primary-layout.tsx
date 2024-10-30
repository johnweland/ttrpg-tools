import { AppSidebar } from "@/components/app-sidebar";
import { CalendarSidebar } from "@/components/calendar-sidebar";
import DynamicBreadCrumb from "@/components/dynamic-breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <DynamicBreadCrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-2 pr-4 pt-0 pb-2">
          {children}
        </div>
      </SidebarInset>
      <CalendarSidebar className="w-auto" />
    </SidebarProvider>
  );
}