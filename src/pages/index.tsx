import type { NextPage } from "next";
import { useContext } from "react";
import Layout from "../components/Layout";
import { ColorThemeContext } from "../context/ColorThemeContext";

const Home: NextPage = () => {
    return (
        <>
            <Layout></Layout>
        </>
    );
};
export default Home;
