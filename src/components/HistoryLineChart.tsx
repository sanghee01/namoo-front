import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IHistoryData {
  dataName: string;
  min: number;
  max: number;
  borderColor: string;
  backgroundColor: string;
  value: number[];
  dataList: string[];
}

const HistoryLineChart = ({ dataName, min, max, value, dataList, borderColor, backgroundColor }: IHistoryData) => {
  const options: ChartOptions<"line"> = {
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
    scales: {
      y: {
        min,
        max,
      },
    },
  };

  const dates = dataList.map((date) => new Date(date));
  const hours = dates.map((date) => String(date.getHours()).padStart(2, "0"));
  const minutes = dates.map((date) => String(date.getMinutes()).padStart(2, "0"));
  const labels = [];

  for (let i = value.length - 1; i >= 0; i--) labels.push(`${hours[i]}:${minutes[i]}`);

  const data = {
    labels,
    datasets: [
      {
        label: dataName,
        data: value,
        borderColor,
        backgroundColor,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default HistoryLineChart;
