export class MokeLocalStorageService {

    constructor() {
        this.language = 'EN-US';
        this.layout = 'EXTENDED';
        this.tabs = [];
    }
    
    setTabs( tabs ) {
        return this.tabs.push(tabs);
    }

    getTabsUrls() {
        return new Promise(( resolve) => {

            const tabsUrls = [
                {
                    title: 'Write the asynchronous function inside the useEffect',
                    url: 'https://www.youtube.com/watch?v=4N1bifzQEhI&list=RDwGF7PswOENQ&index=13',
                    id: 432343542
                },
                {
                    title: "Google",
                    url: "Google.com",
                    id: 59386992
                }
            ];

            resolve(tabsUrls);
        });
    }

    getUserLanguage() {
        return this.language;
    }

    setUserLanguage(language) {
        this.language = language;
    }

    getUserLayout() {
        return this.layout;
    }

    setUserLayout(layout) {
        this.layout = layout;
    }
}