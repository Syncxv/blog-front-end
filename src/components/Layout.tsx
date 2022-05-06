import { FC, ReactNode, useContext } from "react";
import { ColorThemeContext } from "../context/ColorThemeContext";
import NavBar from "./NavBar";

interface Props {
    children?: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    const { colorTheme } = useContext(ColorThemeContext);
    return (
        <div className={`wrapper-for-the-page-warpper-:) ${colorTheme}`}>
            <div
                className={`page-wrapper text-black bg-light-primary h-screen w-screen transition-colors duration-300 dark:text-white dark:bg-dark-primary`}
            >
                <NavBar />
                {children}
            </div>
        </div>
    );
};
export default Layout;
