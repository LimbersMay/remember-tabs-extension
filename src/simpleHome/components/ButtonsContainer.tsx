import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs";
import {useAppDispatch} from "../../store/hooks.ts";
import {ActionButton} from "./ActionButton.tsx";


export const ButtonsContainer = () => {

    const dispatch = useAppDispatch();

    const { userDictionary } = useContext(LanguageContext);
    const {
        simplesaveButton,
        simpleOpenButton,
        simpleDeleteButton,
        optionsButton,
        simpleSucessMessage,
        simpleReopenTabsMessage,
        simpleDeleteTabsMessage
    } = userDictionary;

    const handleSaveTabs = () => {
        dispatch(startSaveTabs());
    }

    const handleOpenTabs = () => {
        dispatch(startOpenTabs());
    }

    const handleDeleteTabs = () => {
        dispatch(startDeleteTabs());
    }

    const history = useNavigate();

    const [ message, setMessage ] = useState('');
    const [ messageColor, setMessageColor ] = useState('');

    const handleSetSuccessMessage = () => {
        setMessage(simpleSucessMessage);
        setMessageColor('text-btnSave')
    }

    const handleSetOpenTabsMessage = () => {
        setMessage(simpleReopenTabsMessage);
        setMessageColor('text-btnOpen');
    }

    const handleSetDeleteTabsMessage = () => {
        setMessage(simpleDeleteTabsMessage);
        setMessageColor('text-btnDelete');
    }

    return (
        <div className="flex mt-[10px] flex-col items-center">
            <ActionButton
                appendClass="bg-btnSave hover:bg-btnSaveHover"
                onClick={() => {handleSaveTabs(); handleSetSuccessMessage()}}
                value={simplesaveButton}
            />

            <ActionButton
                appendClass="bg-btnOpen hover:bg-btnOpenHover"
                onClick={() => {handleOpenTabs(); handleSetOpenTabsMessage()}}
                value={simpleOpenButton}
            />

            <ActionButton
                appendClass="bg-btnDelete hover:bg-btnDeleteHover"
                onClick={() => {handleDeleteTabs(); handleSetDeleteTabsMessage()}}
                value={simpleDeleteButton}
            />

            <ActionButton
                appendClass="bg-btnOptions hover:bg-btnOptionsHover"
                onClick={ () => { history('/options');} }
                value={optionsButton}
            />

            <div className={`font-bold text-center ${messageColor}`}>
                <p>
                    {message}
                </p>
            </div>

        </div>
    )
}
