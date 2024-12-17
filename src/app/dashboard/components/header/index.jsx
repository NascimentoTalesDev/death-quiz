import React from "react";
import { HeaderComponent, HeaderContainer, HeaderFlexItem, HeaderItem } from "./components";
import SearchQuiz from "@/components/SearchQuiz";
import { Profile } from "@/components/dashboard/Profile";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SearchParamsProps } from '@/interfaces/searchparams'
import { Search } from "@/components/Search";

const Header = async ({ searchParams }) => {
    const query = searchParams?.query ?? ""    
    const user = await useCurrentUser()

    return (
        <HeaderComponent id="header-component" >
            <HeaderContainer id="header-container">
                <HeaderFlexItem className="items-center gap-3 justify-between">
                    <HeaderItem className="grow">
                        <Search />
                        {/* <SearchQuiz /> */}
                    </HeaderItem>
                    <HeaderItem className="w-[250px] hidden md:block">
                        <Profile user={user} />
                    </HeaderItem>
                </HeaderFlexItem>
            </HeaderContainer>
        </HeaderComponent>
    );
}

export default Header;