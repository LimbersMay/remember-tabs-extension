
import * as S from '../styled-components';
import { Select } from "./Select.jsx";

export const PreferencesContainer = () => {

    return (
        <S.PreferencesContainer>
            <Select placeholder={"Select language"} />
            <Select placeholder={"Select the layout"} />
        </S.PreferencesContainer>
    )
}
