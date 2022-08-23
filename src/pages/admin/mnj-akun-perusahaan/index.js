import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import axiosInstance from 'src/lib/axios';
import MasterBasisData from 'src/components/pages/admin/mnjAkunPerusahaan/MasterBasisData';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';

const cards = [
  {
    title: 'Jumlah Perusahaan',
    value: '21',
    icon: '/images/master/card/icon/jumlah perusahaan.svg',
    bannerImage: '/images/master/card/icon/jumlah perusahaan bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah Kebun',
    value: '12',
    icon: '/images/master/card/icon/jumlah kebun.svg',
    bannerImage: '/images/master/card/icon/jumlah kebun bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBN',
    value: '6',
    icon: '/images/master/card/icon/jumlah pbn.svg',
    bannerImage: '/images/master/card/icon/jumlah pbn bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBS',
    value: '9',
    icon: '/images/master/card/icon/jumlah pbs.svg',
    bannerImage: '/images/master/card/icon/jumlah pbs bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
];

const Card = ({ title, value, icon, bannerImage, infosImg }) => {
  return (
    <div
      className={`relative flex z-10 h-[96px] 2xl:h-[110px] w-[280px] 2xl:w-[330px]
        rounded-md bg-cover shadow-sm bg-white
        transition-all hover:shadow-md
      `}
    >
      <img src={bannerImage} className="w-[80px] absolute right-0 bottom-0" />
      <div className="flex items-center px-5 py-6">
        <img src={icon} className="w-[48px]" />
        <div className="ml-3 relative">
          <div className="text-xs	text-primary-gray-1 font-bold flex">
            {title}
            <img src={infosImg} className="w-[12px] ml-1 cursor-pointer" />
          </div>
          <div className="text-2xl pt-1">{value}</div>
        </div>
      </div>
    </div>
  );
};

const ManajemenAkunPerusahaan = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [dataDtwControl, setDataDtwControl] = useState(null);
  const [dataMeta, setDataMeta] = useState();
  const [searchField, setSearchField] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [limit, setLimit] = useState(10);

  const getDataPengendalianDtw = useCallback(async () => {
    const res = await axiosInstance.get(
      `/dtw-control/v1/all?limit=${limit}&page=${page}&keyword=${keywordSearch}`,
    );
    setDataDtwControl(res.data.data.dtwControl);
    setDataMeta(res.data.data.meta);
  }, [page, keywordSearch, limit]);

  useEffect(() => {
    getDataPengendalianDtw();
  }, [getDataPengendalianDtw]);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const handleNextPage = () => {
    if (dataMeta.page * dataMeta.limit <= dataMeta.total) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (dataMeta.page !== 1) {
      setPage(page - 1);
    }
  };

  const handleDownloadData = async () => {
    try {
      const res = await axiosInstance.get('/dtw-control/v1/generate-excel');
      if (res.data.status == 'success') {
        window.open(res.data.data.excel, '_blank');
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        content: (key, message) => (
          <CustomComponent
            id={key}
            message={message}
            variant="error"
            title="Download Gagal"
          />
        ),
      });
    }
  };

  return (
    <Page sidebar={false} backdrop adminMode>

      <div className="mx-10 lg:mx-10  ">

        <div className="mt-2">
          <BreadCrumbs
            variant="0"
            links={[
              {
                path: '/admin/mnj-akun-perusahaan',
                title: 'Manajemen Akun Perusahaan',
              },
            ]}
          />
          <div className="text-[32px] font-normal text-white leading-9 mt-4">Admin PPUP Disbun Jabar</div>
        </div>

        <div className="mt-6 flex justify-between">
          {cards.map((card, i) => {
            return (
              <Card
              title={card.title}
              value={card.value}
              icon={card.icon}
              bannerImage={card.bannerImage}
              infosImg={card.infosImg}
              key={i}
              />
            );
          })}
        </div>

        <div className="mt-6">
          <MasterBasisData/>
        </div>

      </div>

    </Page>
  );
};

export default ManajemenAkunPerusahaan;
