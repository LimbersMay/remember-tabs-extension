import {Navigate, Route, Routes} from "react-router-dom";
import {SimpleHomeApp} from "../SimpleHomeApp.jsx";

export const SimpleHomeRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<SimpleHomeApp />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}