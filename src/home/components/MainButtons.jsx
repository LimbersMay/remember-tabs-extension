import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {LanguageContext} from "../../context";
import {useDispatch} from "react-redux";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs";

export const MainButtons = () => {

    const dispatch = useDispatch();

    const { userDictionary } = useContext(LanguageContext);
    const { saveButton, openButton, deleteButton, optionsButton } = userDictionary;

    const history = useNavigate();

    const handleSaveTabs = () => {
        dispatch(startSaveTabs());
    }

    const handleDeleteAllTabs = () => {
        dispatch(startDeleteTabs());
    }

    const handleOpenAllTabs = () => {
        dispatch(startOpenTabs());
    }

    return (
        <div className="flex justify-around items-center bg-[#E8EAF6] w-full h-[50px]">
            <button className="text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] bg-[#2E7D32] hover:bg-[#2a692d] cursor-pointer" onClick={ handleSaveTabs }>
                { saveButton }
            </button>

            <button
                className="text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] bg-[#00695C] hover:bg-[#005a4f] cursor-pointer"
                onClick={ handleOpenAllTabs }
            >
                { openButton }
            </button>

            <button
                className="text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] bg-[#C62828] hover:bg-[#b71c1c] cursor-pointer"
                onClick={ handleDeleteAllTabs }
            >
                { deleteButton }
            </button>

            <button
                className="text-white border-none rounded-[5px] font-bold min-w-[70px] max-w-[90px] p-[4px] min-h-[35px] bg-[#455A64] hover:bg-[#37474F] cursor-pointer"
                onClick={ () => {    history('/options');} }
            >
                { optionsButton }
            </button>
        </div>
    )
}
