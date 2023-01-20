
import * as S  from '../styled-components/index.js';
import {useContext, useState} from "react";
import {LanguageContext} from "../../context";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs/index.js";

export const ButtonsContainer = () => {

    const dispatch = useDispatch();

    const { userDictionary } = useContext(LanguageContext);
    const {
        simplesaveButton,
        simpleOpenButton,
        simpleDeleteButton,
        optionsButton,
        simpleSucessMessage,
        simpleReopenTabsMessage,
        simpleDeleteTabsMessage
    } = userDictionary;

    const handleSaveTabs = () => {
        dispatch(startSaveTabs());
    }

    const handleOpenTabs = () => {
        dispatch(startOpenTabs());
    }

    const handleDeleteTabs = () => {
        dispatch(startDeleteTabs());
    }

    const history = useNavigate();

    const [ message, setMessage ] = useState(null);
    const [ messageColor, setMessageColor ] = useState('black');

    const handleSetSuccessMessage = () => {
        setMessage(simpleSucessMessage);
        setMessageColor('#1B5E20')
    }

    const handleSetOpenTabsMessage = () => {
        setMessage(simpleReopenTabsMessage);
        setMessageColor('#004D40');
    }

    const handleSetDeleteTabsMessage = () => {
        setMessage(simpleDeleteTabsMessage);
        setMessageColor('#B71C1C');
    }

    return (
        <S.ButtonsContainer>
            <S.Button
                background={ '#2E7D32' }
                hoverColor={'#2a692d'}
                onClick={() => {handleSaveTabs(); handleSetSuccessMessage()}}
            >
                {simplesaveButton}
            </S.Button>

            <S.Button
                background={'#00695C'}
                hoverColor={'#005a4f'}
                onClick={() => {handleOpenTabs(); handleSetOpenTabsMessage()}}
            >
                {simpleOpenButton}
            </S.Button>

            <S.Button
                background={'#C62828'}
                hoverColor={'#b71c1c'}
                onClick={() => {handleDeleteTabs(); handleSetDeleteTabsMessage()}}
            >
                {simpleDeleteButton}
            </S.Button>

            <S.Button
                background={'#455A64'}
                hoverColor={'#37474F'}
                onClick={ () => { history('/options');} }
            >
                {optionsButton}
            </S.Button>

            <S.Message color={messageColor}>
                <p>
                    {message}
                </p>
            </S.Message>

        </S.ButtonsContainer>
    )
}
