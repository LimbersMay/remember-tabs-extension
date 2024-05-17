import {useContext, useState} from "react";
import {LanguageContext} from "../../context";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startDeleteTabs, startOpenTabs, startSaveTabs} from "../../store/rememberTabs/index.js";

export const ButtonsContainer = () => {

    const dispatch = useDispatch();

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

    const [ message, setMessage ] = useState(null);
    const [ messageColor, setMessageColor ] = useState('black');

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
            <button
                className="w-[120px] h-[50px] border-none m-[3px] bg-[#2E7D32] text-white rounded-[5px] hover:bg-[#2a692d]"
                onClick={() => {handleSaveTabs(); handleSetSuccessMessage()}}
            >
                {simplesaveButton}
            </button>

            <button
                className="w-[120px] h-[50px] border-none m-[3px] bg-[#00695C] text-white rounded-[5px] hover:bg-[#005a4f]"
                onClick={() => {handleOpenTabs(); handleSetOpenTabsMessage()}}
            >
                {simpleOpenButton}
            </button>

            <button
                className="w-[120px] h-[50px] border-none m-[3px] bg-[#C62828] text-white rounded-[5px] hover:bg-[#B71C1C]"
                onClick={() => {handleDeleteTabs(); handleSetDeleteTabsMessage()}}
            >
                {simpleDeleteButton}
            </button>

            <button
                className="w-[120px] h-[50px] border-none m-[3px] bg-[#455A64] text-white rounded-[5px] hover:bg-[#37474F]"
                onClick={ () => { history('/options');} }
            >
                {optionsButton}
            </button>

            <div className={`font-bold text-center text-[${messageColor}]`}>
                <p>
                    {message}
                </p>
            </div>

        </div>
    )
}
