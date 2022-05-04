import { createContext, useEffect, useState } from "react";
import { getCurrentColorTheme } from "../util/prefersDarkMode";

export type colorTheme = "dark" | "light";

interface ColorThemeContextType {
    colorTheme: colorTheme | null;
    changeColorTheme: () => void;
}
export const ColorThemeContext = createContext<ColorThemeContextType>({
    colorTheme: "dark",
    changeColorTheme: () => {
        console.log("hi");
    },
});

interface Props {
    children?: React.ReactNode;
}

const ColorThemeContextProvider: React.FC<Props> = ({ children }) => {
    const [colorTheme, changeColorTheme] = useState<colorTheme | null>("dark");
    useEffect(() => {
        changeColorTheme(getCurrentColorTheme());
    }, []);
    return (
        <ColorThemeContext.Provider
            value={{
                colorTheme,
                changeColorTheme: () => (colorTheme === "dark" ? changeColorTheme("light") : changeColorTheme("dark")),
            }}
        >
            {children}
        </ColorThemeContext.Provider>
    );
};
export default ColorThemeContextProvider;
