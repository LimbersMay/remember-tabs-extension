import {useEffect, useState} from "react";

export const useUserPreferences = (localStorageService) => {

    const [ language, setLanguage ] = useState('EN-US');
    const [ layout, setLayout ] = useState('EX');

    useEffect(() => {
        localStorageService.getItemBy("language").then( language => {
            if (!language) {
                return;
            }

            setLanguage(language);
        });

        localStorageService.getItemBy("layout").then( layout => {
            if (!layout) {
                return;
            }

            setLayout(layout);
        });

    }, []);

    useEffect(() => {
        localStorageService.createItem('language', language);
    }, [language]);

    useEffect(() => {
        localStorageService.createItem('layout', layout);
    }, [layout]);

    const handleGetLanguage = () => {
        return localStorageService.getItemBy("language");
    }

    const handleSetLanguage = (language) => {
        setLanguage(language);
    }

    const handleGetLayout = () => {
        return localStorageService.getItemBy("layout") ;
    }

    const handleSetLayout = (layout) => {
        setLayout(layout);
    }

    const handleResetPreferences = async() => {
        const userLang = await localStorageService.getItemBy('language');
        const userLayout = await localStorageService.getItemBy('layout');

        setLanguage(userLang);
        setLayout(userLayout);
    }

    return {
        language,
        layout,
        handleGetLanguage,
        handleSetLanguage,
        handleGetLayout,
        handleSetLayout,
        handleResetPreferences
    }
}
