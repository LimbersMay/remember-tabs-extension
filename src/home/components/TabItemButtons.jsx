import { useContext } from "react";
import {useDispatch} from "react-redux";
import {LanguageContext} from "../../context";
import {startDeleteTab, startOpenTab} from "../../store/rememberTabs";

export const TabItemButtons = ({ tab }) => {

    const dispatch = useDispatch();

    // Obtenemos los textos del idioma del cliente
    const { userDictionary } = useContext(LanguageContext);
    const { openButtonCard, deleteButton } = userDictionary;

    const handleDeleteTab = () => {
        dispatch(startDeleteTab(tab.id));
    }

    const handleOpenTab = () => {
        dispatch(startOpenTab(tab.id));
    }

    return (
        <div className="flex flex-col items-center justify-center w-[100px] h-[50px] gap-[5px]">
            
            <button
                className="w-[80%] text-[14px] h-[30px] text-white rounded-[4px] bg-[#00695C] hover:bg-[#005a4f]"
                onClick={ handleOpenTab }
            >
                { openButtonCard }
            </button>

            <button
                className="w-[80%] text-[14px] h-[30px] text-white rounded-[4px] bg-[#C62828] hover:bg-[#b71c1c]"
                onClick={ handleDeleteTab }
            >
                { deleteButton }
            </button>

        </div>
    )
}

