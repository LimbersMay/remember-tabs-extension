import { useContext } from 'react';
import * as S from '../styled-components';
import { TabContext } from './context/TabContext';
import { useNavigate } from 'react-router-dom';
import {LanguageContext} from "../../context/LanguageContext.jsx";

export const MainButtons = () => {

    const { handleSetTabs, handleOpenTabs, handleDeleteTabs } = useContext(TabContext);

    const { getUSerDictionary } = useContext(LanguageContext);
    const { saveButton, openButton, deleteButton, optionsButton } = getUSerDictionary();

    const history = useNavigate();

    return (
        <S.MainButtons>
            <S.MainButton 
                background={'#2E7D32'}
                hoverColor={'#2a692d'}
                onClick={ handleSetTabs }
            >
                { saveButton }
            </S.MainButton>

            <S.MainButton 
                background={'#00695C'}
                hoverColor={'#005a4f'}
                onClick={ handleOpenTabs }
                >
                { openButton }
            </S.MainButton>

            <S.MainButton 
                background={'#C62828'}
                hoverColor={'#b71c1c'}
                onClick={ handleDeleteTabs }
                >
                { deleteButton }
            </S.MainButton>

            <S.MainButton
                background={'#455A64'}
                hoverColor={'#37474F'}
                onClick={ () => {    history('/options-extended');} }
            >
                { optionsButton }
            </S.MainButton>
        </S.MainButtons>
    )
}
