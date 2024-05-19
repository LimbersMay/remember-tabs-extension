import {Navigate, Route, Routes} from "react-router-dom";
import {OptionsApp} from "../OptionsApp";

export const OptionsRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<OptionsApp />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}