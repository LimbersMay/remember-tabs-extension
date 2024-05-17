import { TabItem } from "./TabItem";
import { TransitionGroup } from "react-transition-group";
import { TransitionItem } from "./TransitionItem";
import {useSelector} from "react-redux";

export const TabItems = () => {

    const { tabs } = useSelector(state => state.tabs)

    return (
        <div className="w-full h-[250px] overflow-y-scroll gap-5">
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
