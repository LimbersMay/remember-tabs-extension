import * as S from "../styled-components";
import { TabItemButton } from "./TabItemButton";


export const TabItemButtons = () => {
    return (
        <S.TabItemButtons>

            <TabItemButton
                text={'Go'}

                styles={{
                    background: '#00695C',
                    hover: '#005a4f'
                }}
            />

            <TabItemButton
                text={'Delete'}
                
                styles={{
                    background: '#C62828',
                    hover: '#b71c1c'
                }}
            />

        </S.TabItemButtons>
    )
}

