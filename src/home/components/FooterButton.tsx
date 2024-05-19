export const FooterButton = ({ onClick, appendClass, value }) => {
    return (
        <button
            className={`text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] cursor-pointer ${appendClass}`}
            onClick={onClick}>
            {value}
        </button>
    )
}