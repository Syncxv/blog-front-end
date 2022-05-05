import type { NextPage } from "next";
import Button from "../components/atoms/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <Button>Hi</Button>
            </Layout>
        </>
    );
};
export default Home;
