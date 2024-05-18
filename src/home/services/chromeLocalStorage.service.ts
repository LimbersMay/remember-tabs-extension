import {Tab} from "../../interfaces/Tab.ts";

export class ChromeLocalStorageService {
    
    setTabs( tabs: Tab[] ): Promise<void> {
        return new Promise(( resolve, reject ) => {
            try {
                chrome.storage.sync.set({"tabs": JSON.stringify(tabs)}, function() {});
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    getTabsUrls(): Promise<Tab[]> {
        return new Promise(( resolve ) => {
            chrome.storage.sync.get(["tabs"], function( result ) {

                if ( !result.tabs ) {
                    return resolve([]);
                }

                resolve(JSON.parse(result.tabs));
            });
        });
    }

    async createItem(itemName: string, value: any) {

        const query = {};
        query[itemName] = value;

        await chrome.storage.sync.set(query);
    }

    getItemBy(query) {

        return new Promise(( resolve ) => {
            chrome.storage.sync.get([query], function( result ) {

                if ( !result[query]) {
                    return resolve(null);
                }

                resolve(result[query]);
            });
        })
    }

    deleteItemById(tabId: number) {
        this.getTabsUrls().then( async (tabs) => {
            const newTabs = tabs.filter(tab => tab.id !== tabId);
            await this.setTabs(newTabs);
        });
    }

    getUserLanguage() {
        return this.getItemBy("language");
    }

    setUserLanguage(language) {
        this.createItem("language", language);
    }

    getUserLayout() {
        return this.getItemBy("layout");
    }

    setUserLayout(layout) {
        this.createItem("layout", layout);
    }
}
