import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {LanguageContext} from "../../context";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs";
import {FooterButton} from "../../themes/default";
import {useAppDispatch} from "../../store/hooks.js";

export const MainButtons = () => {

    const dispatch = useAppDispatch();

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
            <FooterButton
                appendClass="bg-[#2E7D32] hover:bg-[#2a692d]"
                onClick={ handleSaveTabs }
                value={ saveButton }
            />

            <FooterButton
                appendClass="bg-[#00695C] hover:bg-[#005a4f]"
                onClick={ handleOpenAllTabs }
                value={ openButton }
            />

            <FooterButton
                appendClass="bg-[#C62828] hover:bg-[#b71c1c]"
                onClick={ handleDeleteAllTabs }
                value={ deleteButton }
            />

            <FooterButton
                appendClass="bg-[#455A64] hover:bg-[#37474F]"
                onClick={ () => {    history('/options');} }
                value={ optionsButton }
            />
        </div>
    )
}
