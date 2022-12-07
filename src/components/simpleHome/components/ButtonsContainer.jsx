
import * as S  from '../styled-components';
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import {useNavigate} from "react-router-dom";

export const ButtonsContainer = () => {

    const { getUSerDictionary } = useContext(LanguageContext);
    const { simplesaveButton, simpleOpenButton, simpleDeleteButton, optionsButton } = getUSerDictionary();

    const history = useNavigate();

    return (
        <S.ButtonsContainer>
            <S.Button
                background={ '#2E7D32' }
                hoverColor={'#2a692d'}
            >
                {simplesaveButton}
            </S.Button>

            <S.Button
                background={'#00695C'}
                hoverColor={'#005a4f'}
            >
                {simpleOpenButton}
            </S.Button>

            <S.Button
                background={'#C62828'}
                hoverColor={'#b71c1c'}
            >
                {simpleDeleteButton}
            </S.Button>

            <S.Button
                background={'#455A64'}
                hoverColor={'#37474F'}
                onClick={ () => { history('/SimpleOptions');} }
            >
                {optionsButton}
            </S.Button>

        </S.ButtonsContainer>
    )
}
