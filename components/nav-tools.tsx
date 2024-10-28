"use client";

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type ToolWithUrl = {
  title: string;
  url: string;
  icon: LucideIcon;
  actions?: {
    title: string;
    icon?: LucideIcon;
    url: string;
  }[];
};

type ToolWithFunction = {
  title: string;
  function: () => void;
  icon: LucideIcon;
  actions?: {
    title: string;
    icon?: LucideIcon;
    url: string;
  }[];
};

export function NavTools({
  label,
  tools,
}: {
  label: string;
  tools: (ToolWithUrl | ToolWithFunction)[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {tools.map((tool) =>
          tool.actions && tool.actions.length > 0 ? (
            <SidebarMenuItem key={tool.title}>
              {"url" in tool ? (
                <SidebarMenuButton asChild tooltip={tool.title}>
                  <a href={tool.url}>
                    <tool.icon />
                    <span>{tool.title}</span>
                  </a>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton
                  variant="outline"
                  tooltip={tool.title}
                  onClick={tool.function}
                >
                  <tool.icon />
                  {tool.title}
                </SidebarMenuButton>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  {tool.actions?.map((action) => (
                    <DropdownMenuItem key={action.title}>
                      {action.icon && (
                        <action.icon className="text-muted-foreground" />
                      )}
                      <span>{action.title}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem key={tool.title}>
              {"url" in tool ? (
                <SidebarMenuButton asChild tooltip={tool.title}>
                  <a href={tool.url}>
                    <tool.icon />
                    <span>{tool.title}</span>
                  </a>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton tooltip={tool.title} onClick={tool.function}>
                  <tool.icon />
                  {tool.title}
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
