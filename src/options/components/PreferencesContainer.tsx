import {useContext} from "react";
import { Select } from "./Select";
import { LanguageContext } from "../../context";
import {useAppSelector} from "../../store/hooks.ts";
import {SelectPreferences} from "../../store/rememberTabs";

export const PreferencesContainer = () => {

    const { language, layout, theme } = useAppSelector(SelectPreferences);

    const { userDictionary } = useContext(LanguageContext);
    const {languageOptions, layoutOptions, themeOptions} = userDictionary;

    return (
        <div className="flex flex-col items-center gap-[10px] mt-[25px] mb-[20px]">
            <Select
                options={ languageOptions }
                selected={ language }
                name={ "language" }
            />
            <Select
                options={ layoutOptions }
                selected={ layout }
                name={ "layout" }
            />

            <Select
                options={themeOptions}
                selected={theme}
                name={"theme"}
            />
        </div>
    )
}
