import {
  CogIcon,
  LayoutDashboardIcon,
  Users2Icon,
  type LucideIcon,
  FileSpreadsheetIcon,
  CarIcon,
  SproutIcon,
} from "lucide-react";

export interface GroupItemValue {
  label: string;
  desc: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

export interface GroupItem {
  label: string;
  values: GroupItemValue[];
}

export const sidebarAffiliate: GroupItem[] = [
  {
    label: "Account",
    values: [
      {
        label: "Dashboard",
        desc: "Overview",
        value: "0",
        icon: LayoutDashboardIcon,
        href: "/account",
      },
      {
        label: "Accounts",
        desc: "Database",
        value: "1",
        icon: Users2Icon,
        href: "/account/agents",
      },
      {
        label: "Reports",
        desc: "View Reports",
        value: "2",
        icon: FileSpreadsheetIcon,
        href: "/account/reports",
      },
    ],
  },
  {
    label: "Settings",
    values: [
      {
        label: "Settings",
        desc: "General Settings",
        value: "0",
        icon: CogIcon,
        href: "/account/settings",
      },
    ],
  },
];

export const sidebarUser: GroupItem[] = [
  {
    label: "Account",
    values: [
      {
        label: "Autos",
        desc: "Auto Insurance Overview",
        value: "0",
        icon: CarIcon,
        href: "/account",
      },
      {
        label: "Life",
        desc: "Life Insurance Management",
        value: "1",
        icon: SproutIcon,
        href: "/account/life",
      },
      {
        label: "PA",
        desc: "Personal Accident Insurance Management",
        value: "2",
        icon: Users2Icon,
        href: "/account/pa",
      },
    ],
  },
  {
    label: "Settings",
    values: [
      {
        label: "Settings",
        desc: "General Settings",
        value: "0",
        icon: CogIcon,
        href: "/account/settings",
      },
    ],
  },
];
