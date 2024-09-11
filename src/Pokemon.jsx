import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checking, setChecking] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curElem) => {
        const res = await fetch(curElem.url);
        const data = await res.json();
        return data;
      });
      const singlePokemonData = await Promise.all(detailedPokemonData);
      setPokemon(singlePokemonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curCard) =>
    curCard.name.toLowerCase().includes(checking.toLowerCase())
  );
  //   const searchData = pokemon.filter((curCard)=>{curCard.name.toLowerCase().includes(search.toLowerCase())})

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's catch Pokemon.</h1>
        </header>

        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            name="search"
            value={checking}
            onChange={(e) => setChecking(e.target.value)}
          />
        </div>

        <div>
          <ul className="cards">
            {searchData.map((curPokemon) => {
              return (
                <>
                  <PokemonCards key={curPokemon.id} data={curPokemon} />
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
