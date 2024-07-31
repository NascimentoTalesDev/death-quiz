import React from "react";
import { HeaderComponent, HeaderContainer, HeaderFlexItem, HeaderItem } from "./components";
import SearchQuiz from "@/components/SearchQuiz";
import { useSession } from "next-auth/react";
import { auth } from "@/app/services/auth";
import { Profile } from "@/components/dashboard/Profile";
import { AuthController } from "@/core/controllers/AuthController";

const Header = async() => {
    const session = await auth()
    const authController = new AuthController();
    const user = await authController.getCurrentUser();

    return (
        <HeaderComponent id="header-component" >
            <HeaderContainer id="header-container">
                <HeaderFlexItem className="items-center gap-3 justify-between">
                    <HeaderItem className="grow">
                        <SearchQuiz />
                    </HeaderItem>
                    <HeaderItem className="w-[250px] hidden md:block">
                        {session && <Profile user={session.user} />}
                        {user && <Profile user={user} />}
                    </HeaderItem>
                </HeaderFlexItem>
            </HeaderContainer>
        </HeaderComponent>
    );
}

export default Header;