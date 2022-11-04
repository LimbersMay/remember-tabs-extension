import { useContext } from "react";
import * as S from "../styled-components";
import { TabContext } from "./context/TabContext";
import { TabItemButton } from "./TabItemButton";


export const TabItemButtons = ({ tab }) => {

    const { handleSetTabs } = useContext(TabContext);

    return (
        <S.TabItemButtons>
            
            <S.TabItemButton
                background={'#00695C'}
                hover={'#005a4f'}

                onClick={ () => handleSetTabs(tab.id) }
            >
                Go
            </S.TabItemButton>

            <S.TabItemButton
                background={'#C62828'}
                hover={'#b71c1c'}

                onClick={ () => handleSetTabs(tab.id) }
            >
                Delete
            </S.TabItemButton>

        </S.TabItemButtons>
    )
}

