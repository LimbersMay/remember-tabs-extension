import {useContext} from "react";
import { Select } from "./Select";
import { LanguageContext } from "../../context";
import {useAppSelector} from "../../store/hooks.ts";
import {SelectPreferences} from "../../store/rememberTabs";

export const PreferencesContainer = () => {

    const { language, layout, theme } = useAppSelector(SelectPreferences);

    const { userDictionary } = useContext(LanguageContext);
    const {languageOptions, layoutOptions, themeOptions, rebooksPromotionMessage } = userDictionary;

    return (
        <div className="flex flex-col items-center gap-[10px] mt-[25px] mb-[20px]">
            <Select
                options={languageOptions}
                selected={language}
                name={"language"}
            />
            <Select
                options={layoutOptions}
                selected={layout}
                name={"layout"}
            />

            <Select
                options={themeOptions}
                selected={theme}
                name={"theme"}
            />

            {/* Button to promote a new extension called "Rebooks" */}
            <button
                className="
                    bg-gradient-to-r from-[#6D83F2] to-[#6C57F5]
                    hover:from-[#6C57F5] hover:to-[#6D83F2]
                    text-white font-bold py-2 px-6 rounded-lg shadow-md
                    hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none
                  "
                onClick={() => window.open('https://chromewebstore.google.com/detail/rebooks-save-track-your-r/kmggkmkjkkbikpdeaminlpkcngobclaj?authuser=2&hl=en', '_blank')}
            >
                📚 { rebooksPromotionMessage }
            </button>

        </div>
    )
}
