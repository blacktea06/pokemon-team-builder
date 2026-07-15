import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

function PokemonGrid({ pokemon, addToTeam }) {
  return (
    <div className="pokemon-grid">
      {pokemon.map((poke) => (
        <Link
          key={poke.id}
          to={`/pokemon/${poke.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PokemonCard
            poke={poke}
            addToTeam={addToTeam}
          />
        </Link>
      ))}
    </div>
  );
}

export default PokemonGrid;