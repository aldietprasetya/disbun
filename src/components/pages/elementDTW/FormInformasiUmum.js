import React, { useEffect, useState } from 'react';
import InputFileButton from '../../customInput/InputFileButton';
import TextField from '../../customInput/TextField';
import CustomSelect from '../../customInput/CustomSelect';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import {
  getDtwTypes,
  getDtwCategories,
  getDtwActivity,
  getDtwVilageStatus,
  getCities,
  getDtwLocationCategories,
  getDistricts,
  getVillages,
} from 'src/action/getMasterData';

const FormInformasiUmum = () => {
  const [dtwTypes, setDtwTypes] = useState([]);
  const [dtwCategories, setDtwCategories] = useState([]);
  const [dtwActivity, setDtwActivity] = useState([]);
  const [dtwVillageStatuses, setDtwVillageStatuses] = useState([]);
  const [cities, setCities] = useState([]);
  const [dtwLocationCategories, setDtwLocationCategories] = useState([]);
  const [districts, setDistrics] = useState([]);
  const [villages, setVillages] = useState([]);

  const getMasterData = async () => {
    try {
      const resultDtwTypes = await getDtwTypes();
      const resultDtwCategories = await getDtwCategories();
      const resultDtwActivity = await getDtwActivity();
      const resultDtwVillageStatuses = await getDtwVilageStatus();
      const resultCities = await getCities({ provinceId: 9 });
      const resultLocationCat = await getDtwLocationCategories();
      setDtwTypes(resultDtwTypes);
      setDtwCategories(resultDtwCategories);
      setDtwActivity(resultDtwActivity);
      setDtwVillageStatuses(resultDtwVillageStatuses);
      setCities(resultCities);
      setDtwLocationCategories(resultLocationCat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  const formInformasiUmum = useFormik({
    initialValues: {
      dtwId: '',
      nib: '',
      officialName: '',
      inaugurationDate: '',
      dtwType: {
        type: '',
        id: 0,
      },
      dtwActivity: {
        id: 0,
        activity: '',
      },
      dtwVillageStatus: {
        id: 0,
        villageStatus: '',
      },
      dtwCategory: {
        id: 0,
        category: '',
      },
      city: {
        id: 0,
        city: '',
      },
      district: {
        id: 0,
        district: '',
      },
      village: {
        id: 0,
        village: '',
      },
      description: '',
      longitude: '',
      latitude: '',
      dtwLocationCategory: {
        id: 0,
        locationCategory: '',
      },
      address: '',
      managerName: '',
      managerPhoneNumber: '',
      communities: [
        {
          communityName: '',
          communityActivityDescription: '',
          communityProgramDescription: '',
          contactName: '',
          contactPhoneNumber: '',
        },
      ],
      touristVisitProfiles: [
        {
          touristVisitProfilyId: '',
          foreignTourist: null,
          domesticTourist: null,
          year: null,
          visitMotivation: '',
          visitPurpose: '',
        },
      ],
      demographicPhoto: '',
      demographicLink: '',
    },
  });

  const { values, handleChange, setFieldValue } = formInformasiUmum;

  useEffect(async () => {
    if (values.city.id) {
      const resultDistrict = await getDistricts({ cityId: values.city.id });
      setDistrics(resultDistrict);
    }
  }, [values.city]);

  useEffect(async () => {
    if (values.district.id) {
      const resultVillages = await getVillages({
        districId: values.district.id,
      });
      setVillages(resultVillages);
    }
  }, [values.district]);

  return (
    <>
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Informasi Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">NIB</div>
            <TextField
              name="nib"
              placeholder="Masukan nib anda"
              value={values.nib}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Nama Resmi Daya Tarik Wisata
              </div>
              <TextField
                name="officialName"
                placeholder="Nama resmi DTW"
                value={values.officialName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tanggal Peresmian Daya Tarik Wisata
              </div>
              <TextField
                name="inaugurationDate"
                placeholder="YYYY/MM/DD"
                value={values.inaugurationDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jenis Daya Tarik Wisata
              </div>
              <CustomSelect
                valueSelected={values.dtwType.type}
                defaultValue="Pilih jenis DTW"
              >
                {dtwTypes.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('dtwType', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.type}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kegiatan Wisata Dalam DTW
              </div>
              <CustomSelect
                valueSelected={values.dtwActivity.activity}
                defaultValue="Pilih kategori DTW"
              >
                {dtwActivity.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('dtwActivity', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.activity}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Status Wisata Desa</div>
              <CustomSelect
                valueSelected={values.dtwVillageStatus.villageStatus}
                defaultValue="Pilih status desa DTW"
              >
                {dtwVillageStatuses.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('dtwVillageStatus', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.villageStatus}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kategori Fasilitas Penunjang DTW
              </div>
              <CustomSelect
                valueSelected={values.dtwCategory.category}
                defaultValue="Pilih kategori"
              >
                {dtwCategories.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('dtwCategory', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.category}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium">
              Deskripsi Daya Tarik Wisata
            </div>
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              rows={6}
              placeholder="Tulis deskripsi tentang DTW"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">Letak Geografis</div>
        <div className="mt-4">
          <div className=" flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Longitude</div>
              <TextField
                name="longitude"
                placeholder="Longitude"
                value={values.longitude}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Latitude</div>
              <TextField
                value={values.latitude}
                onChange={handleChange}
                name="latitude"
                placeholder="Latitude"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kategori Letak Geografis
              </div>
              <CustomSelect
                valueSelected={values.dtwLocationCategory.locationCategory}
                defaultValue="Pilih kategori"
              >
                {dtwLocationCategories.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('dtwLocationCategory', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.locationCategory}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">Lokasi Administratif</div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kota/Kabupaten</div>
              <CustomSelect
                valueSelected={values.city.city}
                defaultValue="Pilih Kab/Kota"
              >
                {cities.map((item, idx) => {
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
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kecamatan</div>
              <CustomSelect
                valueSelected={values.district.district}
                defaultValue="Pilih Kecamatan"
              >
                {districts?.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('district', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.district}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kelurahan/Desa</div>
              <CustomSelect
                valueSelected={values.village.village}
                defaultValue="Pilih Kel/Desa"
              >
                {villages?.map((item, idx) => {
                  return (
                    <div
                      onClick={() => setFieldValue('village', item)}
                      key={idx}
                      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                    >
                      {item.village}
                    </div>
                  );
                })}
              </CustomSelect>
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium">Alamat</div>
            <textarea
              name="address"
              value={values.address}
              onChange={handleChange}
              rows={6}
              placeholder="Tulis alamat"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Identitas Pengelola Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className=" flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nama Pengelola</div>
              <TextField
                name="managerName"
                onChange={handleChange}
                value={values.managerName}
                placeholder="Nama Pengelola"
              />
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
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Komunitas yang Berada di Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nama Komunitas</div>
              <TextField name="namaKomunitas" placeholder="Nama Komunitas" />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kegiatan Komunitas</div>
              <textarea
                rows={6}
                name="kegiatanKomunitas"
                type="text"
                placeholder="Tulis kegiatan komunitas yang ada di DTW"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Program Pengembangan Masyarakat
              </div>
              <textarea
                rows={6}
                name="programPengembanganMasyarakat"
                type="text"
                placeholder="Tulis program bengembangan masyarakat di sekitar DTW"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Nama Narahubung Komunitas
              </div>
              <TextField
                name="namaNarahubungKomunitas"
                placeholder="Nama narahubung komunitas"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Nomor Telepon Narahubung Komunitas
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                  +62
                </div>
                <TextField
                  name="phoneNarahubungKomunitas"
                  placeholder="Masukan nomor telepon"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <button className="flex w-full justify-center rounded-md border border-primary-green py-3">
              <div className="flex items-center gap-1 text-xs font-semibold text-primary-green">
                <Icon icon="akar-icons:plus" />
                <div>Tambah Komunitas</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Profil Kunjungan Wisatawan
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Wisatawan Mancanegara
              </div>
              <TextField
                name="wisatawanMancanegara"
                placeholder="Masukan jumlah"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Wisatawan Domestik</div>
              <TextField
                name="wisatawanDomestik"
                placeholder="Masukan jumlah"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Tahun Kunjungan</div>
              <CustomSelect
                defaultValue="Pilih tahun"
                listOption={['Sedang', 'Berkembang', 'Maju']}
              />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Motivasi Wisatawan di DTW
              </div>
              <textarea
                rows={6}
                name="nib"
                type="text"
                placeholder="Tulis kegiatan komunitas yang ada di DTW"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tujuan Wisatawan di DTW
              </div>
              <textarea
                rows={6}
                name="nib"
                type="text"
                placeholder="Tulis program bengembangan masyarakat di sekitar DTW"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="flex w-full justify-center rounded-md border border-primary-green py-3">
              <div className="flex items-center gap-1 text-xs font-semibold text-primary-green">
                <Icon icon="akar-icons:plus" />
                <div>Tambah Profil Wisatawan</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-5">
        <div className="font-light text-[#3267E3]">
          Akses Demografi Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className="mb-1 text-xs font-medium">
                  Foto Demografi DTW
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-xs font-medium">
              Link Aplikas/Website Demografi DTW
            </div>
            <TextField name="linkDemografiDtw" placeholder="Masukan Link" />
          </div>
        </div>
      </div>
      <div className="mt-7 flex w-full justify-end">
        <button className="rounded-md bg-primary-green py-3 px-5 text-white">
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormInformasiUmum;
