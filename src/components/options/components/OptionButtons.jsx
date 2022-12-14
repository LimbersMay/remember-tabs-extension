import * as S from '../styled-components';
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";

export const OptionButtons = () => {

    const { getUSerDictionary } = useContext(LanguageContext);
    const { saveButton, cancelButton } = getUSerDictionary();

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
