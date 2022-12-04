
import * as S from '../styled-components';
import { Select } from "./Select.jsx";

export const OptionsContainer = () => {

    return (
        <S.OptionsContainer>
            <Select placeholder={"Select language"} />
            <Select placeholder={"Select the layout"} />
        </S.OptionsContainer>
    )
}
