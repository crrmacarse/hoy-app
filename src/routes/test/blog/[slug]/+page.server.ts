import { posts } from "@app/constants/sample"
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) throw error(404);

    return {
        post,
    }
}