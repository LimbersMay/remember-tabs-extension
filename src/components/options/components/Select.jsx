
import * as S from '../styled-components';
export const Select = ({placeholder}) => {
    return (
        <S.SelectContainer>
            <S.Select>
                <option value="" disabled selected hidden>{placeholder}</option>
            </S.Select>
        </S.SelectContainer>
    )
}
