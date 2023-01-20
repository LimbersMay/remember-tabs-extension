import * as S from "../styled-components"

export const TabItemInfo = ({ tab }) => {
    return (
        <S.TabItemInfo>

            <S.TabItemTitle>
                { tab.title }
            </S.TabItemTitle>

            <S.TabItemUrl>
                { tab.url }
            </S.TabItemUrl>

        </S.TabItemInfo>
    )
}
