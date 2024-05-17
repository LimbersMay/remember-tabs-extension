import { v4 as uuid } from 'uuid';

export const Select = ({ selected, options, name }) => {

    return (
        <div className="flex w-full flex-row justify-evenly">
            <select
                name={name}
                className="border-none outline-none rounded-[5px] h-[35px] w-[80%] p-[5px] bg-[#d7d9e6]"
                defaultValue={selected}
            >
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
        </div>
    );
};
