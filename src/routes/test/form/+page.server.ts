import { createTodo, deleteTodo, getTodos } from '$lib/database.js';

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
        const data = await request.formData();

        createTodo(cookies.get(USER_ID_KEY), data.get(DESCRIPTION_KEY))
    },
    delete: async ({ cookies, request }) => {
        const data = await request.formData();

        deleteTodo(cookies.get(USER_ID_KEY), data.get('id'))
    }
}