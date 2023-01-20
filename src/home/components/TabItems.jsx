import * as S from "../styled-components";
import { TabItem } from "./TabItem";
import { TransitionGroup } from "react-transition-group";
import { TransitionItem } from "./TransitionItem";
import {useSelector} from "react-redux";

export const TabItems = () => {

    const { tabs } = useSelector(state => state.tabs)

    return (

        <TransitionGroup component={S.TabItems}>
            {
                tabs.map(tab => (
                    <TransitionItem key={tab.id}>
                        <TabItem tab={tab} />
                    </TransitionItem>
                ))
            }
        </TransitionGroup >
    )
}
