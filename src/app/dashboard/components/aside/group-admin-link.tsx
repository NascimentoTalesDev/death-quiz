"use client"

import { checkPathname } from "@/lib/check-pathname";
import { AsideItemCol, AsideAdminLink } from "./components";
import { LayoutDashboard, Settings, Skull, Users } from "lucide-react"
import { usePathname } from "next/navigation";

interface GroupAdminLinkProps{
  id: string;
} 

const GroupAdminLink = ({ id }:GroupAdminLinkProps ) => {
    const pathname = usePathname()
  
    return (
    <AsideItemCol id="menu-col">
      <AsideAdminLink active={pathname === "/dashboard"} path="/dashboard" icon={<LayoutDashboard  />} >Dashboard</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/dashboard/quiz")} path="/dashboard/quiz" icon={<Skull /> }>Quiz</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/dashboard/settings")} path="/dashboard/settings" icon={<Settings />} >Configurações</AsideAdminLink>
    </AsideItemCol>  
  );
};

export default GroupAdminLink;