let color = '#3aa757';

chorme.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('default background color set to %cgreen', `color: ${color}`);
});