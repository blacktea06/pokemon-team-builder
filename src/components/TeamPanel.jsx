function TeamPanel({team, removeFromTeam}) {


  return (

    <div className="panel">


      <h2>
        My Team
      </h2>


      <p>
        {team.length}/6 Pokémon
      </p>


      <div className="team-list">


      {
        team.map((poke)=>(


          <div 
            className="team-member"
            key={poke.id}
          >

            <img
              src={poke.sprites.front_default}
              alt={poke.name}
            />


            <span>
              {poke.name}
            </span>


            <button
              onClick={()=>
                removeFromTeam(poke.id)
              }
            >
              ❌
            </button>


          </div>


        ))
      }


      </div>


    </div>

  );

}


export default TeamPanel;