import React from 'react';

import {MemoryRouter, Route, Routes} from 'react-router-dom';

import {OptionsApp} from "./components/options/OptionsApp";
import {HomeApp} from './components/home/HomeApp';

import {PreferencesProvider} from "./components/context/PreferencesProvider";
import {LanguageProvider} from "./components/context/LanguageProvider";
import {TabProvider} from './components/home/components/context/TabProvider';

import {MainLayout} from './layouts/MainLayout';
import {SimpleMainLayout} from "./layouts/SimpleMainLayout.style.jsx";
import {SimpleHomeApp} from "./components/simpleHome/SimpleHomeApp";


export const App = () => {

    return (
        <MemoryRouter >
            <TabProvider>
                <PreferencesProvider>
                    <LanguageProvider>

                            <Routes>
                                <Route element={<MainLayout/>}>
                                    <Route path='/' element={<HomeApp/>}/>
                                    <Route path='/options-extended' element={<OptionsApp/>}/>
                                </Route>

                                <Route element={ <SimpleMainLayout /> }>
                                    <Route path='/SimpleMain' element={<SimpleHomeApp />} />
                                    <Route path='/SimpleOptions' element={<OptionsApp />} />
                                </Route>

                            </Routes>

                    </LanguageProvider>
                </PreferencesProvider>
            </TabProvider>
        </MemoryRouter>
    )
}
