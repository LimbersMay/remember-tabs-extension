import {
    ChromeLocalStorageService,
    ChromeTabService, MokeLocalStorageService, MokeLocalTabService,
} from "../../../home/services";
import {deleteTabById, deleteTabs, setTabs} from "./tabSlice";
import {AppDispatch, RootState} from "../../store";
import {detectIfRunningInExtension} from "../../../utils/detecIfRunningInExtension.ts";

let localStorageService;
let tabsService;

if (detectIfRunningInExtension()) {
    localStorageService = new ChromeLocalStorageService();
    tabsService = new ChromeTabService();
} else {
    localStorageService = new MokeLocalStorageService();
    tabsService = new MokeLocalTabService();
}

export const startLoadingTabs = () => {
    return async(dispatch: AppDispatch) => {
        const tabs = await localStorageService.getTabsUrls();
        dispatch(setTabs(tabs));
    }
}

export const startSaveTabs = () => {
    return async(dispatch: AppDispatch) => {

        // async code here
        const tabs = await tabsService.getTabsUrls();
        await localStorageService.setTabs(tabs);

        // sync code here
        dispatch(setTabs(tabs));
    }
}

export const startDeleteTabs = () => {
    return async(dispatch: AppDispatch) => {
        await localStorageService.setTabs([]);

        dispatch(deleteTabs());
    }
}

export const startDeleteTab = (tabId: number) => {
    return async(dispatch: AppDispatch) => {
        // async code here
        await localStorageService.deleteItemById(tabId);

        // sync code here
        dispatch(deleteTabById(tabId));
    }
}

export const startOpenTabs = () => {
    return async(_dispatch: AppDispatch, getState: () => RootState) => {
        const tabsUrls = getState().tabs.tabs.map(tab => tab.url);
        const currentOpenTabs = await tabsService.getTabsUrls();
        const currentUrlTabs = currentOpenTabs.map(tab => tab.url);

        const tabsToOpen = tabsUrls.filter(url => !currentUrlTabs.includes(url));
        await tabsService.openTabs(tabsToOpen);
    }
}

export const startOpenTab = (tabId: number) => {
    return async(_dispatch: AppDispatch, getState: () => RootState) => {
        const tab = getState().tabs.tabs.filter(tab => tab.id === tabId)[0];
        tabsService.openTabs([tab.url]);
    }
}
