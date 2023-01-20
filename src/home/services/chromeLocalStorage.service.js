export class ChromeLocalStorageService {
    
    setTabs( tabs ) {
        return new Promise(( resolve, reject ) => {
            try {
                chrome.storage.sync.set({"tabs": JSON.stringify(tabs)}, function() {});
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    getTabsUrls() {
        return new Promise(( resolve ) => {
            chrome.storage.sync.get(["tabs"], function( result ) {

                if ( !result.tabs ) {
                    return resolve([]);
                }

                resolve(JSON.parse(result.tabs));
            });
        });
    }

    createItem(itemName, value) {

        const query = {};
        query[itemName] = value;

        chrome.storage.sync.set(query);
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

    deleteItemById(tabId) {
        this.getTabsUrls().then( tabs => {
            const newTabs = tabs.filter(tab => tab.id !== tabId);
            this.setTabs(newTabs);
        });
    }
}
