
export class MokeLocalTabService {

    openTabs(urls = []) {
        urls.forEach(url => {
            console.log("Opening: ", url)
        });
    }

    getTabsUrls() {
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