import { FC, ReactNode, useContext, useState } from "react";
import { ColorThemeContext } from "../context/ColorThemeContext";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    const { colorTheme } = useContext(ColorThemeContext);
    return (
        <div
            className={`page-wrapper h-screen w-screen ${colorTheme === "dark" ? "text-white" : "text-black"} ${
                colorTheme === "dark" ? "bg-dark-primary" : "bg-light-primary"
            }`}
        >
            {children}
        </div>
    );
};
export default Layout;
