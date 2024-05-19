export const FooterButton = ({ onClick, appendClass, value }) => {
    return (
        <button
            className={`w-[120px] h-[50px] border-none m-[3px] text-white rounded-[5px] ${appendClass}`}
            onClick={onClick}
        >
            {
                value
            }
        </button>
    )
}