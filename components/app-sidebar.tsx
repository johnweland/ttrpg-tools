"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  LifeBuoy,
  LucideGlobe,
  MapIcon,
  Settings2,
  ShieldHalf,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSettings } from "@/components/nav-settings";
import { NavTools } from "@/components/nav-tools";
import { NavUser } from "@/components/nav-user";
import { WorldSwitcher } from "@/components/world-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  worlds: [
    {
      name: "Greyhawk",
      logo: ShieldHalf,
      plan: "Explorer",
    },
    {
      name: "Almeria",
      logo: MapIcon,
      plan: "World Builder",
    },
    {
      name: "Ethralis",
      logo: LucideGlobe,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  navSettings: [
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Feedback",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  tools: [
    {
      name: "Session Calendars",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Session Notes",
      url: "#",
      icon: AudioWaveform,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <WorldSwitcher worlds={data.worlds} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavTools tools={data.tools} />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings items={data.navSettings} />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
