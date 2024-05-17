import {Header} from "../home/components/index.js";
import {Outlet} from "react-router-dom";

export const GenericLayout = ({ children }) => {
    return (
        <div className="bg-gray-100 w-[350px] h-[350px] flex flex-col justify-start items-center">
            <Header />

            { children }

            <Outlet />
        </div>
    );
}