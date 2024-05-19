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

                tabText: "#000000",

                btnSave: "#2E7D32",
                btnSaveHover: "#2a692d",
                btnOpen: "#00695C",
                btnOpenHover: "#005a4f",
                btnDelete: "#c62828",
                btnDeleteHover: "#b71c1c",
                btnOptions: "#455A64",
                btnOptionsHover: "#37474F",
            },
                "dark": {
                    "primary": "#004d40",
                    "mainButtonsContainer": "#2e3b4e",
                    "tabItem": "#424a5b",
                    "tabItemHover": "#535e70",
                    "background": "#1b2430",

                    "tabText": "#ffffff",

                    "btnSave": "#388e3c",
                    "btnSaveHover": "#2e7031",
                    "btnOpen": "#00897b",
                    "btnOpenHover": "#00695c",
                    "btnDelete": "#d32f2f",
                    "btnDeleteHover": "#c62828",
                    "btnOptions": "#546e7a",
                    "btnOptionsHover": "#455a64"
                }
            }
        )
    ],
} satisfies Config;
