import {MemoryRouter, Route, Routes} from 'react-router-dom';

import {OptionsApp} from "./options/OptionsApp";
import {HomeApp} from './home/HomeApp';
import {SimpleHomeApp} from "./simpleHome/SimpleHomeApp";

import {LanguageProvider, PreferencesProvider} from "./context";

import {MainLayout} from './layouts';
import {SimpleMainLayout} from "./layouts";

import {ConditionalRoute} from "./components/ConditionalRoute";
import {TabProvider} from "./home/components/context/TabProvider.jsx";


export const App = () => {

    return (
        <MemoryRouter >
            <TabProvider>
                <PreferencesProvider>
                    <LanguageProvider>

                        <Routes>
                            <Route element={<MainLayout/>}>
                                <Route path='/home-extended' element={<HomeApp />} />
                                <Route path='/options-extended' element={<OptionsApp/>}/>
                            </Route>

                            <Route path='/' element={<ConditionalRoute />}/>

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
