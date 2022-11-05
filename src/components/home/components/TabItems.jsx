import * as S from "../styled-components";
import { TabItem } from "./TabItem";

import { v4 } from 'uuid'
import { createRef, useContext, useRef } from "react";
import { TabContext } from "./context/TabContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const TabItems = () => {

    const { tabsState } = useContext(TabContext);

    return (

        <TransitionGroup component={S.TabItems} appear={true}>
            {
                tabsState.map((tab, index) => (
                    <CSSTransition
                        key={tab.id}
                        timeout={300}
                        classNames="transition"
                    >

                        <TabItem 
                            key={ v4() }
                            tab={ tab }
                        ></TabItem>

                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    )
}
