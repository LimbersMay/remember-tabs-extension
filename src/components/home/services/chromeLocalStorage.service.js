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

    createItem(name, value) {
        chrome.storage.sync.set({name: JSON.stringify(value)});
    }

    getItemBy(query) {

        return new Promise(( resolve, reject ) => {
            chrome.storage.sync.get([query], function( result ) {

                if ( typeof result !== 'string') {
                    return resolve(null);
                }

                resolve(JSON.parse(result));
            });
        })
    }
}
