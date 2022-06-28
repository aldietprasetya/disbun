import React, { useCallback, useEffect, useState } from 'react';
import Page from 'src/components/Page';
import { useFormik } from 'formik';
import BreadCrumbs from 'src/components/BreadCrumbs';
import { useSelector } from 'react-redux';
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
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ChartVisitorPercentage from 'src/components/pages/admin/infografis/ChartVisitorPercentage';
import axiosInstance from 'src/lib/axios';
import ChartTotalVisitor from 'src/components/pages/admin/infografis/ChartTotalVisitor';
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import { navList } from 'src/components/sidebar/GroupLink';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

const CardInfografis = ({ title, bgColor, icon, data }) => {
  return (
    <div className="relative flex w-[25%] items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-6 shadow-md shadow-gray-200">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor}`}
      >
        <img src={icon} className="w-5" />
      </div>
      <div className="text-primary-black">
        <div className="text-gray-400">{title}</div>
        <div className="text-xl font-semibold">{data}</div>
      </div>
      <div
        className={`absolute -bottom-3 -right-3 flex h-20 w-20 items-center justify-center rounded-full ${bgColor} opacity-30`}
      >
        <img src={icon} className="w-12" />
      </div>
    </div>
  );
};

const InfografisPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [daySelected, setDaySelected] = useState(new Date());
  const [timePercentageVisit, setTimePercentageVisit] = useState('09:00 WIB');
  const [sessionAllVisitor, setSessionAllVisitor] = useState('09:00 WIB');
  const [dataSummaryDtwControl, setDataSummaryDtwControl] = useState(null);
  const [dataChartTotalVisitor, setDataChartTotalVisitor] = useState(null);
  const [dataCrowdAgainstCapacity, setDataCrowdAgaistCapacity] = useState(null);
  const [dataVisitorCapacity, setDataVisitorCapacity] = useState(null);
  const [dataChartPercentageVisitor, setDataChartPercentageVisitor] =
    useState(null);

  const validDate = moment(daySelected).format('YYYY-MM-DD');
  const [isError, setIsError] = useState(false);

  const getSummaryDtwControl = useCallback(async () => {
    try {
      const res = await axiosInstance.get(
        `/dtw-control/v1/summary?date=${validDate}`,
      );
      if (res.data.success) {
        setDataSummaryDtwControl(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [validDate]);

  const getAllVisitorByDtw = useCallback(async () => {
    try {
      const res = await axiosInstance.get(
        `/dtw-control/v1/visitor?date=${validDate}&surveySession=${timePercentageVisit}`,
      );
      if (res.data.success) {
        setDataChartTotalVisitor(res.data.data.totalVisitorFromDtwCapacity);
        setDataChartPercentageVisitor(res.data.data.persentageVisitorFromDtw);
      }
    } catch (error) {
      console.log(error);
    }
  }, [validDate, timePercentageVisit]);

  const getVisitorCapacityData = useCallback(async () => {
    try {
      const res = await axiosInstance.get(
        `/dtw-capacity/v1/visitor-capacity?date=${validDate}`,
      );
      if (res.data.success) {
        setDataCrowdAgaistCapacity(res.data.data.crowdAgainstCapacity);
        setDataVisitorCapacity(res.data.data.visitorCapacity);
      }
    } catch (error) {
      console.log(error);
    }
  }, [validDate]);

  useEffect(() => {
    getAllVisitorByDtw();
  }, [getAllVisitorByDtw]);

  useEffect(() => {
    getSummaryDtwControl();
    getVisitorCapacityData();
  }, [getSummaryDtwControl, getVisitorCapacityData]);

  return (
    <Page backdropHeight="h-[280px]" navListSidebar={navList}>
      <div className="relative mt-5 text-white">
        <div className="">
          <BreadCrumbs
            variant="1"
            links={[
              {
                path: '/admin/infografis',
                title: 'Infografis',
              },
            ]}
          />
          <div className="mt-6 flex items-center justify-between ">
            <div className=" text-4xl font-semibold text-black">Aspek Umum</div>
            <div className="flex items-center rounded-md bg-white py-2 px-3 text-primary-black">
              <DatePicker
                closeOnScroll={true}
                selected={daySelected}
                onChange={(date) => setDaySelected(date)}
                dateFormat="dd MMMM yyyy"
                className="w-28 text-xs focus:outline-none"
              />
              <img src="/icon/menu-board.svg" />
            </div>
          </div>

          {/* RAW DATA */}
          <div className="mt-[30px] flex gap-4">
            <CardInfografis
              title="Total DTW Terdaftar"
              icon="/icon/total-dtw-icon.svg"
              data={0}
              bgColor="bg-[#DDEBDA]"
            />
            <CardInfografis
              icon="/icon/elemen-dtw-icon.svg"
              title="Elemen DTW"
              bgColor="bg-[#D8EFF3]"
              data={0}
            />
            <CardInfografis
              icon="/icon/rencana-pengembangan-icon.svg"
              title="Rencana Pengembangan"
              bgColor="bg-[#FBE5E3]"
              data={0}
            />
            <CardInfografis
              icon="/icon/pengendalian-dtw-icon.svg"
              title="Pengendalian DTW"
              bgColor="bg-[#FFF2D6]"
              data={dataSummaryDtwControl?.totalDtwControl}
            />
          </div>
        </div>
        <div className="mt-4 h-[400px] overflow-y-scroll">
          <div className="flex w-full gap-8  text-primary-black">
            <div className="flex flex-1 items-center justify-center rounded-md bg-[#038575]/10">
              <img src="/images/under-contruction.png" className="w-60" />
            </div>
            <div className="w-[25%]">
              <div className="h-[48.5%] rounded-md bg-white">
                <div className="rounded-md bg-[#FBFBFB] p-4 font-medium">
                  Kapasitas Pengunjung
                </div>
                <div className=" p-5">
                  {dataVisitorCapacity && (
                    <Pie
                      data={dataVisitorCapacity}
                      height="170px"
                      width="170px"
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              boxWidth: 10,
                            },
                          },
                        },
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="mt-4 h-[48.5%] rounded-md bg-white">
                <div className="bg-[#FBFBFB] p-4 font-medium">
                  Kerumunan Terhadap Kapasitas
                </div>
                <div className="p-5">
                  {dataCrowdAgainstCapacity && (
                    <Pie
                      data={dataCrowdAgainstCapacity}
                      height="170px"
                      width="170px"
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              boxWidth: 10,
                            },
                          },
                        },
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full items-center gap-4 pb-20 text-primary-black">
            <ChartVisitorPercentage
              timePercentageVisit={timePercentageVisit}
              handleChangeSession={(e) => setTimePercentageVisit(e)}
              data={dataChartPercentageVisitor}
            />
            <ChartTotalVisitor
              data={dataChartTotalVisitor}
              timePercentageVisit={timePercentageVisit}
              handleChangeSession={(e) => setTimePercentageVisit(e)}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default InfografisPage;
