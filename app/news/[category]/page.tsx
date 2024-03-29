import NewsList from "@/components/NewsList";
import { categories } from "@/contants";
import { fetchNews } from "@/lib/fetchNews";

type Props = {
    params: { category: Category };
};

const CategoryPage = async ({ params: { category } }: Props) => {
    const news: NewsResponse | null = await fetchNews(category);

    return (
        <div>
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    );
};

export default CategoryPage;

export const generateStaticParams = async () => {
    return categories.map((category) => ({
        category: category,
    }));
};
