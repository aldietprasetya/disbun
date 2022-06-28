import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from 'src/components/customInput/CustomSelect';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

const session = ['09:00 WIB', '12:00 WIB', '15:00 WIB'];

const options = {
  indexAxis: 'y',
  scales: {
    y: {
      beginAtZero: true,
    },
  },

  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        boxWidth: 10,
      },
    },
    title: {
      display: false,
    },
  },
};

const ChartVisitorPercentage = ({
  timePercentageVisit,
  handleChangeSession,
  data,
}) => {
  const [dataKunjungan, setDataKunjungan] = useState(null);
  const [heightChart, setHeightChart] = useState(340);

  useEffect(() => {
    if (data) {
      let [dataEdit] = data.datasets;
      dataEdit.barPercentage = data.labels.length >= 6 ? 0.6 : 0.4;
      dataEdit.categoryPercentage = 1;

      if (data.labels.length > 6) {
        setHeightChart(heightChart + (data.labels.length - 6) * 20);
      }

      setDataKunjungan({
        labels: data.labels,
        datasets: [dataEdit],
      });
    }
  }, [data]);

  if (!dataKunjungan) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full rounded-md bg-white">
      <div className="flex items-center justify-between rounded-t-md bg-[#FBFBFB] p-5">
        <div className="">
          Persentase Kunjungan Orang Berdasarkan Kapasitas Wisata
        </div>
        <div className="w-[25%]">
          <CustomSelect
            valueSelected={timePercentageVisit}
            defaultValue="Pilih Session"
          >
            {session?.map((time, idx) => {
              return (
                <div
                  onClick={() => handleChangeSession(time)}
                  key={idx}
                  className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                >
                  {time}
                </div>
              );
            })}
          </CustomSelect>
        </div>
      </div>

      <div className="h-[340px] overflow-y-scroll">
        <div style={{ height: `${heightChart}px` }} className="  px-5 py-3">
          <Bar options={options} data={dataKunjungan} />
        </div>
      </div>
    </div>
  );
};

export default ChartVisitorPercentage;
