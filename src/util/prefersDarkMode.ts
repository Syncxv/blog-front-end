import { colorTheme } from "../context/ColorThemeContext";
import { isServer } from "./isServer";
export const prefersDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getCurrentColorTheme = (): colorTheme | null => {
    if (!isServer()) return prefersDarkMode() ? "dark" : "light";
    return null;
};
