import {Outlet} from "react-router-dom";
import {Header} from "../simpleHome/components/Header";

export const SimpleMainLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-100 w-[150px] h-[350px]">

            <Header />

            {children}

            <Outlet />
        </div>
    )
}
