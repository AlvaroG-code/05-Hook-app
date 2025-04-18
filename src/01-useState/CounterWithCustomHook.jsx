import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(); // Desestructurando el objeto que retorna el custom hook

    return (
        <>
            <h1>Counter con Hook: {counter}</h1>

            <hr />

            <button
                className="btn btn-primary"
                onClick={increment} // Llamando a la función increment del custom hook
            >
                +1
            </button>
            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={decrement}>
                -1
            </button>
        </>
    );
};
