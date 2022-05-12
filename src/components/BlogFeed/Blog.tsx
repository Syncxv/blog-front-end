import Button from "../atoms/Button";

interface Props {}

const Blog: React.FC<Props> = () => {
    return (
        <div className="max-w-md p-6 rounded-lg text-gray-200 bg-gray-900 dark:bg-gray-100 dark:text-gray-900">
            <span className="text-sm text-gray-400">1 April 2020</span>
            <h3 className="text-3xl font-semibold mt-1">Architechture Business</h3>
            <p className="description my-4 text-base font-medium">
                a nice long description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit tempora beatae deleniti obcaecati
                neque laborum ad repellat veritatis nulla?
            </p>
            <Button className="mt-4">Read More</Button>
        </div>
    );
};
export default Blog;
