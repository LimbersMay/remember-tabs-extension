import React from 'react';
import { TabProvider } from './components/home/components/context/TabProvider';
import { HomeApp } from './components/home/HomeApp';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {

    return (
        <TabProvider>
                <MainLayout>
                    <HomeApp/>
                </MainLayout>
        </TabProvider>
    )
}
