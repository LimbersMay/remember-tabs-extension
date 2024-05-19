import { TabItemButtons } from "./TabItemButtons";
import { TabItemInfo } from "./TabItemInfo";
import {Tab} from "../../interfaces/Tab.ts";

export const TabItem = ({ tab }: { tab: Tab }) => {

	return (
		<div className="flex items-center justify-between bg-tabItem m-[10px] w-[95%] rounded-[5px] min-h-[75px] hover:bg-tabItemHover">
			<TabItemInfo tab={ tab } />
			<TabItemButtons tab={ tab }/>
		</div>
	)
}
