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
                },
                {
                    title: "Facebook",
                    url: "Facebook.com",
                    id: 59386993
                },
                {
                    title: "Twitter",
                    url: "Twitter.com",
                    id: 59386994
                },
                {
                    title: "Instagram",
                    url: "Instagram.com",
                    id: 59386995
                },
                {
                    title: "Youtube",
                    url: "Youtube.com",
                    id: 59386996
                },
                {
                    title: "Linkedin",
                    url: "Linkedin.com",
                    id: 59386997
                },
                {
                    title: "Github",
                    url: "Github.com",
                    id: 59386998
                },
                {
                    title: "Stackoverflow",
                    url: "Stackoverflow.com",
                    id: 59386999
                },
                {
                    title: "Reddit",
                    url: "Reddit.com",
                    id: 593869910
                },
                {
                    title: "Wikipedia",
                    url: "Wikipedia.com",
                    id: 593869911
                },
                {
                    title: "Amazon",
                    url: "Amazon.com",
                    id: 593869912
                },
                {
                    title: "Ebay",
                    url: "Ebay.com",
                    id: 593869913
                },
                {
                    title: "Walmart",
                    url: "Walmart.com",
                    id: 593869914
                },
                {
                    title: "Aliexpress",
                    url: "Aliexpress.com",
                    id: 593869915
                },
                {
                    title: "Netflix",
                    url: "Netflix.com",
                    id: 593869916
                },
                {
                    title: "Hulu",
                    url: "Hulu.com",
                    id: 593869917
                },
                {
                    title: "Disney+",
                    url: "Disney+.com",
                    id: 593869918
                },
                {
                    title: "Spotify",
                    url: "Spotify.com",
                    id: 593869919
                },
                {
                    title: "Apple Music",
                    url: "AppleMusic.com",
                    id: 593869920
                },
                {
                    title: "Tidal",
                    url: "Tidal.com",
                    id: 593869921
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