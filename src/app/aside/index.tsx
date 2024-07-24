import React from "react";
import { AsideAdminComponent, AsideAdminContainer, AsideAdminItem, AsideItemBetween } from "./components";
import GroupAdminLink from "./group-admin-link";
import { Skull } from "lucide-react";
import Link from "next/link";
import { Logout } from "@/components/Logout";

const AsideAdmin = () => {
    return (
        <AsideAdminComponent id="aside-component">
            <AsideAdminContainer id="aside-container">
                
                <AsideAdminItem id="aside-logo-container" className="text-primary w-fit py-3 mb-10 cursor-pointer">
                    <Link id="aside-logo" className="flex items-center font-bold text-2xl gap-2" href={"/"}><Skull width={35} height={35} /> <span>Death Quiz</span></Link>
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