import * as S from '../styled-components';

export const TabItemButton = ({ text, styles }) => {
    return (
        <S.TabItemButton 
            background={ styles.background } 
            hover={ styles.hover }
        >
            { text }
        </S.TabItemButton>
    )
}
