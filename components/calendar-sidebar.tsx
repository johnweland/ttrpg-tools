"use client";
import * as React from "react";
import { Plus } from "lucide-react";

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

import { AudioWaveform, Command } from "lucide-react";

// This is sample data.
const data = {
  teams: [
    {
      name: "Pros & Perils",
      logo: Command,
      campaignSetting: "Greyhawk",
    },
    {
      name: "Acquisitions Inc.",
      logo: AudioWaveform,
      campaignSetting: "Almeria",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      campaignSetting: "None",
    },
  ],
  calendars: [
    {
      name: "Campaign Calendars",
      items: [
        "Almeria: Beginings",
        "Pros & Perils: Joe's Campaign",
        "Pros & Perils: Andy's Campaign",
      ],
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
