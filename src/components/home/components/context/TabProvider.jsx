import { useTab } from "../../hooks/useTab";
import { TabContext } from "./TabContext";

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

