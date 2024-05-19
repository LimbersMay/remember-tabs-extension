import { Route, Routes } from "react-router-dom";
import {SimpleHomeRouter} from "../simpleHome/routes/SimpleHomeRouter";
import {HomeRouter} from "../home/routes/HomeRouter";
import {OptionsRouter} from "../options/routes/OptionsRouter";
import {useCheckUser} from "../hooks/useCheckUser";
import {MainLayout, SimpleMainLayout} from "../layouts";

export const AppRouter = () => {

    const {checking: status, layout, theme} = useCheckUser();

    const simpleRoutes = (
        <Route element={<SimpleMainLayout children={null}/>}>
            <Route path="/*" element={<SimpleHomeRouter/>}/>
            <Route path="/options/*" element={<OptionsRouter/>}/>
        </Route>
    )

    const extendedRoutes = (
        <Route element={<MainLayout children={null}/>}>
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

    if (!theme) {
        return null;
    }

    document.getElementById('root')!.className = theme;

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
