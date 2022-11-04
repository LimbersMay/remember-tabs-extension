import { useEffect, useState } from "react";

import { StorageController } from '../controllers/storage.controller';
import { TabController } from "../controllers/tab.controller";
import { 
    ChromeTabService,
    ChromeLocalStorageService, 
} from "../services";

const storageAccess = new StorageController(new ChromeLocalStorageService());
const tabAccess = new TabController(new ChromeTabService());

export const useTab = () => {

    const [tabsState, setTabsState] = useState([{}]);

    useEffect(() => {

        storageAccess.getTabsUrls().then( urls => {
            setTabsState(urls);
        });

    }, []);

    const handleSetTabs = async() => {
        const currentUserTabs = await tabAccess.getTabsUrls();
        storageAccess.setTabs(currentUserTabs);

        setTabsState(currentUserTabs);
    }

    const handleOpenTabs = async() => {
        const tabsUrls = tabsState.map(tab => tab.url);
        const currentOpenTabs = await tabAccess.getTabsUrls();
        const currentUrlTabs = currentOpenTabs.map( tab => tab.url );

        const tabsToOpen = tabsUrls.filter( url => !currentUrlTabs.includes(url));
        tabAccess.openTabs(tabsToOpen);
    }

    const handleDeleteTabs = () => {
        storageAccess.setTabs([]);
        setTabsState([]);
    }

    const handleDeleteTab = ( id ) => {
        const newState = tabsState.filter( tab => tab.id !== id);
        storageAccess.setTabs(newState);

        setTabsState(newState);
    }   

    const handleOpenTab = ( id ) => {
        const tabToOpen = tabsState
            .filter( tab => tab.id === id)
            .map( tab => tab.url);

        tabAccess.openTabs(tabToOpen);
    }

    return {
        tabsState,
        handleSetTabs,
        handleOpenTabs,
        handleDeleteTabs,
        handleDeleteTab,
        handleOpenTab
    };
}
