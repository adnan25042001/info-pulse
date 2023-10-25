import NewsList from "@/components/NewsList";
import { categories } from "@/contants";
import { fetchNews } from "@/lib/fetchNews";

const Homepage = async () => {
    // fetch the news data
    const news: NewsResponse = await fetchNews(categories.join(","));

    return (
        <div>
            <NewsList news={news} />
        </div>
    );
};

export default Homepage;
