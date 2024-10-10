import React from "react";
import { AsideAdminComponent, AsideAdminContainer, AsideAdminItem, AsideItemBetween } from "./components";
import GroupAdminLink from "./group-admin-link";
import { LogOutButton } from "@/components/auth/LogOutButton";
import Logo from "@/components/LogoDashboard";
import { ThemeToggle } from "@/components/ThemeToggle";

const AsideAdmin = () => {
    return (
        <AsideAdminComponent id="aside-component">
            <AsideAdminContainer id="aside-container">
                
                <AsideAdminItem id="aside-logo-container" className="text-primary w-fit mb-8 cursor-pointer">
                    <Logo />
                </AsideAdminItem>

                <AsideAdminItem id="menu" className="h-full">
                    <AsideItemBetween className="flex-col h-full">
                        <AsideAdminItem id="menu-container" className="no-scroll overflow-x-auto md:overflow-x-hidden">
                            <GroupAdminLink id="menu-links" />
                        </AsideAdminItem>
                        
                        <AsideAdminItem id="logout-container" className="mb-5 hidden md:block">
                            <ThemeToggle />
                            <LogOutButton />
                        </AsideAdminItem>
                    </AsideItemBetween>
                </AsideAdminItem>

            </AsideAdminContainer>
        </AsideAdminComponent>
    );
}

export default AsideAdmin;