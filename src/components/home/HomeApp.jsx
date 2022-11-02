import { MainContainer } from "../../styled-components/MainContainer"
import { ActionButtons } from "./components/ActionButtons"
import { TabItems } from "./components/TabItems"
import { Title } from "./styled-components/Title"
import { TitleContainer } from "./styled-components/TitleContainer"

export const HomeApp = () => {
    return (
        <MainContainer>

            <TitleContainer>
                <Title>
                    RememberTabs
                </Title>
            </TitleContainer>

            <TabItems />

            <ActionButtons />

        </MainContainer>
    )
}
