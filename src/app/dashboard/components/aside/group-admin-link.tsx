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
      <AsideAdminLink active={pathname === "/"} path="/" icon={<LayoutDashboard  />} >Dashboard</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/quiz")} path="/quiz" icon={<Skull /> }>Quiz</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/settings")} path="/settings" icon={<Settings />} >Configurações</AsideAdminLink>
    </AsideItemCol>  
  );
};

export default GroupAdminLink;