import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {LanguageContext} from "../../context";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs";
import {useAppDispatch} from "../../store/hooks";
import {FooterButton} from "./FooterButton";

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
        <div className="flex justify-around items-center bg-mainButtonsContainer w-full h-[50px]">
            <FooterButton
                appendClass="bg-btnSave hover:bg-btnSaveHover"
                onClick={ handleSaveTabs }
                value={ saveButton }
            />

            <FooterButton
                appendClass="bg-btnOpen hover:bg-btnOpenHover"
                onClick={ handleOpenAllTabs }
                value={ openButton }
            />

            <FooterButton
                appendClass="bg-btnDelete hover:bg-btnDeleteHover"
                onClick={ handleDeleteAllTabs }
                value={ deleteButton }
            />

            <FooterButton
                appendClass="bg-btnOptions hover:bg-btnOptionsHover"
                onClick={ () => {    history('/options');} }
                value={ optionsButton }
            />
        </div>
    )
}
