import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import axiosInstance from 'src/lib/axios';
import MasterBasisData from 'src/components/pages/aspek/AspekMasterPage';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';

const PelaporanPerkebunanPage = () => {
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
      <div className="bg-white">
        <div className="items-center justify-between py-6 px-8">
          <div>
            <BreadCrumbs
              links={[
                {
                  path: '/user/pelaporan-perkebunan',
                  title: 'Pelaporan Perkebunan',
                },
              ]}
            />
            <div className="mt-3 text-2xl font-semibold">Pelaporan Perkebunan</div>
          </div>
        </div>
        <div className="items-center gap-3">
          <MasterBasisData/>
        </div>
      </div>
    </Page>
  );
};

export default PelaporanPerkebunanPage;
