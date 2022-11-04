import { useEffect, useState } from "react";

import { StorageController } from '../controllers/storage.controller';
import { TabController } from "../controllers/tab.controller";
import { 
    ChromeTabService,
    ChromeLocalStorageService, 
    MokeLocalStorageService, 
    MokeLocalTabService 
} from "../services";

const storageAccess = new StorageController(new MokeLocalStorageService());
const tabAccess = new TabController(new MokeLocalTabService());

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

    const handleOpenTabs = () => {
        const tabsUrls = tabsState.map(tab => tab.url);
        tabAccess.openTabs(tabsUrls);
    }

    const handleDeleteTabs = () => {
        storageAccess.setTabs([]);
        setTabsState([]);
    }

    return {
        tabsState,
        handleSetTabs,
        handleOpenTabs,
        handleDeleteTabs
    };
}
