export class MokeLocalStorageService {
    
    setTabs( tabs ) {
        return;
    }

    getTabsUrls() {
        return new Promise(( resolve, reject ) => {

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

    createItem(name, value) {

    }

    getItemBy(query) {

        return new Promise((resolve, reject) => {
            switch (query) {
                case 'language':
                    return resolve('EN-US');
                case 'layout':
                    return resolve('EX');
            }
        })

    }
}