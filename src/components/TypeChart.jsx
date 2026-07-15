import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const typeColors = {
  grass: "#7bdc62",
  fire: "#ff8c42",
  water: "#5ba7ff",
  electric: "#ffd751",
  bug: "#9bdc63",
  poison: "#b56cff",
  flying: "#8ecbff",
  ground: "#d6a85c",
  rock: "#c3a26b",
  psychic: "#ff79c6",
  ghost: "#7b7bff",
  ice: "#79e6ff",
  dragon: "#6c7dff",
  dark: "#6a5a7f",
  steel: "#9fb7c8",
  fairy: "#ff9fe0",
  normal: "#c9c9c9",
  fighting: "#ff6b6b",
  shadow: "#505050"
};

export default function TypeChart({ pokemon }) {

  const counts = {};

  pokemon.forEach((poke) => {

    poke.types.forEach((type) => {

      counts[type.type.name] =
        (counts[type.type.name] || 0) + 1;

    });

  });

  const data = Object.entries(counts)
    .map(([name, value]) => ({
      name,
      value
    }))
    .sort((a, b) => b.value - a.value);

  return (

    <ResponsiveContainer width="100%" height={220}>

      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={45}
          outerRadius={80}
          paddingAngle={3}
          stroke="#07131f"
          strokeWidth={2}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >

          {data.map((entry, index) => (

            <Cell
              key={`${entry.name}-${index}`}
              fill={typeColors[entry.name] || "#ffd700"}
            />

          ))}

        </Pie>

        <Tooltip
          contentStyle={{
            background: "rgba(7, 19, 31, 0.95)",
            border: "1px solid rgba(255, 215, 0, 0.5)",
            borderRadius: "12px",
            color: "#ffffff"
          }}
        />

      </PieChart>

    </ResponsiveContainer>

  );

}