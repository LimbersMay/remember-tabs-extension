import { Route, Routes } from "react-router-dom";
import {SimpleHomeRouter} from "../simpleHome/routes/SimpleHomeRouter";
import {HomeRouter} from "../home/routes/HomeRouter";
import {OptionsRouter} from "../options/routes/OptionsRouter.jsx";
import {useCheckUser} from "../hooks/useCheckUser";
import {MainLayout, SimpleMainLayout} from "../layouts";
import {GenericLayout} from "../layouts/GenericLayout.tsx";

export const AppRouter = () => {

    const {checking: status, layout} = useCheckUser();

    const simpleRoutes = (
        <Route element={<SimpleMainLayout/>}>
            <Route path="/*" element={<SimpleHomeRouter/>}/>
            <Route path="/options/*" element={<OptionsRouter/>}/>
        </Route>
    )

    const extendedRoutes = (
        <Route element={<GenericLayout/>}>
            <Route path="/*" element={<HomeRouter/>}/>
            <Route path="/options/*" element={<OptionsRouter/>}/>
        </Route>
    )

    if (status === "checking") {
        return null;
    }

    if (!layout) {
        return null;
    }

    return (
        <>
            <Routes>
                {
                    layout === "EXTENDED" ? extendedRoutes : simpleRoutes
                }
            </Routes>
        </>
    )
}
