import {MemoryRouter, Route, Routes} from 'react-router-dom';

import {OptionsApp} from "./components/options/OptionsApp";
import {HomeApp} from './components/home/HomeApp';
import {SimpleHomeApp} from "./components/simpleHome/SimpleHomeApp";

import {LanguageProvider} from "./components/context/LanguageProvider";
import {PreferencesProvider} from "./components/context/PreferencesProvider";
import {TabProvider} from './components/home/components/context/TabProvider';

import {MainLayout} from './layouts/MainLayout';
import {SimpleMainLayout} from "./layouts/SimpleMainLayout.style.jsx";

import {ConditionalRoute} from "./components/ConditionalRoute";


export const App = () => {

    return (
        <MemoryRouter >
            <TabProvider>
                <PreferencesProvider>
                    <LanguageProvider>

                        <Routes>
                            <Route element={<MainLayout/>}>
                                <Route path='/' element={<ConditionalRoute />}/>
                                <Route path='/home-extended' element={<HomeApp />} />
                                <Route path='/options-extended' element={<OptionsApp/>}/>
                            </Route>

                            <Route element={<SimpleMainLayout/>}>
                                <Route path='/simple-home' element={<SimpleHomeApp/>}/>
                                <Route path='/simple-options' element={<OptionsApp/>}/>
                            </Route>
                        </Routes>

                    </LanguageProvider>
                </PreferencesProvider>
            </TabProvider>
        </MemoryRouter>
    )
}
