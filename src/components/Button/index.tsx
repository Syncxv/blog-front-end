import React, { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContext";

interface Props {}

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);
    return (
        <button {...props} className={`${colorTheme === "dark" ? "btn-dark" : "btn-light"} ${props.className || ""}`.trim()}>
            {props.children}
        </button>
    );
};
export default Button;
