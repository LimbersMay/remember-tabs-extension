import {useContext} from "react";
import { Select } from "./Select";
import { LanguageContext } from "../../context";
import {useAppSelector} from "../../store/hooks.ts";
import {SelectPreferences} from "../../store/rememberTabs";
import kofiLogo from "../../../public/assets/kofi.png";

export const PreferencesContainer = () => {

    const { language, layout, theme } = useAppSelector(SelectPreferences);

    const { userDictionary } = useContext(LanguageContext);
    const {languageOptions, layoutOptions, themeOptions} = userDictionary;

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

            <a
                href="https://ko-fi.com/limbersdev"
                target="_blank"
                className="flex items-center w-[80%] h-[35px] border-none rounded-[5px] p-[5px] text-white bg-[#13C3FF] justify-center hover:shadow cursor-pointer"
            >
                <img
                    src={kofiLogo}
                    alt="Kofi Logo"
                    className="w-[25px] h-[25px] inline-block"
                />
                Support me on Kofi
            </a>
        </div>
    )
}
