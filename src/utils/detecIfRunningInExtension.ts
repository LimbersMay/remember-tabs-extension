export const detectIfRunningInExtension = () => {
    return window.chrome && chrome.runtime && chrome.runtime.id;
}
