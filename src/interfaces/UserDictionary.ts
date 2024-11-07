export interface LanguageOptions {
    value: string;
    key: string;
}

interface LayoutOptions {
    value: string;
    key: string;
}

export type Theme = 'LIGHT' | 'DARK';

export interface UserDictionary {
    openButtonCard: string;
    openButton: string;
    deleteButton: string;
    saveButton: string;
    optionsButton: string;
    placeholderSelectLanguage: string;
    placeholderSelectLayout: string;
    cancelButton: string;
    languageOptions: LanguageOptions[];
    layoutOptions: LayoutOptions[];
    themeOptions: LayoutOptions[];
    autoSaveOptions: LayoutOptions[];
    simplesaveButton: string;
    simpleOpenButton: string;
    simpleDeleteButton: string;
    simpleSucessMessage: string;
    simpleReopenTabsMessage: string;
    simpleDeleteTabsMessage: string;
}