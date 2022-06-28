import React from 'react';
import { useFormik } from 'formik';
import OptionPusatInformasiPariwisata from './FormAmenitas/OptionPusatInformasiPariwisata';
import OptionFasilitasInformasiPariwisata from './FormAmenitas/OptionFasilitasInformasiPariwisata';
import OptionCulinary from './FormAmenitas/OptionCulinary';
import OptionSouvenirSales from './FormAmenitas/OptionSouvenirSales';
import OptionToilet from './FormAmenitas/OptionToilet';
import OptionParkingLot from './FormAmenitas/OptionParkingLot';
import OptionCleaning from './FormAmenitas/OptionCleaning';
import OptionSecurityAndSafety from './FormAmenitas/OptionSecurityAndSafety';
import OptionWorkship from './FormAmenitas/OptionWorkship';
import OptionElectricalEnergy from './FormAmenitas/OptionElectricalEnergy';
import OptionCleanWater from './FormAmenitas/OptionCleanWater';
import RadioButtonCustom from 'src/components/customInput/RadioButtonCustom';

const FormAmenitas = () => {
  const formAmenitas = useFormik({
    initialValues: {
      informationCenter: '',
      otherTourismInformation: '',
      culinary: '',
      souvenirSales: '',
      toilet: '',
      parkingLot: '',
      cleaning: '',
      medical: '',
      securityAndSafety: '',
      financial: '',
      workship: '',
      telecommunication: '',
      electricalEnergy: '',
      cleanWater: '',
      drainageSystem: '',
      dirtyWaterSystem: '',
      localCulture: '',
      localCuisine: '',
    },
  });

  const { values, setFieldValue } = formAmenitas;

  return (
    <>
      <div className="border-b py-5">
        <div className="text-md font-light text-[#3267E3]">
          Informasi Fasilitas Penunjang DTW
        </div>
        <div className="mt-4">
          <div className="text-base font-medium">
            Pusat Informasi Pariwisata
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.informationCenter === 'Ada'}
                onChange={(e) =>
                  setFieldValue('informationCenter', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.informationCenter === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('informationCenter', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.informationCenter === 'Ada' && (
            <OptionPusatInformasiPariwisata />
          )}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Fasilitasi Informasi Pariwisata Lainnya di Dalam Daya Tarik Wisata
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.otherTourismInformation === 'Ada'}
                onChange={(e) =>
                  setFieldValue('otherTourismInformation', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.otherTourismInformation === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('otherTourismInformation', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.otherTourismInformation === 'Ada' && (
            <OptionFasilitasInformasiPariwisata />
          )}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Fasilitas Makan Minum</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.culinary === 'Ada'}
                onChange={(e) => setFieldValue('culinary', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.culinary === 'Tidak Ada'}
                onChange={(e) => setFieldValue('culinary', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.culinary === 'Ada' && <OptionCulinary />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Fasilitas Penjualan Cenderamata
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.souvenirSales === 'Ada'}
                onChange={(e) => setFieldValue('souvenirSales', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.souvenirSales === 'Tidak Ada'}
                onChange={(e) => setFieldValue('souvenirSales', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.souvenirSales === 'Ada' && <OptionSouvenirSales />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Toilet</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.toilet === 'Ada'}
                onChange={(e) => setFieldValue('toilet', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.toilet === 'Tidak Ada'}
                onChange={(e) => setFieldValue('toilet', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.toilet === 'Ada' && <OptionToilet />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Tempat Parkir</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.parkingLot === 'Ada'}
                onChange={(e) => setFieldValue('parkingLot', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.parkingLot === 'Tidak Ada'}
                onChange={(e) => setFieldValue('parkingLot', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.parkingLot === 'Ada' && <OptionParkingLot />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Fasilitas Kebersihan</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.cleaning === 'Ada'}
                onChange={(e) => setFieldValue('cleaning', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.cleaning === 'Tidak Ada'}
                onChange={(e) => setFieldValue('cleaning', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.cleaning === 'Ada' && <OptionCleaning />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Fasilitas Kesehatan</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.medical === 'Ada'}
                onChange={(e) => setFieldValue('medical', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.medical === 'Tidak Ada'}
                onChange={(e) => setFieldValue('medical', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Fasilitas Keamanan dan Keselamatan
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.securityAndSafety === 'Ada'}
                onChange={(e) =>
                  setFieldValue('securityAndSafety', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.securityAndSafety === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('securityAndSafety', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.securityAndSafety === 'Ada' && <OptionSecurityAndSafety />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Fasilitas Keuangan (Contoh: ATM, Bank, dll)
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.financial === 'Ada'}
                onChange={(e) => setFieldValue('financial', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.financial === 'Tidak Ada'}
                onChange={(e) => setFieldValue('financial', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Fasilitas Peribadatan</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.workship === 'Ada'}
                onChange={(e) => setFieldValue('workship', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.workship === 'Tidak Ada'}
                onChange={(e) => setFieldValue('workship', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.workship === 'Ada' && <OptionWorkship />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Sistem Jaringan Telekomunikasi
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.telecommunication === 'Ada'}
                onChange={(e) =>
                  setFieldValue('telecommunication', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.telecommunication === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('telecommunication', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Kapasitas Energi Listrik</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.electricalEnergy === 'Ada'}
                onChange={(e) =>
                  setFieldValue('electricalEnergy', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.electricalEnergy === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('electricalEnergy', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.electricalEnergy === 'Ada' && <OptionElectricalEnergy />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Kapasitas Penyediaan Air Bersih
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.cleanWater === 'Ada'}
                onChange={(e) => setFieldValue('cleanWater', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.cleanWater === 'Tidak Ada'}
                onChange={(e) => setFieldValue('cleanWater', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
          {values.cleanWater === 'Ada' && <OptionCleanWater />}
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Sistem dan Jaringan Drainase
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.drainageSystem === 'Ada'}
                onChange={(e) =>
                  setFieldValue('drainageSystem', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.drainageSystem === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('drainageSystem', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">
            Sistem dan Jaringan Air Kotor/Limbah{' '}
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.dirtyWaterSystem === 'Ada'}
                onChange={(e) =>
                  setFieldValue('dirtyWaterSystem', e.target.value)
                }
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.dirtyWaterSystem === 'Tidak Ada'}
                onChange={(e) =>
                  setFieldValue('dirtyWaterSystem', e.target.value)
                }
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="text-md font-light text-[#3267E3]">
          Informasi Tradisi DTW
        </div>
        <div className="mt-4">
          <div className="text-base font-medium">
            Budaya/Adat-Istiadat Setempat
          </div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.localCulture === 'Ada'}
                onChange={(e) => setFieldValue('localCulture', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.localCulture === 'Tidak Ada'}
                onChange={(e) => setFieldValue('localCulture', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
          </div>
        </div>
        {/* separator form */}
        {/*  */}
        {/* end of separator */}
        <div className="mt-4">
          <div className="text-base font-medium">Kuliner Setempat</div>
          <div className="mt-3 flex w-[250px] justify-between ">
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Ada"
                checked={values.localCuisine === 'Ada'}
                onChange={(e) => setFieldValue('localCuisine', e.target.value)}
              />
              <span className="text-base">Ada</span>
            </div>
            <div className="flex items-center gap-2">
              <RadioButtonCustom
                value="Tidak Ada"
                checked={values.localCuisine === 'Tidak Ada'}
                onChange={(e) => setFieldValue('localCuisine', e.target.value)}
              />
              <span className="text-base">Tidak Ada</span>
            </div>
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

export default FormAmenitas;
