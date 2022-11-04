export class MokeLocalStorageService {
    
    setTabs( tabs ) {
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

    getTabsUrls() {
        return new Promise(( resolve, reject ) => {

            const tabsUrls = [
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

            resolve(tabsUrls);
        });
    }
}