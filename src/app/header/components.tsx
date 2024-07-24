import { cn } from "@/lib/utils";
import React from "react"

type HeaderGenericProps =  {
    children:  React.ReactNode;
    className?: string;
    id?: string;
}

export function HeaderComponent ({ children, id, className }: HeaderGenericProps ) {
    return(
        <header id={id} className={cn("py-8", className)}>{children}</header>
    )
}

export function HeaderContainer ({ children, id, className }: HeaderGenericProps ) {
    return(
        <div id={id} className={cn("", className)}>{children}</div>
    )
}

export function HeaderItem ({ children, id, className }: HeaderGenericProps ) {
    return(
        <div id={id} className={cn("", className)}>{children}</div>
    )
}

export function HeaderFlexItem ({ children, id, className }: HeaderGenericProps ) {
    return(
        <div id={id} className={cn("flex", className)}>{children}</div>
    )
}
