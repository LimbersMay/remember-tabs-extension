
import * as S from '../styled-components';
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {PreferencesProvider} from "../../context/PreferencesProvider.jsx";
import {LanguageProvider} from "../../context/LanguageProvider.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import {PreferencesContext} from "../../context/PreferencesContext.jsx";

export const OptionButtons = () => {

    const history = useNavigate();

    const { getUSerDictionary } = useContext(LanguageContext);
    const { saveButton, cancelButton } = getUSerDictionary();

    return (
        <S.ButtonsContainer>
            <S.Button
                background={'#2E7D32'}
                hover={'#2a692d'}
            >
                {saveButton}
            </S.Button>

            <S.Button
                background={'#455A64'}
                hover={'#37474F'}
                onClick={() => history('/')}
            >
                {cancelButton}
            </S.Button>
        </S.ButtonsContainer>
    )
}
