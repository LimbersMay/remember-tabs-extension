import { useContext } from 'react';
import * as S from '../styled-components/index';
import { useNavigate } from 'react-router-dom';
import {LanguageContext} from "../../context";
import {useDispatch} from "react-redux";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs";

export const MainButtons = () => {

    const dispatch = useDispatch();

    const { userDictionary } = useContext(LanguageContext);
    const { saveButton, openButton, deleteButton, optionsButton } = userDictionary;

    const history = useNavigate();

    const handleSaveTabs = () => {
        dispatch(startSaveTabs());
    }

    const handleDeleteAllTabs = () => {
        dispatch(startDeleteTabs());
    }

    const handleOpenAllTabs = () => {
        dispatch(startOpenTabs());
    }

    return (
        <S.MainButtons>
            <S.MainButton 
                background={'#2E7D32'}
                hoverColor={'#2a692d'}
                onClick={ handleSaveTabs }
            >
                { saveButton }
            </S.MainButton>

            <S.MainButton 
                background={'#00695C'}
                hoverColor={'#005a4f'}
                onClick={ handleOpenAllTabs }
                >
                { openButton }
            </S.MainButton>

            <S.MainButton 
                background={'#C62828'}
                hoverColor={'#b71c1c'}
                onClick={ handleDeleteAllTabs }
                >
                { deleteButton }
            </S.MainButton>

            <S.MainButton
                background={'#455A64'}
                hoverColor={'#37474F'}
                onClick={ () => {    history('/options');} }
            >
                { optionsButton }
            </S.MainButton>
        </S.MainButtons>
    )
}
