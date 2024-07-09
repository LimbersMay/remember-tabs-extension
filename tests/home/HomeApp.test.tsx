import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {HomeApp} from "../../src/home/HomeApp";
import {configureStore} from "@reduxjs/toolkit";
import {tabSlice} from "../../src/store/rememberTabs";
import {emptyTabsState, tabsState} from "../fixtures/tabFixtures";
import {Provider} from "react-redux";
import * as hooks from "../../src/store/hooks";

const store = configureStore({
    reducer: {
        tab: tabSlice.reducer
    },
    preloadedState: {
        tab: emptyTabsState
    }
});

const mockStartOpenTab = jest.fn();
const mockStartDeleteTab = jest.fn();

jest.mock("../../src/store/hooks.ts", () => ({
    useAppSelector: jest.fn(),
    useAppDispatch: jest.fn() // Mock para useAppDispatch
}));

jest.mock("../../src/store/rememberTabs/tab/thunks", () => ({
    startOpenTab: () => mockStartOpenTab,
    startDeleteTab: () => mockStartDeleteTab
}));

describe('Tests for <HomeApp />', () => {
    beforeEach(() => {
        jest.mocked(hooks.useAppSelector).mockClear(); // Clear mock for useAppSelector
        jest.mocked(hooks.useAppDispatch).mockClear(); // Clear mock for useAppDispatch
    });

    test('should render the component successfully', () => {
        jest.mocked(hooks.useAppSelector).mockReturnValue({tabs: tabsState.tabs});

        // Mock for useAppDispatch
        jest.mocked(hooks.useAppDispatch).mockReturnValue(jest.fn());

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeApp/>
                </MemoryRouter>
            </Provider>
        );
    });

    test('should render the component successfully with tabs', () => {
        jest.mocked(hooks.useAppSelector).mockReturnValue({tabs: tabsState.tabs});

        // Mock for useAppDispatch
        jest.mocked(hooks.useAppDispatch).mockReturnValue(jest.fn());

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeApp/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByLabelText("tab-item")).toHaveLength(tabsState.tabs.length);
    });

    test('Should call the open method when click on open button in tab card', () => {

        //const tabId = tabsState.tabs[0].id;

        jest.mocked(hooks.useAppSelector).mockReturnValue({tabs: tabsState.tabs});

        const useAppDispatchMock = jest.fn();

        // Mock for useAppDispatch
        jest.mocked(hooks.useAppDispatch).mockReturnValue(useAppDispatchMock);

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeApp/>
                </MemoryRouter>
            </Provider>
        );

        const openButton = screen.getAllByLabelText('open-tab-button')[0];
        openButton.click();

        expect(useAppDispatchMock).toHaveBeenCalledWith(mockStartOpenTab);
    });

    test('Should call the delete method when click on delete button in tab card', () => {

        jest.mocked(hooks.useAppSelector).mockReturnValue({tabs: tabsState.tabs});

        const useAppDispatchMock = jest.fn();

        // Mock for useAppDispatch
        jest.mocked(hooks.useAppDispatch).mockReturnValue(useAppDispatchMock);

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeApp/>
                </MemoryRouter>
            </Provider>
        );

        const deleteButton = screen.getAllByLabelText('delete-tab-button')[0];
        deleteButton.click();

        expect(useAppDispatchMock).toHaveBeenCalledWith(mockStartDeleteTab);
    });
});

