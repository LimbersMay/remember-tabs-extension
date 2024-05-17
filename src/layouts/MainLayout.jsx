import {Header} from "../home/components/index.js";
import {Outlet} from "react-router-dom";

export const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-100 w-[350px] h-[350px]">
            <Header />

            { children }

            <Outlet />
        </div>
    );
}