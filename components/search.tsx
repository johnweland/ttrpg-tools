"use client";

import * as React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
  Search,
  FlameKindling,
  Globe,
  Wrench,
  BadgeCheck,
  BookOpen,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <SidebarMenu
        onClick={(e) => {
          e.preventDefault();
          setOpen((open) => !open);
        }}
      >
        <SidebarGroup>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <>
                <Search />
                <span>Search</span>
                <span className="ml-auto text-sm text-muted-foreground">
                  Press{" "}
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </span>
              </>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarMenu>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden.Root>
          <DialogTitle>Command Menu</DialogTitle>
          <DialogDescription>Quick Search Command Pallet</DialogDescription>
        </VisuallyHidden.Root>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <FlameKindling />
              <span>Campaigns</span>
            </CommandItem>
            <CommandItem>
              <Globe />
              <span>Worlds</span>
            </CommandItem>
            <CommandItem>
              <Wrench />
              <span>Tools</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <BadgeCheck />
              <span>Account</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BookOpen />
              <span>Documentation</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
