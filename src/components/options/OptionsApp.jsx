import {PreferencesContainer} from "./components/PreferencesContainer.jsx";
import {OptionButtons} from "./components/OptionButtons.jsx";
import {useContext} from "react";
import {PreferencesContext} from "../context/PreferencesContext.jsx";
import {useNavigate} from "react-router-dom";

export const OptionsApp = () => {

    const { handleSetLanguage, handleSetLayout, handleResetPreferences } = useContext(PreferencesContext);

    const history = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();

        const language = event.target[0].value;
        const layout = event.target[1].value;

        handleSetLanguage(language);
        handleSetLayout(layout);

        if (layout === 'EXTENDED') history('/home-extended');
        if (layout === 'SIMPLE') history('/simple-home');
    }

    const onReset = (event) => {
        event.preventDefault();
        handleResetPreferences();

        const layout = event.target[1].value;

        if (layout === 'EXTENDED') history('/home-extended');
        if (layout === 'SIMPLE') history('/simple-home');
    }

    return (
        <form
            onSubmit={onSubmit}
            onReset={onReset}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <PreferencesContainer/>
            <OptionButtons/>
        </form>
    )
}
