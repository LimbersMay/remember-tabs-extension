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
        setMessageColor('#1B5E20')
    }

    const handleSetOpenTabsMessage = () => {
        setMessage(simpleReopenTabsMessage);
        setMessageColor('#004D40');
    }

    const handleSetDeleteTabsMessage = () => {
        setMessage(simpleDeleteTabsMessage);
        setMessageColor('#B71C1C');
    }

    return (
        <div className="flex mt-[10px] flex-col items-center">
            <ActionButton
                appendClass="bg-[#2E7D32] hover:bg-[#2a692d]"
                onClick={() => {handleSaveTabs(); handleSetSuccessMessage()}}
                value={simplesaveButton}
            />

            <ActionButton
                appendClass="bg-[#00695C] hover:bg-[#005a4f]"
                onClick={() => {handleOpenTabs(); handleSetOpenTabsMessage()}}
                value={simpleOpenButton}
            />

            <ActionButton
                appendClass="bg-[#C62828] hover:bg-[#B71C1C]"
                onClick={() => {handleDeleteTabs(); handleSetDeleteTabsMessage()}}
                value={simpleDeleteButton}
            />

            <ActionButton
                appendClass="bg-[#455A64] hover:bg-[#37474F]"
                onClick={ () => { history('/options');} }
                value={optionsButton}
            />

            <div className="font-bold text-center" style={{color: messageColor}}>
                <p>
                    {message}
                </p>
            </div>

        </div>
    )
}
