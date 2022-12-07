export class ChromeLocalStorageService {
    
    setTabs( tabs ) {
        chrome.storage.sync.set( {"tabs": JSON.stringify(tabs)} );
    }

    getTabsUrls() {
        return new Promise(( resolve, reject ) => {
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

        return new Promise(( resolve, reject ) => {
            chrome.storage.sync.get([query], function( result ) {

                if ( !result[query]) {
                    return resolve(null);
                }

                resolve(result[query]);
            });
        })
    }
}
