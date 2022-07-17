import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import TextField from 'src/components/customInput/TextField';
import CustomSelect from 'src/components/customInput/CustomSelect';
import InputFileButton from 'src/components/customInput/InputFileButton';
import TextWithSelect from 'src/components/customInput/TextWithSelect';
import { useFormik } from 'formik';
import OptionSelect from 'src/components/customInput/OptionSelect';
import {
  getCities,
  getAllNib,
  getHealthProtocolFacilities,
} from 'src/action/getMasterData';
import { toBase64 } from 'src/lib/toBase64';
import FileUploadedCard from 'src/components/FileUploadedCard';
import RadioButtonCustom from 'src/components/customInput/RadioButtonCustom';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import { useRouter } from 'next/router';

const SurveyAwalForm = ({ data, type }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [optionNibFiltered, setOptionNibFiltered] = useState([]);
  const [cities, setCities] = useState([]);
  const [allNib, setAllNib] = useState([]);
  const [healthFacilities, setHealthFacilities] = useState([]);
  const [loading, setLoading] = useState(false);

  const surveyAwalForm = useFormik({
    initialValues: {
      dtwControlId: '' || data?.dtwControlId,
      nib: '' || data?.nib,
      officialName: '' || data?.officialName,
      city: {
        id: 0 || data?.cityId,
        city: '' || data?.city,
      },
      images: [] || data?.images,
      healtProtocol: '' || data?.healtProtocol,
      totalEmploye: null || data?.totalEmployee,
      totalEmployeeVaccinated: null || data?.totalEmployeeVaccinated,
      visitorCapacity: null || data?.visitorCapacity,
      parkingCapacity: null || data?.parkingCapacity,
      totalTaskForceCovid: null || data?.totalTaskForceCovid,
      checked: false,
      status: 1,
      healthProtocolFacilities: [],
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const healthProtocolFacilities = values.healthProtocolFacilities.map(
          (x) => ({
            dtwHealthProtocolFacilityId: x.dtwHealthProtocolFacilityId,
          }),
        );
        const res = await axiosInstance.post('/dtw-control/v1/first-survey', {
          dtwControlId: values.dtwControlId,
          nib: values.nib,
          officialName: values.officialName,
          cityId: values.city.id,
          healthProtocolFacilities: healthProtocolFacilities,
          images: values.images,
          healtProtocol: values.healtProtocol,
          totalEmployee: values.totalEmploye,
          totalEmployeeVaccinated: values.totalEmployeeVaccinated,
          visitorCapacity: values.visitorCapacity,
          parkingCapacity: values.parkingCapacity,
          totalTaskForceCovid: values.totalTaskForceCovid,
          status: values.status,
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
                title="Submit Berhasil"
              />
            ),
          });
          if (type === 'detail') {
            router.push('/pengendalian-dtw');
          } else {
            router.push('/pengendalian-dtw/buat-baru');
          }
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
              title="Submit Gagal"
            />
          ),
        });
      }
    },
  });

  const { values, setFieldValue, handleChange, handleSubmit } = surveyAwalForm;

  const handleReduceOptionByInput = (e) => {
    if (e) {
      const inputLowerCase = e.toLowerCase();
      const result = allNib.filter(
        (a) =>
          a.nib.toLowerCase().match(inputLowerCase) ||
          a.city.city.toLowerCase().match(inputLowerCase) ||
          a.officialName.toLowerCase().match(inputLowerCase),
      );
      setOptionNibFiltered(result);
    } else {
      setOptionNibFiltered(allNib);
    }
  };

  useEffect(() => {
    handleReduceOptionByInput(values.nib);
  }, [values.nib]);

  const getMasterData = async () => {
    try {
      const resultCities = await getCities({ provinceId: 9 });
      const resultAllNib = await getAllNib();
      const resultHealthFac = await getHealthProtocolFacilities();
      setCities(resultCities);
      setAllNib(resultAllNib);
      setOptionNibFiltered(resultAllNib);
      setHealthFacilities(resultHealthFac);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  const handleChangeImage = async (file) => {
    const filePathsPromises = [];
    file.forEach((a) => {
      filePathsPromises.push(toBase64(a));
    });

    const filePaths = await Promise.all(filePathsPromises);
    const mappedFiles = filePaths.map((base64File, index) => ({
      fileName: file[index].name,
      contentType: file[index].type,
      base64: base64File,
    }));
    setFieldValue('images', mappedFiles);
  };

  const handleSubmitForm = () => {
    setFieldValue('status', 2);
    handleSubmit();
  };

  return (
    <div className="mt-5 w-full">
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium">NIB</div>
        <TextWithSelect
          defaultValue="Pilih NIB"
          valueSelected={values.nib}
          onChange={(e) => {
            setFieldValue('nib', e.target.value);
          }}
        >
          {optionNibFiltered.length > 0 && (
            <>
              {optionNibFiltered?.map((item, idx) => {
                return (
                  <OptionSelect
                    key={idx}
                    onClick={() => {
                      setFieldValue('nib', item.nib);
                      setFieldValue('officialName', item.officialName);
                      setFieldValue('city', item.city);
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold">{item.nib}</span>
                      <Icon icon="bi:dot" />
                      <span className="text-sm">{item.officialName}</span>
                      <Icon icon="bi:dot" />
                      <span className="text-sm">{item.city.city}</span>
                    </div>
                  </OptionSelect>
                );
              })}
            </>
          )}
        </TextWithSelect>
      </div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium">Nama DTW</div>
        <TextField
          placeholder="Masukan nama DTW"
          value={values.officialName}
          name="officialName"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium">Kota/Kabupaten</div>
        <CustomSelect
          valueSelected={values.city.city}
          defaultValue="Pilih Kab/Kota"
        >
          {cities?.map((item, idx) => {
            return (
              <div
                onClick={() => setFieldValue('city', item)}
                key={idx}
                className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
              >
                {item.city}
              </div>
            );
          })}
        </CustomSelect>
      </div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium">
          Ketersediaan Fasilitas Protokol Kesehatan
        </div>
        <CustomSelect
          value={values.healthProtocolFacilities}
          defaultValue="Pilih Protokol Kesehatan"
          multipleValue
          handleRemoveMultiple={({ index }) =>
            setFieldValue('healthProtocolFacilities', [
              ...values.healthProtocolFacilities.slice(0, index),
              ...values.healthProtocolFacilities.slice(index + 1),
            ])
          }
        >
          {healthFacilities?.map((item, idx) => {
            return (
              <div
                onClick={() =>
                  setFieldValue('healthProtocolFacilities', [
                    ...values.healthProtocolFacilities,
                    item,
                  ])
                }
                key={idx}
                className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
              >
                {item.facility}
              </div>
            );
          })}
        </CustomSelect>
      </div>
      <div className="mb-4 w-full ">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="mb-1 text-sm font-medium">
              Foto Fasilitas Protokol Kesehatan (Maksimal 4)
            </div>
            <div className="text-[11px] text-[#B3B3B3]">
              Format gambar: .jpg .jpeg .png.
            </div>
          </div>
          <InputFileButton
            acceptFileType="image/jpeg,image/png,image/jpg"
            handleImage={(file) => handleChangeImage(file)}
            maxFiles={4}
          />
        </div>
        {values.images && (
          <div className="mt-2 border-b pb-2">
            {values?.images?.map((file, index) => {
              return (
                <FileUploadedCard
                  key={index}
                  fileName={file?.fileName}
                  handleRemove={() =>
                    setFieldValue('images', [
                      ...values.images.slice(0, index),
                      ...values.images.slice(index + 1),
                    ])
                  }
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="text-base font-medium">
          Adanya Himbauan Protokol Kesehatan
        </div>
        <div className="mt-3 flex w-[250px] justify-between ">
          <div className="flex items-center gap-2">
            <RadioButtonCustom
              value="Ya"
              checked={values.healtProtocol === 'Ya'}
              onChange={(e) => setFieldValue('healtProtocol', e.target.value)}
            />
            <span className="text-base">Ya</span>
          </div>
          <div className="flex items-center gap-2">
            <RadioButtonCustom
              value="Tidak"
              checked={values.healtProtocol === 'Tidak'}
              onChange={(e) => setFieldValue('healtProtocol', e.target.value)}
            />
            <span className="text-base">Tidak</span>
          </div>
        </div>
      </div>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Jumlah Total Pegawai</div>
          <TextField
            name="totalEmploye"
            value={values.totalEmploye}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">
            Jumlah Total Pegawai yang Sudah Di Vaksin
          </div>
          <TextField
            name="totalEmployeeVaccinated"
            value={values.totalEmployeeVaccinated}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
      </div>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Kapasitas Pengunjung</div>
          <TextField
            name="visitorCapacity"
            value={values.visitorCapacity}
            onChange={handleChange}
            placeholder="Tulis jumlah kapasitas"
            type="number"
          />
        </div>
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">
            Kapasitas Tempat Parkir
          </div>
          <TextField
            name="parkingCapacity"
            value={values.parkingCapacity}
            onChange={handleChange}
            placeholder="Tulis jumlah kapasitas"
            type="number"
          />
        </div>
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Jumlah Satgas Covid-19</div>
          <TextField
            name="totalTaskForceCovid"
            value={values.totalTaskForceCovid}
            onChange={handleChange}
            placeholder="Tulis jumlah petugas"
            type="number"
          />
        </div>
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={values.checked}
          onChange={(e) => setFieldValue('checked', e.target.checked)}
          className="mt-1 focus:outline-none"
        />
        <div className="text-sm">
          Dengan mengisi formulir di atas, Saya mengakui kebenaran data
          identitas dan informasi daya tarik wisata terkait untuk keperluan
          survey destinasi pariwisata.
        </div>
      </div>
      <div className="mt-6 flex w-full items-center gap-3">
        <button
          onClick={handleSubmit}
          className="w-40 rounded-[4px] border border-primary-green p-3 text-primary-green"
        >
          <div className="flex items-center justify-center">
            {loading && values.status === 1 ? (
              <ReactLoading
                type="spin"
                color="#138577"
                height="20px"
                width="20px"
              />
            ) : (
              'Simpan di Draft'
            )}
          </div>
        </button>
        <button
          onClick={handleSubmitForm}
          disabled={!values.checked}
          className="w-full rounded-[4px] bg-primary-green p-3 text-white disabled:bg-[#D5DBDA]"
        >
          {loading && values.status === 2 ? (
            <div className="flex items-center justify-center">
              <ReactLoading
                type="spin"
                color="#fff"
                height="20px"
                width="20px"
              />
            </div>
          ) : (
            'Ajukan Survei'
          )}
        </button>
      </div>
    </div>
  );
};

export default SurveyAwalForm;
