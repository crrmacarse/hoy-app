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
    const todos = db.get(userId);

    todos.push({
        id: crypto.randomUUID(),
        description,
        done: false
    });
};

export const deleteTodo = (userId: string | undefined, todoId: FormDataEntryValue | null) => {
    const todos = db.get(userId);
    const index = todos.findIndex((todo: any) => todo.id === todoId);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
