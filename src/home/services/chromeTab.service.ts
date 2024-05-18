import {Tab} from "../../interfaces/Tab.ts";

export class ChromeTabService {

    openTabs(urls: string[] = []) {
        urls.forEach(async (url) => {
            await chrome.tabs.create({
                url,
                active: false
            })
        });
    }

    getTabsUrls(): Promise<Tab[]> {
        return new Promise((resolve) => {
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
