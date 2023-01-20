
import * as S from '../styled-components';
import { Select } from "./Select";
import {useContext} from "react";
import { LanguageContext } from "../../context";
import {useSelector} from "react-redux";

export const PreferencesContainer = () => {

    const { language, layout } = useSelector(state => state.preferences);

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
