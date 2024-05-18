import {Tab} from "../../interfaces/Tab.ts";

export const TabItemInfo = ({ tab }: { tab: Tab }) => {
    return (
        <div className="flex flex-col pl-2 w-[200px] h-[57px]">
            <h4 className="m-0 overflow-hidden truncate text-ellipsis whitespace-nowrap font-bold text-[17px] min-h-[23px]">
                {tab.title}
            </h4>

            <small className="overflow-hidden truncate text-ellipsis whitespace-nowrap italic text-[11px] min-h-[15px] max-h-[30px] text-wrap">
                {tab.url}
            </small>
        </div>
    );
};
