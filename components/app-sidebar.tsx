"use client";

import * as React from "react";
import {
  AudioLines,
  AudioWaveform,
  BookOpen,
  Calendar,
  CalendarClock,
  Eye,
  Ghost,
  LibraryBig,
  LifeBuoy,
  LucideGlobe,
  MapIcon,
  Settings2,
  ShieldHalf,
  SquareTerminal,
} from "lucide-react";

import {
  GiSpikedDragonHead,
  GiVampireDracula,
  GiObelisk,
  GiGhost,
} from "react-icons/gi";

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
import { CommandMenu } from "@/components/search";

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
  mainNav: [
    {
      title: "Journals",
      url: "#",
      icon: LibraryBig,
      items: [
        {
          title: "People",
          url: "#",
        },
        {
          title: "Organizations",
          url: "#",
        },
        {
          title: "Places",
          url: "#",
        },
        {
          title: "Items",
          url: "#",
        },
        {
          title: "Creatures",
          url: "#",
        },
        {
          title: "Pantheons",
          url: "#",
        },
        {
          title: "Planes",
          url: "#",
        },
        {
          title: "Languages",
          url: "#",
        },
      ],
    },
    {
      title: "Histories",
      url: "#",
      icon: CalendarClock,
      items: [
        {
          title: "Eras",
          url: "#",
        },
        {
          title: "Events",
          url: "#",
        },
        {
          title: "World Calendar",
          url: "#",
        },
      ],
    },
    {
      title: "World Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  campaignsNav: [
    {
      title: "Phandelver & Below ...",
      url: "#",
      icon: GiObelisk,
    },
    {
      title: "Curse of Strahd",
      url: "#",
      icon: GiVampireDracula,
    },
    {
      title: "Tyrany of Dragons",
      url: "#",
      icon: GiSpikedDragonHead,
    },
    {
      title: "Ghosts of Saltmarsh",
      url: "#",
      icon: GiGhost,
    },
  ],
  helpNav: [
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
  ],
  toolsNav: [
    {
      title: "Session Notes",
      url: "#",
      icon: AudioLines,
      actions: [
        {
          title: "Add to Discord",
          icon: SquareTerminal,
          url: "#",
        },
      ],
    },
    {
      title: "Session Calendars",
      function: () => {
        console.log("Session Calendars");
      },
      icon: Calendar,
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
        <CommandMenu />
        <NavMain label="World Data" items={data.mainNav} />
        <NavMain label="Campaigns" items={data.campaignsNav} />
        <NavTools label="Tools" tools={data.toolsNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings items={data.helpNav} />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
