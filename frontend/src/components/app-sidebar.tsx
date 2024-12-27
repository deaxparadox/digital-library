"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "INDIA",
      logo: GalleryVerticalEnd,
      plan: "",
    },
    {
      name: "USA",
      logo: AudioWaveform,
      plan: "",
    }
  ],
  navMain: [
    {
      title: "School",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "10th",
          url: "#",
        },
        {
          title: "11th",
          url: "#",
        },
        {
          title: "12th",
          url: "#",
        },
      ],
    },
    {
      title: "College",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "BCS",
          url: "#",
        },
        {
          title: "B.Tech",
          url: "#",
        },
        {
          title: "MBBS",
          url: "#",
        },
      ],
    },
  
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} variant="floating">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
