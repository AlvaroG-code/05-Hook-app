import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10);

    const incrementFather = useCallback(() => {
        setcounter((counter) => counter + 1);
    }, []);

    // const incrementFather = () => {
    //     setcounter(counter + 1);
    // };

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    );
};
