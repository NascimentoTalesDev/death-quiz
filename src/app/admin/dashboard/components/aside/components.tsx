import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react"

type AsideAdminGenericProps =  {
    children:  React.ReactNode;
    className?: string;
    id?: string;
}

type AsideAdminLinkProps =  {
    children:  React.ReactNode;
    id?: string;
    className?: string;
    icon?: ReactNode;
    path: string;
    active?: boolean;
}

export function AsideAdminComponent ({ children, id, className }: AsideAdminGenericProps ) {
    return(
        <aside id={id} className={cn("w-full md:w-[280px]  p-3 md:p-5  md:h-full  text-white", className)}>{children}</aside>
    )
}

export function AsideAdminContainer ({ children, id, className }: AsideAdminGenericProps ) {
    return(
        <div id={id} className={cn("flex flex-col h-full", className)}>{children}</div>
    )
}

export function AsideAdminItem ({ children, id, className }: AsideAdminGenericProps ) {
    return(
        <div id={id} className={cn("", className)}>{children}</div>
    )
}

export function AsideItemBetween ({ children, id, className }: AsideAdminGenericProps ) {
    return(
        <div id={id} className={cn("flex justify-between", className)}>{children}</div>
    )
}

export function AsideItemCol ({ children, id, className }: AsideAdminGenericProps ) {
    return(
        <ul id={id} className={cn("flex flex-row gap-2 md:gap-0  md:flex-col ", className)}>{children}</ul>
    )
}

export function AsideAdminLink ({ children, id, className,icon, path, active }: AsideAdminLinkProps ) {
    return(
        <li className="">
            <Link href={path} id={id} className={cn(`flex justify-start items-start gap-2 p-3 rounded-lg text-my_text   ${active ? "bg-primary text-white" : "hover:bg-gray-100" }`, className)}>
                <span className={` ${active ? "text-white": "text-primary"}`}>{icon}</span>
                {children}
            </Link> 
        </li>
    )
}