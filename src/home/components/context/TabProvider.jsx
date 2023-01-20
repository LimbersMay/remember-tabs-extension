import { useTab } from "../../hooks/useTab.js";
import { TabContext } from "./TabContext.jsx";

export const TabProvider = ({ children }) => {

    const {
        tabsState,
        handleSetTabs,
        handleOpenTabs,
        handleDeleteTabs,
        handleDeleteTab,
        handleOpenTab
    } = useTab();

    return (
        <TabContext.Provider value={{
            tabsState,
            handleSetTabs,
            handleOpenTabs,
            handleDeleteTabs,
            handleDeleteTab,
            handleOpenTab
        }}>
            {children}
        </TabContext.Provider>
    )
}

