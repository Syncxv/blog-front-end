import React, { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContext";

interface Props {
    isIcon?: boolean;
}

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({ children, isIcon, className, ...props }) => {
    const { colorTheme } = useContext(ColorThemeContext);
    return (
        <button {...props} className={`${colorTheme === "dark" ? "btn-dark" : "btn-light"} ${isIcon && "p-3"} ${className || ""}`.trim()}>
            {children}
        </button>
    );
};
export default Button;
