import { Link } from "react-router-dom";

function PokemonCard({ poke, addToTeam }) {

  function handleAddToTeam(event) {
    // Prevent clicking the button from opening the detail page
    event.stopPropagation();
    event.preventDefault();

    addToTeam(poke);
  }


  return (

    <div className="pokemon-card">


      <Link 
        to={`/pokemon/${poke.id}`}
        className="pokemon-link"
      >

        <img
          src={
            poke.sprites.other["official-artwork"].front_default
          }
          alt={poke.name}
        />


        <h3>
          {poke.name}
        </h3>



        <div className="types">

          {poke.types.map((type) => (

            <span
              className="type"
              key={type.type.name}
            >

              {type.type.name}

            </span>

          ))}

        </div>


      </Link>



      <button
        onClick={handleAddToTeam}
      >

        Add to Team

      </button>


    </div>

  );
}


export default PokemonCard;