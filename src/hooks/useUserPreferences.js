import {useEffect, useState} from "react";

export const useUserPreferences = (localStorageService) => {

    const [ language, setLanguage ] = useState('en-US');
    const [ layout, setLayout ] = useState('extended');

    useEffect(() => {
        localStorageService.getItemBy('language').then( language => setLanguage(language));
        localStorageService.getItemBy('layout').then( layout => setLayout(layout));
    }, []);

    useEffect(() => {
        localStorageService.createItem('language', language);
    }, [language]);

    useEffect(() => {
        localStorageService.createItem('layout', layout);
    }, [layout]);

    const handleGetLanguage = () => {
        return localStorageService.getItemBy('language');
    }

    const handleSetLanguage = (language) => {
        setLanguage(language);
    }

    const handleGetLayout = () => {
        return localStorageService.getItemBy('layout');
    }

    const handleSetLayout = (layout) => {
        setLanguage(layout);
    }

    return {
        language,
        layout,
        handleGetLanguage,
        handleSetLanguage,
        handleGetLayout,
        handleSetLayout
    }
}
