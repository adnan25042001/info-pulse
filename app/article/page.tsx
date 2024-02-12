import { notFound } from "next/navigation";

type Props = {
    searchParams?: Article;
};

const ArticlePage = ({ searchParams }: Props) => {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound();
    }

    const article: Article = searchParams;

    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {article.image && (
                    <img
                        className="h-50 max-w-[90%] mx-auto md:max-w-md lg:max-w-sm object-cover rounded-lg shadow-md"
                        src={article.image}
                        alt={article.title}
                    />
                )}

                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">
                        {article.title}
                    </h1>

                    <div className="flex divide-x-2 divide-black dark:divide-white space-x-4">
                        <h2 className="font-bold">
                            By: {article.auther || "Unknown"}
                        </h2>
                        <h2 className="font-bold pl-4">
                            Source: {article.source || "Unknown"}
                        </h2>
                        <p className="pl-4">{article.published_at}</p>
                    </div>

                    <p className="pt-4">{article.description}</p>
                </div>
            </section>
        </article>
    );
};

export default ArticlePage;
