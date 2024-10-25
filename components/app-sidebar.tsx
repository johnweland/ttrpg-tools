"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  BotIcon,
  Calendar,
  Frame,
  LucideGlobe,
  Map,
  MapIcon,
  PieChart,
  Settings2,
  ShieldHalf,
  SquareTerminal,
} from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavTools } from "@/components/nav-tools";
import { NavUser } from "@/components/nav-user";
import { WorldSwitcher } from "@/components/world-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/theme-provider";

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
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  tools: [
    {
      name: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Session Notes",
      url: "#",
      icon: RiDiscordLine,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
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
        <NavProjects projects={data.projects} />
        <NavTools tools={data.tools} />
      </SidebarContent>
      <SidebarGroup>
        <ModeToggle />
      </SidebarGroup>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}