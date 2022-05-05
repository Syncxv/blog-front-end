import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContext";
import Button from "../atoms";

interface Props {}

const NavBar: React.FC<Props> = () => {
    const { colorTheme, changeColorTheme } = useContext(ColorThemeContext);
    return (
        <nav className="flex items-center justify-between p-4">
            <h3 className="text-3xl">The Blog</h3>
            <div className="actions">
                <Button isIcon={true} onClick={changeColorTheme}>
                    {colorTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                </Button>
            </div>
        </nav>
    );
};
export default NavBar;
