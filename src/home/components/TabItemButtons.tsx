import { useContext } from "react";
import {LanguageContext} from "../../context";
import {startDeleteTab, startOpenTab} from "../../store/rememberTabs";
import {useAppDispatch} from "../../store/hooks.ts";
import {Tab} from "../../interfaces/Tab.ts";

export const TabItemButtons = ({ tab }: { tab: Tab }) => {

    const dispatch = useAppDispatch();

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
                className="w-[80%] text-[14px] h-[30px] rounded-[4px] bg-btnOpen hover:bg-btnOpenHover text-buttonTex"
                onClick={ handleOpenTab }
            >
                { openButtonCard }
            </button>

            <button
                className="w-[80%] text-[14px] h-[30px] rounded-[4px] bg-btnDelete hover:bg-btnDeleteHover text-buttonTex"
                onClick={ handleDeleteTab }
            >
                { deleteButton }
            </button>

        </div>
    )
}

