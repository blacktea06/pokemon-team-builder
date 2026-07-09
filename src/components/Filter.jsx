function Filter({typeFilter, setTypeFilter}) {


  const types = [
    "all",
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
  ];



  return (

    <div className="panel">

      <h3>Filter by Type</h3>


      <select

        value={typeFilter}

        onChange={(event)=>setTypeFilter(event.target.value)}

      >

        {types.map((type)=>(

          <option key={type} value={type}>

            {type}

          </option>

        ))}


      </select>


    </div>

  );

}


export default Filter;