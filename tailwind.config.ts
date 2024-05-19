import {Config} from "tailwindcss";
import {createThemes} from "tw-colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        createThemes({
                light: {
                    primary: "#006064",
                    mainButtonsContainer: "#E8EAF6",
                    tabItem: "#d7d9e6",
                    tabItemHover: "#c7c9d6",
                    background: "#f7fafc",

                    tabText: "#FEFAF6",

                    btnSave: "#2E7D32",
                    btnSaveHover: "#2a692d",
                    btnOpen: "#00695C",
                    btnOpenHover: "#005a4f",
                    btnDelete: "#c62828",
                    btnDeleteHover: "#b71c1c",
                    btnOptions: "#455A64",
                    btnOptionsHover: "#37474F",
                },
                dark: {
                    primary: "#1F1F1F",
                    tabItem: "#1D1D1D",
                    tabItemHover: "#2e2c2c",
                    background: "#121212",
                    mainButtonsContainer: "#22221f",

                    tabText: "#FEFAF6",

                    btnSave: "#5AA1C2",
                    btnSaveHover: "#3a7f9f",
                    btnOpen: "#35A69B",
                    btnOpenHover: "#2e8f85",
                    btnDelete: "#B84C4B",
                    btnDeleteHover: "#a63b3a",
                    btnOptions: "#37474F",
                    btnOptionsHover: "#2c3a41",
                }
            }
        )
    ],
} satisfies Config;
