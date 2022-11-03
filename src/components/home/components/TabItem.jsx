import * as S from "../styled-components"
import { TabItemButtons } from "./TabItemButtons"
import { TabItemInfo } from "./TabItemInfo"

export const TabItem = () => {
	return (
		<S.TabItem>
			
			<TabItemInfo />
			<TabItemButtons />

		</S.TabItem>
	)
}
