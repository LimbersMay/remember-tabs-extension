
import * as S from '../styled-components';
import { Select } from "./Select.jsx";

export const OptionsContainer = () => {

    return (
        <S.OptionsContainer>
            <Select text={"Language"} placeholder={"Select language"} />
            <Select text={"Layout"} placeholder={"Select language"} />
        </S.OptionsContainer>
    )
}
