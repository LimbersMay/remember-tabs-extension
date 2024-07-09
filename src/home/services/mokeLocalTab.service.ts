import {Tab} from "../../interfaces/Tab.ts";

export class MokeLocalTabService {

    openTabs(urls: string[] = []) {
        urls.forEach(url => {
            console.log("Opening: ", url)
        });
    }

    getTabsUrls(): Tab[] {
        return [
            {
                title: 'Facebook',
                url: 'facebook.com',
                id: 483435
            },
            {
                title: "Google",
                url: "Google.com",
                id: 543943
            }
        ];
    }
}