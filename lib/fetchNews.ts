import { gql } from "graphql-request";
import { sortNewsByImage } from "./sortNewsByImage";

export const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "in"
                sort: "published_desc"
                keywords: $keywords
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    // fetch function with next.js 13 caching...
    const res = await fetch(
        `https://buyukcekmece.stepzen.net/api/hazy-joey/__graphql`,
        {
            method: "POST",
            cache: isDynamic ? "no-cache" : "default",
            next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords: keywords,
                },
            }),
        }
    );

    const newsResponse = await res.json();

    let news = null;

    if (newsResponse.data.myQuery) {
        // sort function by images vs not images present
        news = sortNewsByImage(newsResponse.data.myQuery);
    }

    // return news
    return news;
};

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=${media_stack_api_key}"
