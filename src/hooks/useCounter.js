import { useState } from "react";

export const useCounter = (inicialValue = 10) => {
    // Custom Hook

    const [counter, setcounter] = useState(inicialValue);

    const increment = () => {
        setcounter(counter + 1);
    };

    const decrement = () => {
        if (counter === 0) return; // Evitar que el contador sea negativo
        setcounter(counter - 1);
    };

    const reset = () => {
        setcounter(inicialValue);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};
