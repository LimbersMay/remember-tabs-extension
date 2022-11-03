import * as S from '../styled-components';

export const MainButtons = () => {
    return (
        <S.MainButtons>
            <S.MainButton 
                background='#2E7D32'
                hoverColor='#2a692d;'
            >
                Save
            </S.MainButton>

            <S.MainButton 
                background='#00695C'
                hoverColor='#005a4f;'
                >
                Reopen
            </S.MainButton>

            <S.MainButton 
                background='#C62828'
                hoverColor='#b71c1c;'
                >
                Delete
            </S.MainButton>
        </S.MainButtons>
    )
}
