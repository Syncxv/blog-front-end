import type { NextPage } from "next";
import { useContext } from "react";
import Layout from "../components/Layout";
import ColorThemeContextProvider, { ColorThemeContext } from "../context/ColorThemeContext";

const Home: NextPage = () => {
    const { colorTheme, changeColorTheme } = useContext(ColorThemeContext);
    return (
        <>
            <Layout>
                <div className="text-3xl">{colorTheme}</div>
                <button onClick={changeColorTheme}>CLICK ME WIGGA</button>
            </Layout>
        </>
    );
};
export default Home;
