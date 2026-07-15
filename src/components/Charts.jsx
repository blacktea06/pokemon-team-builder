import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";


function Charts({ pokemon }) {


  // Count Pokemon Types
  const typeCount = {};


  pokemon.forEach((poke)=>{

    poke.types.forEach((type)=>{

      const name = type.type.name;

      typeCount[name] =
        (typeCount[name] || 0) + 1;

    });

  });



  const typeData = Object.keys(typeCount).map(
    (type)=>({
      name:type,
      value:typeCount[type]
    })
  );





  // Average Stats by Pokemon

  const statData = pokemon
    .slice(0,10)
    .map((poke)=>({

      name: poke.name,

      total:
        poke.stats.reduce(
          (sum, stat)=>
            sum + stat.base_stat,
          0
        )

    }));





  return (

    <div className="charts-container">


      <div className="chart-card">


        <h3>
          Paldea Type Distribution
        </h3>


        <ResponsiveContainer
          width="100%"
          height={220}
        >

          <PieChart>

            <Pie
              data={typeData}
              dataKey="value"
              nameKey="name"
              outerRadius={75}
              innerRadius={35}
            >

              {
                typeData.map((entry,index)=>(

                  <Cell
                    key={index}
                  />

                ))
              }

            </Pie>


            <Tooltip />

          </PieChart>


        </ResponsiveContainer>


      </div>







      <div className="chart-card">


        <h3>
          Base Stat Comparison
        </h3>


        <ResponsiveContainer
          width="100%"
          height={220}
        >


          <BarChart
            data={statData}
          >

            <XAxis
              dataKey="name"
              hide
            />

            <YAxis
              hide
            />


            <Tooltip />


            <Bar
              dataKey="total"
              radius={[10,10,0,0]}
            />


          </BarChart>


        </ResponsiveContainer>


      </div>


    </div>

  );


}


export default Charts;