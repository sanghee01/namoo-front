import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IHistoryData {
  dataName: string;
  min: number;
  max: number;
  borderColor: string;
  backgroundColor: string;
}

const HistoryChart = ({
  dataName,
  min,
  max,
  borderColor,
  backgroundColor,
}: IHistoryData) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: dataName,
      },
    },
  };

  const labels = [];
  for (let i = 1; i <= 15; i++) labels.push(i);

  const data = {
    labels,
    datasets: [
      {
        label: dataName,
        data: labels.map(() => faker.datatype.number({ min: min, max: max })),
        borderColor,
        backgroundColor,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default HistoryChart;
