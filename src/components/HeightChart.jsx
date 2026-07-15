import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function HeightChart({ pokemon }) {

  const tallest = [...pokemon]
    .sort((a, b) => b.height - a.height)
    .slice(0, 10);

  return (

    <ResponsiveContainer width="100%" height={220}>

      <BarChart
        data={tallest}
        margin={{ top: 10, right: 12, left: -16, bottom: 10 }}
      >

        <CartesianGrid
          vertical={false}
          stroke="rgba(255,255,255,0.14)"
        />

        <XAxis
          dataKey="name"
          tick={{ fill: "#ffffff", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          interval={0}
          angle={-18}
          textAnchor="end"
          height={60}
        />

        <YAxis
          tick={{ fill: "#ffffff", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{ fill: "rgba(255, 215, 0, 0.12)" }}
          contentStyle={{
            background: "rgba(7, 19, 31, 0.95)",
            border: "1px solid rgba(255, 215, 0, 0.5)",
            borderRadius: "12px",
            color: "#ffffff"
          }}
        />

        <Bar
          dataKey="height"
          fill="#ffd700"
          radius={[10, 10, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  );

}