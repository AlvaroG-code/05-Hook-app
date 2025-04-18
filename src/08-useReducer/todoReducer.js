export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "[TODO] Add Todo":
            return [...initialState, action.payload];

        case "[TODO] Remove Todo":
            return initialState.filter((todo) => todo.id !== action.payload); // el filter devuelve un nuevo array sin el elemento que cumple la condicion

        case "[TODO] Toggle Todo":
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done, // toggle the done property
                    };
                }

                return todo;
            });

        default:
            return initialState;
    }
};
