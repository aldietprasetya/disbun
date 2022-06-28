import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import TextField from 'src/components/customInput/TextField';
import CustomSelect from 'src/components/customInput/CustomSelect';
import InputFileButton from 'src/components/customInput/InputFileButton';
import { useFormik } from 'formik';
import { getCities, getAllNib } from 'src/action/getMasterData';
import TextWithSelect from 'src/components/customInput/TextWithSelect';
import OptionSelect from 'src/components/customInput/OptionSelect';
import { toBase64 } from 'src/lib/toBase64';
import FileUploadedCard from 'src/components/FileUploadedCard';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import { useRouter } from 'next/router';

const testSesiSurvei = ['09:00 WIB', '12:00 WIB', '15:00 WIB'];

const SurveyHarianForm = ({ data, type }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [optionNibFiltered, setOptionNibFiltered] = useState([]);
  const [cities, setCities] = useState([]);
  const [allNib, setAllNib] = useState([]);
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
      sesiSurvei: '' || data?.surveySession,
      totalVisitor: null || data?.totalVisitor,
      totalScanPl: null || data?.totalScanPl,
      totalParkingVehicles: null || data?.totalParkingVehicles,
      totalTaskForceCovid: null || data?.totalTaskForceCovid,
      photoPl: null || data?.photoPl,
      photoImplementationHealthProtocol:
        null || data?.photoImplementationHealthProtocol,
      photoFavoriteSpot: null || data?.photoFavoriteSpot,
      status: 1,
      checked: false,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axiosInstance.post('/dtw-control/v1/daily-survey', {
          dtwControlId: values.dtwControlId || '',
          nib: values.nib,
          officialName: values.officialName,
          cityId: values.city.id,
          totalVisitor: values.totalVisitor,
          totalScanPl: values.totalScanPl,
          totalParkingVehicles: values.totalParkingVehicles,
          totalTaskForceCovid: values.totalTaskForceCovid,
          photoPl: values.photoPl,
          photoImplementationHealthProtocol:
            values.photoImplementationHealthProtocol,
          photoFavoriteSpot: values.photoFavoriteSpot,
          surveySession: values.sesiSurvei,
          status: values.status,
        });
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
      setCities(resultCities);
      setAllNib(resultAllNib);
      setOptionNibFiltered(resultAllNib);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  const handleChangeImage = async ({ file, field }) => {
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
    setFieldValue(field, mappedFiles[0]);
  };

  const handleSubmitSurvei = () => {
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
        <div className="mb-2 text-sm font-medium">Pilih Sesi Survei</div>
        <CustomSelect
          valueSelected={values.sesiSurvei}
          defaultValue="Pilih sesi survei"
        >
          {testSesiSurvei?.map((item, idx) => {
            return (
              <div
                onClick={() => setFieldValue('sesiSurvei', item)}
                key={idx}
                className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
              >
                Sesi {item}
              </div>
            );
          })}
        </CustomSelect>
      </div>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Jumlah Pengunjung</div>
          <TextField
            name="totalVisitor"
            value={values.totalVisitor}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">
            Jumlah Scan Peduli Lindungi
          </div>
          <TextField
            name="totalScanPl"
            value={values.totalScanPl}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
      </div>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">
            Jumlah Kendaraan Parkir
          </div>
          <TextField
            name="totalParkingVehicles"
            value={values.totalParkingVehicles}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">
            Jumlah Petugas Satgas Covid-19
          </div>
          <TextField
            name="totalTaskForceCovid"
            value={values.totalTaskForceCovid}
            onChange={handleChange}
            placeholder="Tulis jumlah"
            type="number"
          />
        </div>
      </div>

      <div className="mb-4 w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="mb-1 text-sm font-medium">
              Foto Screenshot Peduli Lindungi
            </div>
            <div className="text-[11px] text-[#B3B3B3]">
              Format gambar: .jpg .jpeg .png.
            </div>
          </div>
          <InputFileButton
            acceptFileType="image/jpeg,image/png,image/jpg"
            handleImage={(file) =>
              handleChangeImage({ file: file, field: 'photoPl' })
            }
          />
        </div>
        {values.photoPl && (
          <div className="mt-2 border-b pb-2">
            <FileUploadedCard
              fileName={values.photoPl.fileName}
              handleRemove={() => setFieldValue('photoPl', null)}
            />
          </div>
        )}
      </div>
      <div className="mb-4 w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="mb-1 text-sm font-medium">
              Foto Pelaksanaan Protokol Kesehatan
            </div>
            <div className="text-[11px] text-[#B3B3B3]">
              Format gambar: .jpg .jpeg .png.
            </div>
          </div>
          <InputFileButton
            acceptFileType="image/jpeg,image/png,image/jpg"
            handleImage={(file) =>
              handleChangeImage({
                file: file,
                field: 'photoImplementationHealthProtocol',
              })
            }
          />
        </div>
        {values.photoImplementationHealthProtocol && (
          <div className="mt-2 border-b pb-2">
            <FileUploadedCard
              fileName={values.photoImplementationHealthProtocol.fileName}
              handleRemove={() =>
                setFieldValue('photoImplementationHealthProtocol', null)
              }
            />
          </div>
        )}
      </div>
      <div className="mb-4 w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="mb-1 text-sm font-medium">
              Foto Kerumunan di Spot Favorit
            </div>
            <div className="text-[11px] text-[#B3B3B3]">
              Format gambar: .jpg .jpeg .png.
            </div>
          </div>
          <InputFileButton
            acceptFileType="image/jpeg,image/png,image/jpg"
            handleImage={(file) =>
              handleChangeImage({
                file: file,
                field: 'photoFavoriteSpot',
              })
            }
          />
        </div>
        {values.photoFavoriteSpot && (
          <div className="mt-2 border-b pb-2">
            <FileUploadedCard
              fileName={values.photoFavoriteSpot.fileName}
              handleRemove={() => setFieldValue('photoFavoriteSpot', null)}
            />
          </div>
        )}
      </div>
      <div className="mt-10 flex items-start gap-3">
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
          onClick={handleSubmitSurvei}
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

export default SurveyHarianForm;
