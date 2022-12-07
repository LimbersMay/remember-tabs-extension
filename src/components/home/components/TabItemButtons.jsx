import { useContext } from "react";
import * as S from "../styled-components";
import { TabContext } from "./context/TabContext";
import {LanguageContext} from "../../context/LanguageContext.jsx";

export const TabItemButtons = ({ tab }) => {

    const { handleOpenTab, handleDeleteTab } = useContext(TabContext);

    // Obtenemos los textos del idioma del cliente
    const { getUSerDictionary } = useContext(LanguageContext);
    const { openButtonCard, deleteButton } = getUSerDictionary();

    return (
        <S.TabItemButtons>
            
            <S.TabItemButton
                background={'#00695C'}
                hover={'#005a4f'}

                onClick={ () => handleOpenTab(tab.id) }
            >
                { openButtonCard }
            </S.TabItemButton>

            <S.TabItemButton
                background={'#C62828'}
                hover={'#b71c1c'}

                onClick={ () => handleDeleteTab(tab.id) }
            >
                { deleteButton }
            </S.TabItemButton>

        </S.TabItemButtons>
    )
}

