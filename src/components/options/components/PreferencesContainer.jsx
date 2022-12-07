
import * as S from '../styled-components';
import { Select } from "./Select.jsx";
import {useContext} from "react";
import {PreferencesContext} from "../../context/PreferencesContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

export const PreferencesContainer = () => {

    const { language, layout } = useContext( PreferencesContext );
    const { getDictionaryByLanguage } = useContext( LanguageContext );

    const { selectLanguage, selectLayout } = getDictionaryByLanguage(language);

    return (
        <S.PreferencesContainer>
            <Select  options={ selectLanguage } selected={ language }/>
            <Select  options={ selectLayout } selected={ layout } />
        </S.PreferencesContainer>
    )
}
