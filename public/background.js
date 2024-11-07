// Variable to store the current state of autoSave
let autoSaveEnabled = false;

// Function to update the autoSave status
const updateAutoSaveStatus = () => {
    chrome.storage.sync.get(["autoSave"], (result) => {
        autoSaveEnabled = result.autoSave === 'true';
    });
};

// Call this function when the service worker starts
updateAutoSaveStatus();

// Listen for changes in the autoSave setting in chrome.storage
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'sync' && changes.autoSave) {
        autoSaveEnabled = changes.autoSave.newValue === 'true';
    }
});

// Main function to save tabs
const SaveTabs = () => {
    try {
        chrome.tabs.query({}, (tabs) => {
            const urls = tabs.map(tab => ({
                title: tab.title || '',
                url: tab.url || '',
                id: tab.id || 0
            }));

            chrome.storage.sync.set({tabs: JSON.stringify(urls)}, () => {
                console.log("Tabs saved successfully");
            });
        });
    } catch (error) {
        console.error("Error saving tabs: ", error);
    }
};

// Wrapper that checks if autoSave is enabled before calling SaveTabs
const trySaveTabs = () => {
    if (autoSaveEnabled) {
        SaveTabs();
    }
};

// Event listeners
chrome.tabs.onUpdated.addListener(trySaveTabs);
chrome.tabs.onCreated.addListener(trySaveTabs);
chrome.tabs.onRemoved.addListener(trySaveTabs);
chrome.windows.onRemoved.addListener(trySaveTabs);
