import { useContext } from "react";
import * as S from "../styled-components";
import { TabContext } from "./context/TabContext";

export const TabItemButtons = ({ tab }) => {

    const { handleOpenTab, handleDeleteTab } = useContext(TabContext);

    return (
        <S.TabItemButtons>
            
            <S.TabItemButton
                background={'#00695C'}
                hover={'#005a4f'}

                onClick={ () => handleOpenTab(tab.id) }
            >
                Go
            </S.TabItemButton>

            <S.TabItemButton
                background={'#C62828'}
                hover={'#b71c1c'}

                onClick={ () => handleDeleteTab(tab.id) }
            >
                Delete
            </S.TabItemButton>

        </S.TabItemButtons>
    )
}

