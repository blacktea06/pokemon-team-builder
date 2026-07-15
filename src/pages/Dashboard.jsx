import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Summary from "../components/Summary";
import PokemonGrid from "../components/PokemonGrid";
import TeamPanel from "../components/TeamPanel";

import TypeChart from "../components/TypeChart";
import HeightChart from "../components/HeightChart";

export default function Dashboard({
  pokemon,
  filteredPokemon,
  loading,
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  team,
  addToTeam,
  removeFromTeam,
}) {

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
            team={team}
          />

          <TeamPanel
            team={team}
            removeFromTeam={removeFromTeam}
          />

        </aside>

        <main className="pokemon-area">

          {loading ? (
            <h2>
              Catching Paldea Pokémon...
              <br />
              Loaded {pokemon.length}/400
            </h2>
          ) : (
            <h2>All 400 Pokémon Loaded!</h2>
          )}

          <div className="charts-container">

            <div className="chart-card">

              <h3>Paldea Type Distribution</h3>

              <TypeChart pokemon={pokemon} />

            </div>

            <div className="chart-card">

              <h3>Top 10 Tallest Pokémon</h3>

              <HeightChart pokemon={pokemon} />

            </div>

          </div>

          <PokemonGrid
            pokemon={filteredPokemon}
            addToTeam={addToTeam}
          />

        </main>

      </div>

    </div>
  );
}