import { TabItemButtons } from "./TabItemButtons";
import { TabItemInfo } from "./TabItemInfo";

export const TabItem = ({ tab }) => {

	return (
		<div className="flex items-center justify-between bg-[#d7d9e6] m-[10px] w-[95%] rounded-[5px] min-h-[75px] hover:bg-[#c7c9d6]">
			<TabItemInfo tab={ tab } />
			<TabItemButtons tab={ tab }/>
		</div>
	)
}