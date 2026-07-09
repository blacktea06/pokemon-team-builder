function PokemonCard({ poke, addToTeam }) {

  return (

    <div className="pokemon-card">


      <img
        src={poke.sprites.front_default}
        alt={poke.name}
      />


      <h2>
        {poke.name.toUpperCase()}
      </h2>


      <div className="types">

        {
          poke.types.map((type)=>(
            
            <span 
              className="type"
              key={type.type.name}
            >
              {type.type.name}
            </span>

          ))
        }

      </div>


      <p>
        Height:
        {" "}
        {poke.height / 10} m
      </p>


      <p>
        Weight:
        {" "}
        {poke.weight / 10} kg
      </p>


      <button
        onClick={()=>addToTeam(poke)}
      >
        Add To Team
      </button>


    </div>

  );

}


export default PokemonCard;