import * as S from '../styled-components/index.js';
import {useContext} from "react";
import {LanguageContext} from "../../context";

export const OptionButtons = () => {

    const { userDictionary } = useContext(LanguageContext);
    const { saveButton, cancelButton } = userDictionary;

    return (
        <S.ButtonsContainer>
            <S.Button
                background={'#2E7D32'}
                hover={'#2a692d'}
                type={"submit"}
            >
                {saveButton}
            </S.Button>

            <S.Button
                background={'#455A64'}
                hover={'#37474F'}
                type={"reset"}
            >
                {cancelButton}
            </S.Button>
        </S.ButtonsContainer>
    )
}
