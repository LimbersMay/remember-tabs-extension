import {MemoryRouter} from 'react-router-dom';
import {LanguageProvider} from "./context";
import {AppRouter} from "./routes/AppRouter";

export const App = () => {

    return (
        <MemoryRouter>
            <LanguageProvider>
                <AppRouter/>
            </LanguageProvider>
        </MemoryRouter>
    )
}
