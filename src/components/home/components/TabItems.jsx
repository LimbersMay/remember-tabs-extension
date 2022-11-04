import * as S from "../styled-components";
import { TabItem } from "./TabItem";

import { v4 } from 'uuid'
import { useContext } from "react";
import { TabContext } from "./context/TabContext";

export const TabItems = () => {

    const { tabs, isLoading } = useContext(TabContext);

    return (
        <S.TabItems>

            {
                isLoading
                    
                &&

                tabs.map( tab => (
                    <TabItem 
                        key={v4()}
                        tab={tab}
                    />
                ))            
            }
            
        </S.TabItems>
    )
}
