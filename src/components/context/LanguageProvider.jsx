import {LanguageContext} from "./LanguageContext";

const spanishDictionary = {
    openButtonCard: 'Abrir',
    openButton: 'Abrir todo',
    deleteButton: "Borrar",
    saveButton: "Guardar",
    optionsButton: "Opciones",
    placeholderSelectLanguage: "Seleccionar idioma",
    placeholderSelectLayout: "Seleccionar diseño",
    cancelButton: "Cancelar",
    selectLanguage: {
        spanish: "Español",
        english: "Inglés"
    }
}

const englishDictionary = {
    openButtonCard: 'Open',
    openButton: 'Reopen',
    deleteButton: "Delete",
    saveButton: "Save",
    optionsButton: "Options",
    placeholderSelectLanguage: "Select language",
    placeholderSelectLayout: "Select layout",
    cancelButton: "Cancel",
    selectLanguage: {
        spanish: "Spanish",
        english: "English"
    }
}
export const LanguageProvider = ({ children }) => {

    const getSpanishDictionary = () => {
        return spanishDictionary;
    }

    const getEnglishDictionary = () => {
        return englishDictionary;
    }

    return (
        <LanguageContext.Provider value={
            {
                getSpanishDictionary,
                getEnglishDictionary
            }
        }>
            {children}
        </LanguageContext.Provider>
    )
}
