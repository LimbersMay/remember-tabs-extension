
import * as S from '../styled-components';
import { Select } from "./Select.jsx";
import {useContext} from "react";
import {PreferencesContext, LanguageContext} from "../../context";

export const PreferencesContainer = () => {

    const { language, layout } = useContext( PreferencesContext );
    const { userDictionary } = useContext(LanguageContext);
    const {selectLanguage, selectLayout} = userDictionary;

    return (
        <S.PreferencesContainer>
            <Select
                options={ selectLanguage }
                selected={ language }
                name={ "language" }
            />
            <Select
                options={ selectLayout }
                selected={ layout }
                name={ "layout" }
            />
        </S.PreferencesContainer>
    )
}
