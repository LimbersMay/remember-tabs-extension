export const TabItemInfo = ({ tab }) => {
    return (
        <div className="flex flex-col w-[200px] h-[57px] pl-2">
            <h4 className="text-[17px] m-0 min-h-[23px] truncate whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                {tab.title}
            </h4>

            <small className="italic text-[11px] min-h-[15px] max-h-[30px] truncate whitespace-nowrap overflow-hidden text-ellipsis text-wrap">
                {tab.url}
            </small>
        </div>
    );
};
