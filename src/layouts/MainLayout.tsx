import {Header} from "../home/components";
import {Outlet} from "react-router-dom";
import {ReactNode} from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-start bg-mainButtonsContainer w-[350px] h-[350px]">
            <Header />

            { children }

            <Outlet />
        </div>
    );
}