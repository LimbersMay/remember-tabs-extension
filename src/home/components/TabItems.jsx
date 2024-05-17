import { TabItem } from "./TabItem";
import { TransitionGroup } from "react-transition-group";
import { TransitionItem } from "./TransitionItem";
import {useSelector} from "react-redux";

export const TabItems = () => {

    const { tabs } = useSelector(state => state.tabs)

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
