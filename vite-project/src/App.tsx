import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { UserData } from "./data";
import { useState } from "react";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

interface chartProps {
  chartData: any;
}

function BarChart({ chartData }: chartProps) {
  return <Bar data={chartData} />;
}

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <BarChart chartData={userData} />
      <Pie
        data={userData}
        options={{
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 2000,
          },
        }}
      />
    </div>
  );
}

export default App;
