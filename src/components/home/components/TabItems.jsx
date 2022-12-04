import * as S from "../styled-components";
import { TabItem } from "./TabItem";

import { useContext } from "react";
import { TabContext } from "./context/TabContext";
import { TransitionGroup } from "react-transition-group";
import { TransitionItem } from "./TransitionItem";

export const TabItems = () => {

    const { tabsState } = useContext(TabContext);

    return (

        <TransitionGroup component={S.TabItems}>
            {
                tabsState.map(tab => (
                    <TransitionItem key={tab.id}>
                        <TabItem tab={tab} />
                    </TransitionItem>
                ))
            }
        </TransitionGroup >
    )
}
