import {Navigate, Route, Routes} from "react-router-dom";
import {HomeApp} from "../HomeApp.jsx";

export const HomeRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeApp/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}