import dashboard from "../assets/dashboard.svg"
import crm from "../assets/crm.svg"
import automation from "../assets/automation.svg"
import chat from "../assets/chat.svg"
import myProjects from "../assets/projects.svg"
import integrations from "../assets/integration.svg"
import manage from "../assets/manage.svg"
import reports from "../assets/reports.svg"
import settings from "../assets/settings.svg"
import { FaUserPlus } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";
import { LuMessageSquareMore } from "react-icons/lu";


export const menuItems = [
  {
    id: "dashboard",
    icon: dashboard,
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    id: "crm",
    icon: crm,
    path: "/dashboard/crm",
    label: "CRM",
    children : [
      {
        id: "contacts",
        label: "Contacts",
          path: "/dashboard/crm/contacts",
        icon: IoChatbubbleOutline
        
      },

      {
          id: "company",
          icon: TbUsersGroup,
          path: "/dashboard/crm/company",
          label: "Company",
      },

      {
        id: "deals",
        icon: TbUsersGroup,
        path: "/dashboard/crm/deals",
        label: "Deals",
    },

    {
      id: "tickets",
      icon: TbUsersGroup,
      path: "/dashboard/crm/tickets",
      label: "Tickets",
  },


    ]
  },

  {
    id: "automation",
    icon: automation,
    path: "/dashboard/automation",
    label: "Automation",
  },

  {
    id: "chat",
    icon: chat,
    path: "/dashboard/chat",
    label: "Chat",
  },

  {
    id: "my projects",
    icon: myProjects,
    path: "/dashboard/my-projects",
    label: "My Projects",
  },

  {
    id: "integrations",
    icon: integrations,
    path: "/dashboard/integration",
    label: "Integration",
    children : [
      {
        id: "communication-channels",
        label: "Communication Channels",
        path: "/dashboard/integration/communication-channels",
        icon: IoChatbubbleOutline
        
      },

      {
          id: "crm",
          icon: TbUsersGroup,
          path: "/dashboard/crm",
          label: "CRM",
      }
    ]
  },

  {
    id: "manage",
    icon: manage,
    path: "/dashboard/manage",
    label: "Manage",
    children: [
      {
        id: "template-message",
        label: "Template Message",
        path: "/dashboard/manage/template-message",
        icon: LuMessageSquareMore
      },
    ]
  },

  {
    id: "reports",
    icon: reports,
    path: "/dashboard/reports",
    label: "Reports",
  },

  {
    id: "settings",
    icon: settings,
    path: "/dashboard/settings",
    label: "Settings",
    children: [
      {
        id: "users",
        label: "Users",
        path: "/dashboard/settings/users",
        icon: FaUserPlus
      },
      {
        id: "team",
        label: "Team",
        path: "/dashboard/settings/team",
        icon: RiTeamFill
      },
      {
        id: "billing-usage",
        label: "Billing & Usage",
        path: "/dashboard/settings/billing-usage",
        icon: FaFileInvoiceDollar

      },
    ],
  },
]

export const projects = [
  {
    id: 1,
    projectName: "XScholar ERP",
    status: "Active",
    date: "2021-01-01",
  },

  {
    id: 2,
    projectName: "Smart RFID Cards",
    status: "Active",
    date: "2021-01-01",
  },

  {
    id: 3,
    projectName: "Smart RFID Cards",
    status: "Active",
    date: "2021-01-01",
  },

  {
    id: 4,
    projectName: "Smart RFID Cards",
    status: "Active",
    date: "2021-01-01",
  },
] 

export const teams = [
  {
    id: 1,
    team_name: "SIC Team",
    total_member: 12,
    date: "2021-01-01",
  },

  {
    id: 2,
    team_name: "SIC Team",
    total_member: 12,
    date: "2021-01-01",
  },

  {
    id: 3,
    team_name: "SIC Team",
    total_member: 12,
    date: "2021-01-01",
  },
] 