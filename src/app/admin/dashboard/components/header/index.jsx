import React from "react";
import { HeaderComponent, HeaderContainer, HeaderFlexItem, HeaderItem } from "./components";
import SearchQuiz from "@/components/SearchQuiz";
import { Profile } from "@/components/dashboard/Profile";
import { useCurrentUser } from "@/hooks/use-current-user";

const Header = async() => {
    const user = await useCurrentUser()

    return (
        <HeaderComponent id="header-component" >
            <HeaderContainer id="header-container">
                <HeaderFlexItem className="items-center gap-3 justify-between">
                    <HeaderItem className="w-[250px] hidden md:block">
                        <Profile user={user} />
                    </HeaderItem>
                </HeaderFlexItem>
            </HeaderContainer>
        </HeaderComponent>
    );
}

export default Header;