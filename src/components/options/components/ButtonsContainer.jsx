
import * as S from '../styled-components';
import { useNavigate } from 'react-router-dom';

export const ButtonsContainer = () => {

    const history = useNavigate();

    return (
        <S.ButtonsContainer>
            <S.Button
                background={'#2E7D32'}
                hover={'#2a692d'}
            >
                Save
            </S.Button>

            <S.Button
                background={'#455A64'}
                hover={'#37474F'}
                onClick={() => history('/')}
            >
                Cancel
            </S.Button>
        </S.ButtonsContainer>
    )
}
