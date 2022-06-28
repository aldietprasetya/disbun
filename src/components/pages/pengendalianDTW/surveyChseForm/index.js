import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import TextField from 'src/components/customInput/TextField';
import CustomSelect from 'src/components/customInput/CustomSelect';
import { useFormik } from 'formik';
import {
  getCities,
  getChseSurveyTypes,
  getAllNib,
} from 'src/action/getMasterData';
import TextWithSelect from 'src/components/customInput/TextWithSelect';
import OptionSelect from 'src/components/customInput/OptionSelect';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import { useRouter } from 'next/router';

const SurveyChseForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [optionNibFiltered, setOptionNibFiltered] = useState();
  const [cities, setCities] = useState([]);
  const [allNib, setAllNib] = useState([]);
  const [chseSurveyTypes, setChseSurveyTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const surveyChseForm = useFormik({
    initialValues: {
      nib: '',
      officialName: '',
      city: {
        cityId: 0,
        city: '',
      },
      dtwChseSurveyType: {
        dtwChseSurveyTypeId: 0,
        chseSurveyType: '',
      },
      managerName: '',
      managerPhoneNumber: '',
      email: '',
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axiosInstance.post(
          '/dtw-control/v1/chse-survey/general-information',
          {
            dtwControlId: null,
            nib: values.nib,
            officialName: values.officialName,
            cityId: values.city.cityId,
            dtwChseSurveyTypeId: values.dtwChseSurveyType.dtwChseSurveyTypeId,
            managerName: values.managerName,
            managerPhoneNumber: values.managerPhoneNumber,
            email: values.email,
          },
        );
        if (res.data.success) {
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
          router.push(
            `/pengendalian-dtw/buat-baru/survey-chse/${res.data.data.dtwControlId}`,
          );
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
              title="Submit Gagal!"
            />
          ),
        });
      }
    },
  });

  const { values, setFieldValue, handleChange, handleSubmit } = surveyChseForm;

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
      const resultChseTypes = await getChseSurveyTypes();
      setCities(resultCities);
      setAllNib(resultAllNib);
      setOptionNibFiltered(resultAllNib);
      setChseSurveyTypes(resultChseTypes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  return (
    <div className="mt-5 w-full">
      <div className="mb-4 text-sm font-light text-[#3267E3]">
        Informasi Umum
      </div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium">NIB</div>
        <TextWithSelect
          defaultValue="Pilih NIB"
          valueSelected={values.nib}
          onChange={(e) => {
            setFieldValue('nib', e.target.value);
          }}
        >
          {optionNibFiltered?.length > 0 && (
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
          Jenis Permohonan Survei CHSE
        </div>
        <CustomSelect
          valueSelected={values.dtwChseSurveyType.chseSurveyType}
          defaultValue="Pilih jenis permohonan survei CHSE"
        >
          {chseSurveyTypes?.map((item, idx) => {
            return (
              <div
                onClick={() => setFieldValue('dtwChseSurveyType', item)}
                key={idx}
                className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
              >
                {item.chseSurveyType}
              </div>
            );
          })}
        </CustomSelect>
      </div>
      <div className="mb-4 w-full">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Nama Pengelola</div>
          <TextField
            name="managerName"
            value={values.managerName}
            onChange={handleChange}
            placeholder="Tulis nama pengelola"
          />
        </div>
      </div>
      <div className="mb-4 w-full">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Email</div>
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Masukan email"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 text-xs font-medium">Nomor Telpon</div>
        <div className="flex gap-3">
          <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
            +62
          </div>
          <TextField
            name="managerPhoneNumber"
            placeholder="Masukan nomor telepon"
            onChange={handleChange}
            value={values.managerPhoneNumber}
          />
        </div>
      </div>
      <div className="mt-6 flex w-full items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="h-12 w-full rounded-[4px] bg-primary-green text-white disabled:bg-[#D5DBDA]"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <ReactLoading
                type="spin"
                color="#fff"
                height="25px"
                width="25px"
              />
            </div>
          ) : (
            'Mulai Survei'
          )}
        </button>
      </div>
    </div>
  );
};

export default SurveyChseForm;
