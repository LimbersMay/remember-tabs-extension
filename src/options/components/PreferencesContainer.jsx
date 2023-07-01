
import * as S from '../styled-components';
import { Select } from "./Select";
import {useContext} from "react";
import { LanguageContext } from "../../context";
import {useSelector} from "react-redux";

export const PreferencesContainer = () => {

    const { language, layout } = useSelector(state => state.preferences);

    const { userDictionary } = useContext(LanguageContext);
    const {languageOptions, layoutOptions} = userDictionary;

    return (
        <S.PreferencesContainer>
            <Select
                options={ languageOptions }
                selected={ language }
                name={ "language" }
            />
            <Select
                options={ layoutOptions }
                selected={ layout }
                name={ "layout" }
            />
        </S.PreferencesContainer>
    )
}
