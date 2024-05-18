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

    getItemBy(query: string): Promise<string> {

        return new Promise(( resolve, reject ) => {
            chrome.storage.sync.get([query], function( result ) {

                if ( !result[query]) {
                    return reject("No item found");
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

    async setUserLanguage(language: string) {
        await chrome.storage.sync.set({"language": language});
    }

    getUserLayout() {
        return this.getItemBy("layout");
    }

    async setUserLayout(layout: string) {
        await chrome.storage.sync.set({"layout": layout});
    }
}
