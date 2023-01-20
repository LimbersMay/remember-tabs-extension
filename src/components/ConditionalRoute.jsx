import {useContext, useEffect} from "react";
import {PreferencesContext} from "../context";
import {useNavigate} from "react-router-dom";

export const ConditionalRoute = () => {

    const { handleGetLayout } = useContext(PreferencesContext);
    const history = useNavigate();

    useEffect(() => {
        handleGetLayout().then(layout => {
            if (layout === "EXTENDED") history('/home-extended');
            if (layout === "SIMPLE") history('/simple-home');
        })
    }, []);

    return (
        <>
        </>
    )
}
