import NewsList from "@/components/NewsList";
import { fetchNews } from "@/lib/fetchNews";

type Props = {
    searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
    const news: NewsResponse | null = await fetchNews(
        "general",
        searchParams?.term,
        true
    );

    return (
        <div>
            {searchParams?.term && (
                <h1 className="headerTitle">
                    Search Reasults for : {searchParams?.term}
                </h1>
            )}
            <NewsList news={news} />
        </div>
    );
};

export default SearchPage;
