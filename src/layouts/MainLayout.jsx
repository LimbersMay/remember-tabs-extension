
import React from 'react';
import { Header } from '../home/components';
import * as S from '../styled-components/MainLayout.style.jsx';
import {Outlet} from "react-router-dom";

export const MainLayout = ({ children }) => {
    return (
        <S.MainLayout>
            
            <Header />

            {children}

            <Outlet />
        </S.MainLayout>
    )
}
