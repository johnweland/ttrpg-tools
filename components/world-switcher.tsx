"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, CircleX } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { toast } from "sonner";

export function WorldSwitcher({
  worlds,
}: {
  worlds: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeWorld, setActiveWorld] = React.useState(worlds[0]);

  const promise = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () => reject({ status: 500, message: "Internal Server Error" }),
        2000,
      ),
    );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeWorld.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeWorld.name}
                </span>
                <span className="truncate text-xs">{activeWorld.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Worlds
            </DropdownMenuLabel>
            {worlds.map((world, index) => (
              <DropdownMenuItem
                key={world.name}
                onClick={() => setActiveWorld(world)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <world.logo className="size-4 shrink-0" />
                </div>
                {world.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2" asChild>
              <SidebarMenuButton
                tooltip={""}
                onClick={() => {
                  toast.promise(promise, {
                    loading: "Loading...",
                    success: (data) => {
                      return `Successfully added a new world!`;
                    },
                    error: (error) => {
                      return (
                        <div className="flex items-center w-auto">
                          <CircleX />
                          <div className="ml-4">
                            <span className="text-xs font-bold">
                              {error.status} - {error.message}
                            </span>
                            <p className="text-sm">
                              Failed to add a new world!
                            </p>
                          </div>
                        </div>
                      );
                    },
                  });
                }}
              >
                <Plus className="size-4" />
                <span>Add World</span>
              </SidebarMenuButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
