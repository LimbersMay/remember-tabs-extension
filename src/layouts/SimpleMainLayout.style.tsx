import {Outlet} from "react-router-dom";
import {Header} from "../simpleHome/components/Header";
import {ReactNode} from "react";

export const SimpleMainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-start bg-background w-[150px] h-[350px]">

            <Header />

            {children}

            <Outlet />
        </div>
    )
}
