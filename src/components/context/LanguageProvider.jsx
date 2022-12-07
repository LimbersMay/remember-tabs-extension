import {LanguageContext} from "./LanguageContext";
import {useContext} from "react";
import {PreferencesContext} from "./PreferencesContext.jsx";

const dictionaries = {
    'ES-MX': {
        openButtonCard: 'Abrir',
        openButton: 'Abrir',
        deleteButton: "Borrar",
        saveButton: "Guardar",
        optionsButton: "Opciones",
        placeholderSelectLanguage: "Seleccionar idioma",
        placeholderSelectLayout: "Seleccionar diseño",
        cancelButton: "Cancelar",
        selectLanguage: [
            {
                value: "Español",
                key: "ES-MX"
            },
            {
                value: "Inglés",
                key: "EN-US"
            }
        ],
        selectLayout: [
            {
                value: "Extendido",
                key: "EXTENDED"
            },
            {
                value: "Simple",
                key: "SIMPLE"
            }
        ],
        simplesaveButton: "Guardar Tabs",
        simpleOpenButton: "Reabrir Tabs",
        simpleDeleteButton: "Borrar Tabs"
    },
    'EN-US': {
        openButtonCard: 'Open',
        openButton: 'Reopen',
        deleteButton: "Delete",
        saveButton: "Save",
        optionsButton: "Options",
        placeholderSelectLanguage: "Select language",
        placeholderSelectLayout: "Select layout",
        cancelButton: "Cancel",
        selectLanguage: [
            {
                value: "Spanish",
                key: "ES-MX"
            },
            {
                value: "English",
                key: "EN-US"
            }
        ],
        selectLayout: [
            {
                value: "Extended",
                key: "EXTENDED"
            },
            {
                value: "Simple",
                key: "SIMPLE"
            }
        ],
        simplesaveButton: "Save current Tabs",
        simpleOpenButton: "Reopen Tabs",
        simpleDeleteButton: "Delete Tabs"
    }
}

export const LanguageProvider = ({ children }) => {

    const { language } = useContext(PreferencesContext);
    const getUSerDictionary = () => {
        return dictionaries[language] ?? dictionaries['EN-US'];
    }

    return (
        <LanguageContext.Provider value={
            {
                getUSerDictionary
            }
        }>
            {children}
        </LanguageContext.Provider>
    )
}
