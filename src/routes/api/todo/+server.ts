import { createTodo } from '@app/lib/database.js';
import { json } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
    const { description } = await request.json();

    const userId = cookies.get('userId');
    const { id } = await createTodo(userId, description);

    return json({ id }, { status: 201 })
}