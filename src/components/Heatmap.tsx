import HeatMap from "@uiw/react-heat-map";

const value = [
  { date: "2024/04/01", count: 2 },
  { date: "2024/04/02", count: 20 },
  { date: "2024/04/03", count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2024/04/${idx + 10}`, count: idx, content: "" })),
  { date: "2024/05/10", count: 2 },
  { date: "2024/05/11", count: 5 },
  { date: "2024/06/02", count: 5 },
  { date: "2024/06/04", count: 11 },
];

const Demo = () => {
  return (
    <div>
      <HeatMap value={value} weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]} startDate={new Date("2024/04/01")} />
    </div>
  );
};

export default Demo;
