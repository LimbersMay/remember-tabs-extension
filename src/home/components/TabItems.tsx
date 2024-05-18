import { TabItem } from "./TabItem";
import { TransitionGroup } from "react-transition-group";
import { TransitionItem } from "./TransitionItem";
import {useAppSelector} from "../../store/hooks.ts";
import {SelectTabs} from "../../store/rememberTabs";

export const TabItems = () => {

    const { tabs } = useAppSelector(SelectTabs);

    return (
        <div className="w-full gap-5 overflow-y-scroll h-[250px]">
            <TransitionGroup>
                {
                    tabs.map(tab => (
                        <TransitionItem key={tab.id}>
                            <TabItem tab={tab} />
                        </TransitionItem>
                    ))
                }
            </TransitionGroup >
        </div>
)
}
