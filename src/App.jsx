import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PokemonDetail from "./pages/PokemonDetail";


function App() {


  const [pokemon, setPokemon] = useState([]);

  const [search, setSearch] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");

  const [team, setTeam] = useState([]);

  const [loading, setLoading] = useState(true);





  // Load saved team when app starts
  useEffect(() => {

    const savedTeam =
      JSON.parse(
        localStorage.getItem("pokemonTeam")
      );


    if(savedTeam){

      setTeam(savedTeam);

    }


  }, []);





  // Save team whenever it changes
  useEffect(() => {

    localStorage.setItem(
      "pokemonTeam",
      JSON.stringify(team)
    );


  }, [team]);






  // Fetch Paldea Pokemon gradually
  useEffect(() => {


    let ignore = false;



    async function getPokemon(){


      const response = await fetch(
        "https://pokeapi.co/api/v2/pokedex/31"
      );


      const data = await response.json();




      for(const entry of data.pokemon_entries){


        const speciesResponse =
          await fetch(
            entry.pokemon_species.url
          );


        const speciesData =
          await speciesResponse.json();




        const pokemonResponse =
          await fetch(
            `https://pokeapi.co/api/v2/pokemon/${speciesData.id}`
          );



        const pokemonData =
          await pokemonResponse.json();




        if(!ignore){


          setPokemon((previousPokemon)=>{


            const alreadyExists =
              previousPokemon.some(
                (poke)=>
                  poke.id === pokemonData.id
              );



            if(alreadyExists){

              return previousPokemon;

            }



            return [

              ...previousPokemon,

              pokemonData

            ];


          });


        }


      }



      if(!ignore){

        setLoading(false);

      }


    }



    getPokemon();



    return ()=>{

      ignore = true;

    };


  }, []);








  // Search + Type Filter
  const filteredPokemon = pokemon.filter(
    (poke)=>{


      const matchesName =
        poke.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );




      const matchesType =
        typeFilter === "all" ||

        poke.types.some(
          (type)=>
            type.type.name === typeFilter
        );




      return matchesName && matchesType;


    }

  );








  // Add Pokemon to Team
  function addToTeam(poke){


    if(team.length >= 6){

      return;

    }




    const alreadyAdded =
      team.some(
        (member)=>
          member.id === poke.id
      );




    if(!alreadyAdded){


      setTeam(
        [
          ...team,
          poke
        ]
      );


    }


  }









  // Remove Pokemon from Team
  function removeFromTeam(id){


    setTeam(

      team.filter(
        (poke)=>
          poke.id !== id
      )

    );


  }








  return (

    <Routes>


      <Route

        path="/"

        element={

          <Dashboard

            pokemon={pokemon}

            filteredPokemon={filteredPokemon}

            loading={loading}

            search={search}

            setSearch={setSearch}

            typeFilter={typeFilter}

            setTypeFilter={setTypeFilter}

            team={team}

            addToTeam={addToTeam}

            removeFromTeam={removeFromTeam}

          />

        }

      />





      <Route

        path="/pokemon/:id"

        element={

          <PokemonDetail

            pokemon={pokemon}

            team={team}

            addToTeam={addToTeam}

            removeFromTeam={removeFromTeam}

          />

        }

      />



    </Routes>

  );

}


export default App;