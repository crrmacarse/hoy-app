import { createTodo, deleteTodo, getTodos } from '$lib/database.js';
import { fail } from '@sveltejs/kit';

const USER_ID_KEY = 'userId';
const DESCRIPTION_KEY = 'description';

export const load = ({ cookies }) => {
    let id = cookies.get(USER_ID_KEY);

    if (!id) {
        id = crypto.randomUUID()
        cookies.set(USER_ID_KEY, id, { path: '/' })
    }

    return {
        todos: getTodos(id)
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        await new Promise((fulfill) => setTimeout(fulfill, 1000))

        const data = await request.formData();
        try {
            createTodo(cookies.get(USER_ID_KEY), data.get(DESCRIPTION_KEY))
        } catch (error) {
            return fail(422, {
                description: data.get('description'),
                error: error.message,
            })
            
        }
    },
    delete: async ({ cookies, request }) => {
        await new Promise((fulfill) => setTimeout(fulfill, 1000))

        const data = await request.formData();

        deleteTodo(cookies.get(USER_ID_KEY), data.get('id'))
    }
}