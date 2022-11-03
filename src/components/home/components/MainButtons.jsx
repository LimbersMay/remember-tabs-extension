import * as S from '../styled-components';

export const MainButtons = () => {
    return (
        <S.MainButtons>
            <S.Button 
                background='#2E7D32'
                hoverColor='#2a692d;'
            >
                Save
            </S.Button>

            <S.Button 
                background='#00695C'
                hoverColor='#005a4f;'
                >
                Reopen
            </S.Button>

            <S.Button 
                background='#C62828'
                hoverColor='#b71c1c;'
                >
                Delete
            </S.Button>
        </S.MainButtons>
    )
}
