import Blog from "./Blog";

interface Props {}

const BlogFeed: React.FC<Props> = () => {
    return (
        <div className="grid grid-cols-auto-fit gap-4 p-10 w-full justify-center justify-items-center items-center">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    );
};
export default BlogFeed;
