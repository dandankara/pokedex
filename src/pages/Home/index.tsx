import React, { useEffect } from "react";
import api from "../../service/api";
import * as S from "./styles";

export default function Home() {
  useEffect(() => {
    async function allGetPokemons() {
      const response = await api.get("pokemon");
      const { results } = response.data;

      const pokemonPayload = await Promise.all(
        results.map(async (pokemon) => {
          const { id, types } = await getMoreInfoPokemom(pokemon.url);
          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      console.log(pokemonPayload);
    }
    allGetPokemons();
  }, []);

  async function getMoreInfoPokemom(url: string) {
    const responseMoreInfo = await api.get(url);
    const { id, types } = responseMoreInfo.data;

    return { id, types };
  }
  return <S.Container></S.Container>;
}
