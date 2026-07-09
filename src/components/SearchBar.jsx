function SearchBar({search, setSearch}) {


  return (

    <div className="panel">

      <h3>Search Pokémon</h3>

      <input

        type="text"

        placeholder="Search Pokémon..."

        value={search}

        onChange={(event)=>setSearch(event.target.value)}

      />

    </div>

  );

}


export default SearchBar;