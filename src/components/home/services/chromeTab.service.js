
export class ChromeTabService {

    openTabs(urls = []) {
        urls.forEach(url => {
            chrome.tabs.create({
                url,
                active: false
            })
        });
    }

    getTabsUrls() {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({}, (tabs) => {
                
                const urls = tabs.map(tab => ({
                    title: tab.title,
                    url: tab.url,
                    id: tab.id
                }))

                resolve(urls);
            });
        })
    }
}
