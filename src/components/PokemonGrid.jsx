import PokemonCard from "./PokemonCard";


function PokemonGrid({pokemon, addToTeam}) {

  return (

    <div className="pokemon-grid">

      {
        pokemon.map((poke)=>(

          <PokemonCard
            key={poke.id}
            poke={poke}
            addToTeam={addToTeam}
          />

        ))
      }

    </div>

  );

}


export default PokemonGrid;