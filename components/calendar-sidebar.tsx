"use client";
import { FlameKindling, HelpingHand, Plus, Swords } from "lucide-react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Almeria: The Begining",
      logo: HelpingHand,
      campaignSetting: "Almeria",
    },
    {
      name: "Almeria: Blood & Sand",
      logo: Swords,
      campaignSetting: "Almeria",
    },
    {
      name: "Pros & Perils",
      logo: FlameKindling,
      campaignSetting: "None",
    },
    {
      name: "Pros & Perils 2",
      logo: FlameKindling,
      campaignSetting: "None",
    },
  ],
  calendars: [
    {
      name: "Campaign Calendars",
      get items() {
        return data.teams.map((item) => item.name);
      },
    },
    {
      name: "My Calendars",
      items: ["Personal"],
    },
    {
      name: "Other",
      items: ["Holidays", "Birthdays"],
    },
  ],
};

export function CalendarSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      variant="floating"
      side="right"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
