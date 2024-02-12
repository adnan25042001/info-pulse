import Article from "./Article";

type Props = {
    news: NewsResponse | null;
};

const NewsList = ({ news }: Props) => {
    if (!news) {
        return null;
    }

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 mb-10">
            {news.data.map((article) => (
                <Article key={article.title} article={article} />
            ))}
        </main>
    );
};

export default NewsList;
