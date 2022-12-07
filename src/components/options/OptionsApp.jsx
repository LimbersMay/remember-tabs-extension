import {PreferencesContainer} from "./components/PreferencesContainer.jsx";
import {OptionButtons} from "./components/OptionButtons.jsx";
import {useContext} from "react";
import {PreferencesContext} from "../context/PreferencesContext.jsx";
import {useNavigate} from "react-router-dom";

export const OptionsApp = () => {

    const { layout, handleSetLanguage, handleSetLayout, handleResetPreferences } = useContext(PreferencesContext);

    const history = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        handleSetLanguage(event.target[0].value);
        handleSetLayout(event.target[1].value);

        if (layout === 'EX') history('/');
        if (layout === 'SIM') history('/SimpleMain')
    }

    const onReset = (event) => {
        event.preventDefault();
        handleResetPreferences();

        if (layout === 'EX') history('/');
        if (layout === 'SIM') history('/SimpleMain')
    }

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <PreferencesContainer/>
            <OptionButtons/>
        </form>
    )
}
