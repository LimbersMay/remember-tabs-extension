import {LanguageContext} from "./LanguageContext";

const dictionaries = {
    'ES-MX': {
        openButtonCard: 'Abrir',
        openButton: 'Abrir todo',
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
                value: "English",
                key: "EN-US"
            }
        ],
        selectLayout: [
            {
                value: "Extendido",
                key: "EX"
            },
            {
                value: "Simple",
                key: "SIM"
            }
        ]
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
                key: "EX"
            },
            {
                value: "Simple",
                key: "SIM"
            }
        ]
    }
}

export const LanguageProvider = ({ children }) => {

    const getDictionaryByLanguage = (language) => {
        return dictionaries[language] ?? dictionaries['EN-US'];
    }

    return (
        <LanguageContext.Provider value={
            {
                getDictionaryByLanguage
            }
        }>
            {children}
        </LanguageContext.Provider>
    )
}
