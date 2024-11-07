import { v4 as uuid } from 'uuid';
import {LanguageOptions} from "../../interfaces/UserDictionary.ts";

interface SelectProps {
    selected: string,
    options: LanguageOptions[]
    name: string;
    additionalClasses?: string;
    label?: string;
}

export const Select = ({ selected, options, name, additionalClasses, label }: SelectProps) => {

    return (
        <div className="w-full">
            <label
                className="flex flex-row w-full items-center justify-between pl-12 pr-10"
                htmlFor={name}
            >
                <span className="font-bold text-tabText">
                    {
                        label ? label : name.charAt(0).toUpperCase() + name.slice(1)
                    }
                </span>
                <select
                    name={name}
                    className={`outline-none rounded-[5px] h-[35px] w-[60%] p-[5px] bg-[#d7d9e6] ${additionalClasses}`}
                    defaultValue={selected}
                >
                    <option value="" disabled> Select {name} </option>
                    {
                        options.map(element => (
                            <option
                                key={uuid()}
                                value={element.key}
                            >
                                {element.value}
                            </option>
                        ))
                    }
                </select>
            </label>
        </div>
    );
};
