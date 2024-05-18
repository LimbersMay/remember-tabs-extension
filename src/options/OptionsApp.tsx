import {PreferencesContainer} from "./components/PreferencesContainer";
import {OptionButtons} from "./components/OptionButtons";
import {useNavigate} from "react-router-dom";
import {startSaveLanguage, startSaveLayout} from "../store/rememberTabs";
import {useAppDispatch} from "../store/hooks.ts";

export const OptionsApp = () => {

    const dispatch = useAppDispatch();

    const history = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();

        const formLanguage = event.target[0].value;
        const formLayout = event.target[1].value;

        dispatch(startSaveLanguage(formLanguage));
        dispatch(startSaveLayout(formLayout));

        history("/")
    }

    const onReset = (event) => {
        event.preventDefault();

        history("/")
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
