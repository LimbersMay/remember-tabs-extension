
import { v4 as uuid } from 'uuid';
import * as S from '../styled-components/index.js';

export const Select = ({selected, options, name}) => {

    return (
        <S.SelectContainer>
            <S.Select name={name}>
                {
                    options.map( element => (
                         <option
                             key={uuid()}
                             value={ element.key }
                             selected={selected === element.key}
                         >
                             { element.value }
                         </option>
                    ))
                }
            </S.Select>
        </S.SelectContainer>
    )
}
