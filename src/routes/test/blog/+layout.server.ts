import { posts } from "@app/constants/sample";

export const load = ({ cookies }) => {
    const VISITED_KEY = 'visited';
    const visited = cookies.get(VISITED_KEY);

    cookies.set(VISITED_KEY, 'true', { path: '/' });

    return {
        visited: visited === 'true',
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
        }))
    }
}