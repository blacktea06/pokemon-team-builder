function Summary({ pokemon = [], team = [] }) {


  const totalPokemon = pokemon.length;


  const totalTypes = new Set(
    pokemon.flatMap((poke) =>
      poke.types.map(
        (type) => type.type.name
      )
    )
  ).size;



  return (

    <div className="panel">

      <h2 className="summary-title">
        Pokédex Stats
      </h2>



      <div className="summary-grid">


        <div className="stat-card">

          <h3>
            {totalPokemon}
          </h3>

          <p>
            Pokémon
          </p>

        </div>



        <div className="stat-card">

          <h3>
            {totalTypes}
          </h3>

          <p>
            Types
          </p>

        </div>



        <div className="stat-card">

          <h3>
            {team.length}
          </h3>

          <p>
            Team
          </p>

        </div>


      </div>


    </div>

  );

}


export default Summary;