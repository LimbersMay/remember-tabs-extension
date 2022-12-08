
import * as S from '../styled-components/SimpleMainLayout.style.jsx';
import {Outlet} from "react-router-dom";
import {Header} from "../components/simpleHome/components/Header.jsx";

export const SimpleMainLayout = ({ children }) => {
    return (
        <S.SimpleMainLayout>

            <Header />

            {children}

            <Outlet />
        </S.SimpleMainLayout>
    )
}
