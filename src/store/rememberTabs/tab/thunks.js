import {ChromeLocalStorageService, ChromeTabService} from "../../../home/services/index.js";
import {deleteTabById, deleteTabs, setTabs} from "./tabSlice.js";

const localStorageService = new ChromeLocalStorageService();
const tabsService = new ChromeTabService();

export const startLoadingTabs = () => {
    return async(dispatch) => {
        const tabs = await localStorageService.getTabsUrls();
        dispatch(setTabs(tabs));
    }
}

export const startSaveTabs = () => {
    return async(dispatch) => {

        // async code here
        const tabs = await tabsService.getTabsUrls();
        await localStorageService.setTabs(tabs);

        // sync code here
        dispatch(setTabs(tabs));
    }
}

export const startDeleteTabs = () => {
    return async(dispatch) => {
        await localStorageService.setTabs([]);

        dispatch(deleteTabs());
    }
}

export const startDeleteTab = (tabId) => {
    return async(dispatch) => {
        // async code here
        await localStorageService.deleteItemById(tabId);

        // sync code here
        dispatch(deleteTabById(tabId));
    }
}

export const startOpenTabs = () => {
    return async(dispatch, getState) => {
        const tabsUrls = getState().tabs.tabs.map(tab => tab.url);
        const currentOpenTabs = await tabsService.getTabsUrls();
        const currentUrlTabs = currentOpenTabs.map(tab => tab.url);

        const tabsToOpen = tabsUrls.filter(url => !currentUrlTabs.includes(url));
        await tabsService.openTabs(tabsToOpen);
    }
}

export const startOpenTab = (tabId) => {
    return async(dispatch, getState) => {
        const tab = getState().tabs.tabs.find(tab => tab.id === tabId);
        await tabsService.openTabs([tab.url]);
    }
}
