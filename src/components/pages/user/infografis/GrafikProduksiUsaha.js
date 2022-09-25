import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import axios from 'axios';
import _ from 'lodash';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import { Icon } from '@iconify/react';
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

const GrafikProduksiUsaha = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();
  const [filterKeyTabel, setFilterKeyTabel] = useState(false);
  const [perusahaanRekap, setPerusahaanRekap] = useState('')
  const [kabKotaRekap, setKapKotaRekap] = useState('')
  const [periodLaporRekap, setPeriodLaporRekap] = useState('')
  const [periodNilaiRekap, setPeriodNilaiRekap] = useState('')
  const [yearsSelected, setYearsSelected] = useState('2022')
  const [storeProduction, setStoreProduction] = useState([])

  let barChart = {
    series: [{
      data : [1200, 780, 2100, 1240, 500, 1100, 1000, 500, 700, 600, 900, 800]
    }],
    options: {
      chart: {
        toolbar: {
          height: 350,
          type: 'bar',
          show: false,
          tools: {
            download: false
          }
        },
      },
      colors: ['#27AE60'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'November',
          'Desember',
        ]
      }
    }
  }

  const [dataTable, setDataTable] = useState(barChart)

  useEffect(() => {
    if (session) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.accessToken}`

      const getDataReports = axios.get(`${appConfig.baseUrl}/reports/productions`);
      getDataReports.then(
        function(dt) {
          let dataStore = []
          Object.values(dt.data.data)[0].forEach((item, i) => {
            let a = {
              report_period_year: item.report_period_year,
              report_period_month: item.report_period_month,
              raw_production: item.raw_production,
              plant_type: item.plant_type,
              user_id: item.user_id,
            }
            dataStore.push(a)
          });
          setStoreProduction(dataStore)
        },
        function(err) {
          console.log(err)
        }
      )

    }
  }, [session])

  useEffect(() => {
    let rawProduction = []
    let monthProduction = []

    storeProduction.forEach((item, i) => {
      if (yearsSelected == item.report_period_year) {
        rawProduction.push(item.raw_production)
        monthProduction.push(item.report_period_month)
      }
    });

    console.log(rawProduction)
    console.log(monthProduction)
    console.log(barChart)

    const newBarChart = {
      series: [{
        data : rawProduction
      }],
      options: {
        ...barChart.options,
        xaxis: {
          categories: monthProduction
        }
      },
    }

    setDataTable(newBarChart)

  }, [storeProduction])

  const handleFilter = () => {
    setFilterKeyTabel(!filterKeyTabel)
  };

  const handleRekapSearch = () => {
    alert('search alert')
  };

  return (
    <>
      <div className="text-[24px] font-semibold leading-9 mt-[27px]">Grafik Produksi Usaha Perkebunan</div>

      <div className="flex  justify-end items-center gap-3 mb-[21px]">

        <div
          onClick={() => handleFilter()}
          className="h-12 cursor-pointer rounded-md border p-2 flex items-center transition hover:shadow-md bg-primary-gray-6"
        >
          <img src="/icon/filter.svg" className="w-6 mr-2" />
          <span className="text-sm font-bold text-primary-gray-5">Filter Data</span>
        </div>

        <div
          onClick={() => handleDownloadData()}
          className="h-12 cursor-pointer rounded-md border p-2 flex items-center transition hover:shadow-md bg-primary-gray-6"
        >
          <img src="/icon/upload-white.svg" className="w-6 mr-2" />
          <span className="text-sm font-bold text-primary-gray-5">Unduh CSV</span>
        </div>

      </div>

      {
        filterKeyTabel ? (
          <div className="flex flex-col bg-white rounded-md	px-5 pb-[26px] pt-6 mb-6 transition">
            <div className="flex items-center text-[20px] font-medium">
              <img src="/images/master/card/icon/pencarian.svg" className="w-12 mr-[21px]" />
              Pencarian
            </div>
            <div className="flex justify-between items-end mt-6">
              <div className="w-[260px]">
                <InputForm
                  titleForm="Perusahaan"
                  titleName="Perusahaan"
                  onChange={(e) => setPerusahaanRekap(e.target.value)}
                  type="text"
                  values={perusahaanRekap}
                  placeholder="Semua Perusahaan"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Kab/Kota"
                  titleName="Kab/Kota"
                  onChange={(e) => setKapKotaRekap(e.target.value)}
                  type="text"
                  values={kabKotaRekap}
                  placeholder="Semua Kab/Kota"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Periode Pelaporan"
                  titleName="Periode Pelaporan"
                  onChange={(e) => setPeriodLaporRekap(e.target.value)}
                  type="text"
                  values={periodLaporRekap}
                  placeholder="Pilih Tahun"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Periode Penilaian"
                  titleName="Periode Penilaian"
                  onChange={(e) => setPeriodNilaiRekap(e.target.value)}
                  type="text"
                  values={periodNilaiRekap}
                  placeholder="Pilih Interval"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div>
                <div
                  onClick={() => handleRekapSearch()}
                  className="h-12 w-12 cursor-pointer rounded-md border p-2 flex items-center justify-center transition hover:shadow-md bg-primary-gray-6"
                >
                  <img src="/icon/search.svg" className="w-[18px]" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      }

      <div className="bg-white rounded-md px-[22px] py-[19px]">
        <div className="mb-[41px]">
          <div className="text-lg	font-semibold text-primary-blue-3">Produksi Perkebunan (Kg)</div>
          <div className="text-[15px] text-primary-light-gray-1">Tahun {yearsSelected}</div>
        </div>
        <div>
          <ReactApexChart options={dataTable.options} series={dataTable.series} type="bar" height={377} />
        </div>
      </div>
    </>
  );
};

export default GrafikProduksiUsaha;
