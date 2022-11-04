import * as S from "../styled-components"
import { TabItemButtons } from "./TabItemButtons"
import { TabItemInfo } from "./TabItemInfo"

export const TabItem = ({ tab }) => {

	return (
		<S.TabItem>
			<TabItemInfo tab={ tab } />
			<TabItemButtons tab={ tab }/>
		</S.TabItem>
	)
}
