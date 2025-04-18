import { use, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TODOAdd";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []; //
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    };

    // 💡 Calcular total y pendientes
    const totalTodos = todos.length;
    const pendingTodos = todos.filter((todo) => !todo.done).length;

    return (
        <>
            <h1 className="text-start m-2 text-dark">
                {" "}
                Tareas: {totalTodos} <small>Pendientes: {pendingTodos}</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TODOList */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    {/* Fin TODOList */}
                </div>
                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    {/* TODOAdd onNewTodo(todo) */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/* Fin TODOAdd */}
                </div>
            </div>
        </>
    );
};
