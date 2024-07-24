import React from "react";
import { AsideAdminComponent, AsideAdminContainer, AsideAdminItem, AsideItemBetween } from "./components";
import GroupAdminLink from "./group-admin-link";
import { Skull } from "lucide-react";
import Link from "next/link";
import { Logout } from "@/components/Logout";
import Logo from "@/components/LogoDashboard";

const AsideAdmin = () => {
    return (
        <AsideAdminComponent id="aside-component">
            <AsideAdminContainer id="aside-container">
                
                <AsideAdminItem id="aside-logo-container" className="text-primary w-fit mb-8 cursor-pointer">
                    <Logo />
                </AsideAdminItem>

                <AsideAdminItem id="menu" className="h-full">
                    <AsideItemBetween className="flex-col h-full">
                        <AsideAdminItem id="menu-container">
                            <GroupAdminLink id="menu-links" />
                        </AsideAdminItem>
                        
                        <AsideAdminItem id="logout-container" className="mb-5">
                            <Logout />
                        </AsideAdminItem>
                    </AsideItemBetween>
                </AsideAdminItem>

            </AsideAdminContainer>
        </AsideAdminComponent>
    );
}

export default AsideAdmin;