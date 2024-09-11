export const PokemonCards = ({ data }) => {
  return (
    <>
      <li className="pokemon-card" key={data.id}>
        
        <figure>
          <img
            className="pokemon-image"
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
          />
        </figure>
        
        <h1 className="pokemon-name">{data.name}</h1>
        
        <div className="pokemon-info pokemon-highlight">
          <p>{data.types.map((cur)=>cur.type.name).join(", ")}</p>
        </div>
        
        <div className="grid-three-cols" >
            <p className="pokemon-info" >
                <span>Height:</span>{data.height}
            </p>
            <p className="pokemon-info" >
                <span>Weight:</span>{data.weight}
            </p>
            <p className="pokemon-info" >
                <span>Speed:</span>{data.stats[5].base_stat}
            </p>

        </div>
        
        <div className="grid-three-cols" >
            <p className="pokemon-info" >
                <span>Experience:</span>{data.base_experience}
            </p>
            <p className="pokemon-info" >
                <span>Attack:</span>{data.stats[1].base_stat}
            </p>
            <p className="pokemon-info" >
                <span>Abilities:</span><br />{data.abilities.map((abilityInfo)=>abilityInfo.ability.name).slice(0,1)}
            </p>

        </div>
      </li>
    </>
  );
};
