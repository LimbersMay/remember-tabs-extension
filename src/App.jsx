import React from 'react';
import {TabProvider} from './components/home/components/context/TabProvider';
import {HomeApp} from './components/home/HomeApp';
import {MainLayout} from './layouts/MainLayout';

import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {OptionsApp} from "./components/options/OptionsApp";


export const App = () => {

    return (
        <MemoryRouter >
            <TabProvider>
                <MainLayout>

                    <Routes>
                        <Route path='/' element={<HomeApp/>}/>
                        <Route path='/options-extended' element={<OptionsApp/>}/>
                    </Routes>

                </MainLayout>
            </TabProvider>
        </MemoryRouter>
    )
}
