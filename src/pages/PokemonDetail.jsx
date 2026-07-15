import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import TeamPanel from "../components/TeamPanel";

import "./PokemonDetail.css";


function PokemonDetail({
  pokemon,
  team,
  addToTeam,
  removeFromTeam
}) {


  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);



  useEffect(() => {


    async function getPokemon(){


      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );


      const data = await response.json();


      setPokemonData(data);


    }


    getPokemon();


  }, [id]);





  if(!pokemonData){

    return (
      <div className="app">

        <h1 className="loading">
          Loading Pokémon...
        </h1>

      </div>
    );

  }





  return (

    <div className="app">


      <Header />


      <div className="layout">


        {/* SIDEBAR */}

        <aside className="left-panel">


          <TeamPanel
            team={team}
            removeFromTeam={removeFromTeam}
          />


        </aside>





        {/* DETAIL PAGE */}

        <main className="detail-panel">



          <Link to="/">
            ← Back to Dashboard
          </Link>




          <div className="pokemon-detail-card">


            <h1>
              {pokemonData.name}
            </h1>



            <img
              src={
                pokemonData.sprites.other["official-artwork"].front_default
              }
              alt={pokemonData.name}
            />



            <div className="types">


              {pokemonData.types.map((type)=>(
                
                <span
                  className="type"
                  key={type.type.name}
                >

                  {type.type.name}

                </span>

              ))}


            </div>





            <button
              onClick={() => addToTeam(pokemonData)}
            >

              Add To Team

            </button>





            <div className="info-grid">


              <div className="panel">

                <h3>
                  Height
                </h3>

                <p>
                  {pokemonData.height / 10} m
                </p>

              </div>



              <div className="panel">

                <h3>
                  Weight
                </h3>

                <p>
                  {pokemonData.weight / 10} kg
                </p>

              </div>



            </div>







            <div className="panel">


              <h2>
                Abilities
              </h2>



              {pokemonData.abilities.map((ability)=>(

                <p key={ability.ability.name}>

                  {ability.ability.name}

                </p>

              ))}


            </div>







            <div className="panel">


              <h2>
                Base Stats
              </h2>



              {pokemonData.stats.map((stat)=>(


                <div
                  className="stat"
                  key={stat.stat.name}
                >

                  <span>
                    {stat.stat.name}
                  </span>


                  <strong>
                    {stat.base_stat}
                  </strong>


                </div>


              ))}



            </div>



          </div>


        </main>


      </div>


    </div>

  );


}


export default PokemonDetail;