import {useContext} from "react";
import {LanguageContext} from "../../context";

export const OptionButtons = () => {

    const { userDictionary } = useContext(LanguageContext);
    const { saveButton, cancelButton } = userDictionary;

    return (
        <div className="flex gap-[15px] items-center justify-center flex-wrap">
            <button
                className="w-[130px] h-[25px] border-none rounded-[5px] text-white bg-[#2E7D32] hover:bg-[#2a692d] cursor-pointer"
                type={"submit"}
            >
                {saveButton}
            </button>

            <button
                className="w-[130px] h-[25px] border-none rounded-[5px] text-white bg-[#455A64] hover:bg-[#37474F] cursor-pointer"
                type={"reset"}
            >
                {cancelButton}
            </button>
        </div>
    )
}
