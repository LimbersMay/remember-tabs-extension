interface FooterButtonProps {
    onClick: () => void;
    appendClass: string;
    value: string;
}

export const FooterButton = ({ onClick, appendClass, value }: FooterButtonProps) => {
    return (
        <button
            className={`text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] cursor-pointer ${appendClass}`}
            onClick={onClick}>
            {value}
        </button>
    )
}