
import React from 'react';
import { Header } from '../components/home/components';
import * as S from '../styled-components/MainLayout.style.jsx';

export const MainLayout = ({ children }) => {
    return (
        <S.MainLayout>
            
            <Header />

            {children}
        </S.MainLayout>
    )
}
