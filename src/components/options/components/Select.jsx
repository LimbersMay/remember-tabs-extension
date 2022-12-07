
import { v4 as uuid } from 'uuid';
import * as S from '../styled-components';

export const Select = ({selected, options}) => {

    return (
        <S.SelectContainer>
            <S.Select>
                {
                    options.map( element => (
                         <option
                             key={uuid()}
                             value={ element.key }
                             defaultChecked={selected === element.key}
                         >
                             { element.value }
                         </option>
                    ))
                }
            </S.Select>
        </S.SelectContainer>
    )
}
