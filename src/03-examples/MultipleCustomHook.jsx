import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    );

    return (
        <>
            <h1>Información de Pókemon</h1>
            <hr />
            {isLoading ? (
                <LoadingMessage />
            ) : (
                <PokemonCard // Componente que muestra la información del Pokémon
                    id={counter} // ID del Pokémon
                    name={data.name} // Nombre del Pokémon
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.back_default,
                        data.sprites.front_shiny,
                        data.sprites.back_shiny,
                    ]}
                />
            )}
            <h2>{data?.name}</h2>

            <button
                onClick={() => (counter > 1 ? decrement() : null)} // Evitar que el contador sea negativo
                className="btn btn-primary mt-2"
            >
                Anteriores
            </button>
            <button
                onClick={() => increment()}
                className="btn btn-primary mt-2"
            >
                Siguientes
            </button>
        </>
    );
};
