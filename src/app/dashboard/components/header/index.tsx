import React from "react";
import { HeaderComponent, HeaderContainer, HeaderFlexItem, HeaderItem } from "./components";
import SearchQuiz from "@/components/SearchQuiz";
import { useSession } from "next-auth/react";
import { auth } from "@/app/services/auth";

const Header = async() => {

    const session = await auth()
    console.log(session?.user?.name);

    return (
        <HeaderComponent id="header-component" >
            <HeaderContainer id="header-container">
                <HeaderFlexItem className="items-center gap-3 justify-between">
                    <HeaderItem className="grow">
                        <SearchQuiz />
                    </HeaderItem>
                    <HeaderItem className="w-[200px]">
                        {session?.user?.name}
                    </HeaderItem>
                </HeaderFlexItem>
            </HeaderContainer>
        </HeaderComponent>
    );
}

export default Header;