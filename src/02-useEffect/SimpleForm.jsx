import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Alvaro",
        email: "Alvarogprod@gmail.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log("El formulario se ha montado") }, []);
        // console.log("El formulario se ha montado");
    }, []);

    useEffect(() => {
        // console.log("El formulario ha cambiado");
    }, [formState]);

    useEffect(() => {
        // console.log("El email ha cambiado");
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Ingrese su email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {username === "Alvaro2" && <Message />}
        </>
    );
};
