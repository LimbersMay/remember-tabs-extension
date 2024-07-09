import {TabSliceInitialState} from "../../src/store/rememberTabs";

export const emptyTabsState: TabSliceInitialState = {
    tabs: []
};

export const tabsState: TabSliceInitialState = {
    tabs: [
        {
            id: 1,
            title: 'Tab 1',
            url: 'https://www.google.com'
        },
        {
            id: 2,
            title: 'Tab 2',
            url: 'https://www.google.com'
        }
    ]
};
