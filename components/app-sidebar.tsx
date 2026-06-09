"use client";

import * as React from "react";

import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  Book02Icon,
  Exchange01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

// ─── CONFIGURACIÓN DE MENÚS ADAPTADA A LA BIBLIOTECA ───────────────────
const data = {
  user: {
    name: "Administrador",
    email: "admin@bibliogestion.com",
    avatar: "/avatars/shadcn.jpg", // Cambiará dinámicamente cuando conectemos Auth
  },
  navSecondary: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
    },
    {
      title: "Libros",
      url: "/books",
      icon: <HugeiconsIcon icon={Book02Icon} strokeWidth={2} />, // Icono de libro
    },
    {
      title: "Movimientos",
      url: "/movements",
      icon: <HugeiconsIcon icon={Exchange01Icon} strokeWidth={2} />, // Icono de intercambio/transacción
    },
    {
      title: "Usuarios",
      url: "/users",
      icon: <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />, // Icono de grupo de usuarios
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard" className="flex items-center gap-2">
                {/* Usamos el logo que dejó el profesor */}
                <Image src="/LogoGreen.png" alt="Logo" width={32} height={32} />
                <span className="font-bold text-slate-800 tracking-tight">
                  BiblioGestión
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Renderiza las opciones de la biblioteca */}
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
