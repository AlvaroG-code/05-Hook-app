import { useEffect } from "react";

import { useForm } from "../hooks/useForm";

export const FormWitchCustomHook = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = formState;
    // const { username, email, password } = formState; // Desestructuración del estado del formulario

    return (
        <>
            <h1>Formulario con custom Hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Ingrese su constraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">
                Borrar
            </button>
        </>
    );
};
