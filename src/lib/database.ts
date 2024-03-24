const db = new Map();

export const getTodos = (userId: string) => {
    if (!db.get(userId)) {
        db.set(userId, [{
            id: crypto.randomUUID(),
            description: "Learning Svelte",
            done: false,
        }])
    }

    return db.get(userId)
}

export const createTodo = (userId: string | undefined, description: FormDataEntryValue | null) => {
    if (!description) {
        throw new Error("Description is required")
    }

    const todos = db.get(userId);


    if (todos.find((todo) => todo.description === description)) {
        throw new Error('Todos must be unique')
    }

    const id = crypto.randomUUID();

    todos.push({
        id,
        description,
        done: false
    });

    return {
        id
    }
};

export const deleteTodo = (userId: string | undefined, todoId: FormDataEntryValue | null) => {
    const todos = db.get(userId);
    const index = todos.findIndex((todo: any) => todo.id === todoId);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
