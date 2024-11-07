// Variable to store the current state of autoSave
let autoSaveEnabled = false;

// Function to update the autoSave status
const updateAutoSaveStatus = () => {
    chrome.storage.sync.get(["autoSave"], (result) => {
        autoSaveEnabled = result.autoSave === 'true';
    });
};

const getTabs = async () => {
    return new Promise((resolve, reject) => {

        chrome.storage.sync.get(["tabs"], (result) => {
            if (!result.tabs) {
                resolve([]);
                return;
            }

            resolve(JSON.parse(result.tabs));
        });
    });
}

// Call this function when the service worker starts
updateAutoSaveStatus();

// Listen for changes in the autoSave setting in chrome.storage
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'sync' && changes.autoSave) {
        autoSaveEnabled = changes.autoSave.newValue === 'true';
    }
});


const onRemoveTab = async (tabId, removeInfo) => {
    if (removeInfo.isWindowClosing) return;

    if (autoSaveEnabled) {
        const tabs = await getTabs();
        const newTabs = tabs.filter(tab => tab.id !== tabId);
        await chrome.storage.sync.set({tabs: JSON.stringify(newTabs)});
    }
};

const onCreateTab = async (tab) => {
    if (autoSaveEnabled) {
        const tabs = await getTabs();

        tabs.push({
            title: tab.title || '',
            url: tab.url || '',
            id: tab.id || 0
        });

        await chrome.storage.sync.set({tabs: JSON.stringify(tabs)});
    }
}

const onUpdatedTab = async (tabId, changeInfo, updatedTab) => {
    if (!autoSaveEnabled || !changeInfo.url) return;

    const tabs = await getTabs();

    const tabExistsIndex = tabs.findIndex(tab => tab.url === updatedTab.url);

    // If the tab already exists based on the url, remove it
    if (tabExistsIndex !== -1) {
        /*
            We ensure the following:
            1. The current updated tab has the same url as the tab in storage
            2. We remove the current tab from storage based on the id, because if we remove it based on the url
            We might remove the wrong tab if the user has multiple tabs with the same url, but the id is unique.

            For example:
            1. User has 1 tab with https://google.com opened
            2. User opens another tab with chrome://newtab/
            3. User updates the second tab to https://google.com
            4. This function is called, we received the second tab with the url https://google.com
            5. We check if the tab url exists in storage, if it does.

            6. First we use the url to find the index of the tab in storage
            7. We then use the id of the current tab to remove the tab from storage to ensure we remove the correct tab

            8. If we remove the tab based on the url, we might remove the first tab with the url https://google.com
            9. This is why we use the id to remove the tab from storage
         */

        const currentTabIndex = tabs.findIndex(tab => tab.id === tabId);
        const newTabs = tabs.toSpliced(currentTabIndex, 1);
        await chrome.storage.sync.set({tabs: JSON.stringify(newTabs)});

        console.log("\n");
        return;
    }

    // If the tab does not exist because we sliced it out, re-add it
    const tabExists = tabs.find(tab => tab.id === tabId);
    if (!tabExists) {
        tabs.push({
            title: updatedTab.title || '',
            url: updatedTab.url || '',
            id: tabId
        });

        await chrome.storage.sync.set({tabs: JSON.stringify(tabs)});
        return;
    }

    // If the tab exists, update the title and url
    const index = tabs.findIndex(tab => tab.id === tabId);
    tabs[index] = {
        title: updatedTab.title || '',
        url: updatedTab.url || '',
        id: tabId
    };

    await chrome.storage.sync.set({tabs: JSON.stringify(tabs)});
}

// Event listeners
chrome.tabs.onUpdated.addListener(onUpdatedTab);
chrome.tabs.onCreated.addListener(onCreateTab);
chrome.tabs.onRemoved.addListener(onRemoveTab);
