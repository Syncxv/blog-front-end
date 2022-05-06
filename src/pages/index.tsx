import type { NextPage } from "next";
import Button from "../components/atoms/Button";
import BlogFeed from "../components/BlogFeed";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <Button>Hi</Button>
                <BlogFeed />
            </Layout>
        </>
    );
};
export default Home;
