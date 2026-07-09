import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Summary from "./components/Summary";
import PokemonGrid from "./components/PokemonGrid";
import TeamPanel from "./components/TeamPanel";


function App() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);



  // Fetch Paldea Pokemon gradually
  useEffect(() => {

  async function getPokemon() {

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokedex/31"
    );


    const data = await response.json();


    for (const entry of data.pokemon_entries) {


      const response = await fetch(
        entry.pokemon_species.url
      );


      const speciesData = await response.json();


      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${speciesData.id}`
      );


      const pokemonData = await pokemonResponse.json();


      setPokemon((previousPokemon) => [
        ...previousPokemon,
        pokemonData
      ]);


    }


    setLoading(false);

  }


  getPokemon();


  }, []);




  // Search + Type Filter
  const filteredPokemon = pokemon.filter((poke) => {


    const matchesName = poke.name
      .toLowerCase()
      .includes(search.toLowerCase());



    const matchesType =
      typeFilter === "all" ||
      poke.types.some(
        (type) => type.type.name === typeFilter
      );



    return matchesName && matchesType;


  });






  // Add Pokemon to Team
  function addToTeam(poke) {


    if (team.length >= 6) {

      return;

    }



    const alreadyAdded = team.some(
      (member) => member.id === poke.id
    );



    if (!alreadyAdded) {

      setTeam([
        ...team,
        poke
      ]);

    }


  }





  // Remove Pokemon from Team
  function removeFromTeam(id) {


    setTeam(
      team.filter(
        (poke) => poke.id !== id
      )
    );


  }





  return (

    <div className="app">


      <Header />



      <div className="layout">



        <aside className="left-panel">



          <SearchBar

            search={search}

            setSearch={setSearch}

          />



          <Filter

            typeFilter={typeFilter}

            setTypeFilter={setTypeFilter}

          />



          <Summary

            pokemon={pokemon}

          />



          <TeamPanel

            team={team}

            removeFromTeam={removeFromTeam}

          />



        </aside>






        <main className="pokemon-area">



          {loading && (

            <h2 className="loading">

              Catching Paldea Pokémon...

              <br />

              Loaded {pokemon.length}/400

            </h2>

          )}



          {!loading && (

            <h2 className="loading">

              All 400 Paldea Pokémon Loaded!

            </h2>

          )}






          <PokemonGrid

            pokemon={filteredPokemon}

            addToTeam={addToTeam}

          />



        </main>



      </div>



    </div>

  );

}


export default App;