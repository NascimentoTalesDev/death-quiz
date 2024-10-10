"use client"

import { checkPathname } from "@/lib/check-pathname";
import { AsideItemCol, AsideAdminLink } from "./components";
import { Contact, Heart, LayoutDashboard, Settings, Skull, Star, Users } from "lucide-react"
import { usePathname } from "next/navigation";

interface GroupAdminLinkProps{
  id: string;
} 

const GroupAdminLink = ({ id }:GroupAdminLinkProps ) => {
    const pathname = usePathname()
  
    return (
    <AsideItemCol id="menu-col">
      <AsideAdminLink active={pathname === "/admin/dashboard"} path="/admin/dashboard" icon={<LayoutDashboard  />} >Dashboard</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/admin/dashboard/quizzes")} path="/admin/dashboard/quizzes" icon={<Skull /> }>Quizzes</AsideAdminLink>
      <AsideAdminLink active={checkPathname(pathname, "/admin/dashboard/settings")} path="/admin/dashboard/settings" icon={<Settings />} >Configurações</AsideAdminLink>
    </AsideItemCol>  
  );
};

export default GroupAdminLink;