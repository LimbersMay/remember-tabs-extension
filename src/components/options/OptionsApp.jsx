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

        const formLanguage = event.target[0].value;
        const formLayout = event.target[1].value;

        handleSetLanguage(formLanguage);
        handleSetLayout(formLayout);

        if (formLayout === 'EXTENDED') history('/home-extended');
        if (formLayout === 'SIMPLE') history('/simple-home');
    }

    const onReset = (event) => {
        event.preventDefault();
        handleResetPreferences();

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
