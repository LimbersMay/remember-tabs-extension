import { useEffect, useReducer, useState } from "react";
import { tabReducer } from "../components/tabReducer";

import { StorageController } from '../controllers/storage.controller';
import { MokeLocalStorageService } from "../services";

const storageAccess = new StorageController(new MokeLocalStorageService());

export const useTab = () => {

    const [isLoading, setIsLoading] = useState(true);  
    const [ tabs, dispatch ] = useReducer(tabReducer, []);

    useEffect(() => {

        const fetchTabs = async() => {
            return await storageAccess.getTabsUrls()
        };

        const tabs = fetchTabs();

        dispatch(tabs);
        setIsLoading(false);
    }, [])

    const handleSetTabs = (tabs) => {
        console.log('Se llamó desde: ', tabs);
    }  

    return {
        tabs,
        handleSetTabs,
        isLoading
    };
}
