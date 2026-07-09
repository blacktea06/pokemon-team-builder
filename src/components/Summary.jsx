function Summary({pokemon}) {


  const totalPokemon = pokemon.length;


  const totalTypes = new Set(
    pokemon.flatMap(
      (poke)=> 
        poke.types.map(
          (type)=>type.type.name
        )
    )
  ).size;



  return (

    <div className="panel">

      <h2>Stats</h2>


      <p>
        Pokémon Loaded:
        <strong> {totalPokemon}</strong>
      </p>


      <p>
        Types Available:
        <strong> {totalTypes}</strong>
      </p>


      <p>
        Team Size:
        <strong> Coming Soon</strong>
      </p>


    </div>

  );

}


export default Summary;