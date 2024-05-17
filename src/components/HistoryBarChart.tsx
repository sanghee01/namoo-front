import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IHistoryData {
  dataName: string;
  min: number;
  max: number;
  backgroundColor: string;
  value: number[];
  dataList: string[];
}

const HistoryBarChart = ({ dataName, min, max, value, dataList, backgroundColor }: IHistoryData) => {
  const options: ChartOptions<"bar"> = {
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

  const dates = dataList.map((date) => new Date(date));
  const hours = dates.map((date) => date.getHours());
  const minutes = dates.map((date) => date.getMinutes());
  const labels = [];

  for (let i = value.length - 1; i >= 0; i--) labels.push(`${hours[i]}:${minutes[i]}`);

  const data = {
    labels,
    datasets: [
      {
        label: dataName,
        data: value,
        backgroundColor,
      },
    ],
    scales: {
      y: {
        min,
        max,
      },
    },
  };
  return <Bar options={options} data={data} />;
};

export default HistoryBarChart;
