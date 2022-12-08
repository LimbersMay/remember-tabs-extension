import { useEffect, useState } from "react";

import { StorageController } from '../controllers/storage.controller';
import { TabController } from "../controllers/tab.controller";
import {
    ChromeLocalStorageService,
    ChromeTabService,
    MokeLocalStorageService,
    MokeLocalTabService
} from "../services";

const storageAccess = new StorageController(new ChromeLocalStorageService());
const tabAccess = new TabController(new ChromeTabService());

export const useTab = () => {

    const [tabsState, setTabsState] = useState([]);

    useEffect(() => {
        storageAccess.getTabsUrls().then( urls => {
            setTabsState(urls);
        });
    }, []);

    useEffect(() => {
        storageAccess.setTabs(tabsState);
    }, [tabsState]);

    const handleSetTabs = async () => {
        const currentUserTabs = await tabAccess.getTabsUrls();
        setTabsState(currentUserTabs);
    }

    const handleOpenTabs = async () => {
        const tabsUrls = tabsState.map(tab => tab.url);
        const currentOpenTabs = await tabAccess.getTabsUrls();
        const currentUrlTabs = currentOpenTabs.map(tab => tab.url);

        const tabsToOpen = tabsUrls.filter(url => !currentUrlTabs.includes(url));
        tabAccess.openTabs(tabsToOpen);
    }

    const handleDeleteTabs = () => {
        setTabsState([]);
    }

    const handleDeleteTab = (id) => {
        const newState = [...tabsState].filter(tab => tab.id !== id);
        setTabsState(newState);
    }

    const handleOpenTab = (id) => {
        const tabToOpen = tabsState
            .filter(tab => tab.id === id)
            .map(tab => tab.url);

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
