import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import { useSelector } from 'react-redux';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import { Icon } from '@iconify/react';
import CardWarning from 'src/components/CardWarning';
import TableKapasitasDtw from 'src/components/pages/profile/TableKapasitasDtw';
import ReactLoading from 'react-loading';
import { navListSidebarEditProfile } from 'src/components/sidebar/GroupLink';

const PengaturanKapasitasDtw = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [dataSettings, setDataSettings] = useState();
  const [loading, setLoading] = useState(false);

  const getDataSettings = useCallback(async () => {
    try {
      const res = await axiosInstance.get('/dtw-capacity/v1/settings');
      setDataSettings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDataSettings();
  }, [getDataSettings]);

  const handleChangeCapacity = ({ dtwCapacityId, city, dtwCapacityLevel }) => {
    dataSettings.forEach((data, index) => {
      const dataToEdit = {
        dtwCapacityId,
        city,
        dtwCapacityLevel,
      };
      if (data.city.cityId === city.cityId) {
        let copyData = [...dataSettings];
        copyData.splice(index, 1, dataToEdit);
        setDataSettings(copyData);
      }
    });
  };

  const handleSubmitSettingsDtw = async () => {
    try {
      setLoading(true);
      const dataToPost = [];
      dataSettings.forEach((data) => {
        if (data.dtwCapacityLevel.dtwCapacityLevelId !== null) {
          dataToPost.push({
            dtwCapacityId: data.dtwCapacityId || '',
            cityId: data.city.cityId.toString(),
            dtwCapacityLevelId: data.dtwCapacityLevel.dtwCapacityLevelId,
          });
        }
      });

      const res = await axiosInstance.post('/dtw-capacity/v1/settings', {
        dtwCapacities: dataToPost,
      });

      if (res.data.status == 'success') {
        enqueueSnackbar(res.data.message, {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message={message}
              variant="success"
              title="Berhasil Disimpan!"
            />
          ),
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
            title="Error!"
          />
        ),
      });
    }
  };

  return (
    <Page sidebar navListSidebar={navListSidebarEditProfile} sidebarWithIcon>
      <div>
        <BreadCrumbs
          links={[
            { path: '/profile', title: 'Edit Profile' },
            { path: '/profile/admin/kapasitas-dtw', title: 'Kapasitas DTW' },
          ]}
        />
        <div className="mt-4 flex items-center gap-4">
          <div className="text-2xl font-semibold">Pengaturan Kapasitas DTW</div>
          <span className="flex items-center gap-1 rounded-md bg-[#FDEFEE] px-2 py-1 text-[#FF543E]">
            <Icon icon="ci:dot-04-l" />
            <span className="text-sm">Admin Provinsi</span>
          </span>
        </div>

        <div className="mt-10 w-[65%]">
          <CardWarning text="Masukkan persentase kapasitas DTW sesuai dengan Status Level masing-masing Kab/Kota." />
          <div className="mt-6">
            <TableKapasitasDtw
              headerTable={[
                'Kota/Kabupaten',
                'Status Level',
                'Presentase Kapasitas',
              ]}
              data={dataSettings}
              handleChangeCapacity={handleChangeCapacity}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmitSettingsDtw}
              className="w-32 rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] p-2 text-sm text-white"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <ReactLoading
                    type="spin"
                    color="#fff"
                    height="20px"
                    width="20px"
                  />
                </div>
              ) : (
                'Simpan'
              )}
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default PengaturanKapasitasDtw;
