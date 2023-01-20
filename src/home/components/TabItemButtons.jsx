import { useContext } from "react";
import {useDispatch} from "react-redux";

import * as S from "../styled-components";
import {LanguageContext} from "../../context";
import {startDeleteTab, startOpenTab} from "../../store/rememberTabs";

export const TabItemButtons = ({ tab }) => {

    const dispatch = useDispatch();

    // Obtenemos los textos del idioma del cliente
    const { userDictionary } = useContext(LanguageContext);
    const { openButtonCard, deleteButton } = userDictionary;

    const handleDeleteTab = () => {
        dispatch(startDeleteTab(tab.id));
    }

    const handleOpenTab = () => {
        dispatch(startOpenTab(tab.id));
    }

    return (
        <S.TabItemButtons>
            
            <S.TabItemButton
                background={'#00695C'}
                hover={'#005a4f'}

                onClick={ handleOpenTab }
            >
                { openButtonCard }
            </S.TabItemButton>

            <S.TabItemButton
                background={'#C62828'}
                hover={'#b71c1c'}

                onClick={ handleDeleteTab }
            >
                { deleteButton }
            </S.TabItemButton>

        </S.TabItemButtons>
    )
}

