import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';

const FormKebun = () => {
  const [isError, setIsError] = useState(false);
  //   import non import
  const [importValue, setImportValue] = useState(false);
  const [negeriValue, setNegeriValue] = useState(false);
  //   certificate
  const [isCertificate, setIsCertificate] = useState(false);
  const [noCertificate = null, setNoCertificate] = useState(false);

  // onClick import
  const onImport = () => {
    if (!negeriValue || negeriValue) {
      setImportValue(true);
      setNegeriValue(false);
    }
  };
  const onNegeri = () => {
    if (!importValue || importValue) {
      setNegeriValue(true);
      setImportValue(false);
    }
  };

  // onClick Certificate
  const onCer = () => {
    if (!noCertificate || noCertificate) {
      setIsCertificate(true);
      setNoCertificate(false);
    }
  };
  const offCer = () => {
    if (!isCertificate || isCertificate) {
      setNoCertificate(true);
      setIsCertificate(false);
    }
  };

  return (
    <>
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Bahan Tanaman</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6 items-center">
          <div className="mb-2 text-sm font-semibold text-black">
            Asal bahan tanaman
          </div>
          <div className="inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="bahan-tanaman"
              value="importValue"
              id="importId"
              onClick={onImport}
              label="Import"
            />
          </div>
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="bahan-tanaman"
              value="negeriValue"
              id="negeriId"
              onClick={onNegeri}
              label="Dalam Negeri"
            />
          </div>
        </div>
        {importValue ? (
          <>
            <div className="mt-6 mb-2 text-sm font-semibold text-black">
              Apabila impor, dari mana asal negaranya?
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              <InputForm
                titleForm="Negara Asal"
                titleName="email"
                // onChange={handleChange}
                type="text"
                // values={values.email}
                placeholder="Pilih Negara Asal"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
                selectionArea={true}
              />
              <InputForm
                titleForm="Nomor Surat Ijin"
                titleName="email"
                // onChange={handleChange}
                type="text"
                // values={values.email}
                placeholder="masukan nomor surat ijin impor"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
                iconEmail={true}
              />
            </div>
          </>
        ) : null}
        {negeriValue ? (
          <div className="mt-6">
            <InputForm
              titleForm="Apabila dari dalam negeri. dari mana sumber benihnya?"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="masukkan keterangan sumber"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-6 text-black placeholder:text-base`}
              iconEmail={true}
            />
          </div>
        ) : null}
        <div className="mt-6 items-center">
          <div className="mb-2 text-sm font-semibold text-black">
            Apakah bahan tanaman bersertifikat?
          </div>
          <div className="inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="sertifikat"
              value="onCer"
              id="onCerId"
              onClick={onCer}
              label="Ya"
            />
          </div>
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="sertifikat"
              value="offCer"
              id="offCerId"
              onClick={offCer}
              label="Tidak"
            />
          </div>
        </div>
        {isCertificate ? (
          <div className="mt-6">
            <InputForm
              titleForm="Dari mana sertifikat diperoleh?"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="masukkan keterangan sumber"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-6 text-black placeholder:text-base`}
              iconEmail={true}
            />
          </div>
        ) : null}
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Pemanfaatan Lahan</a>
        </div>
        <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
          <div className="flex items-center">
            <img src="/icon/info-circle.svg" className="w-6" />
            <div className="mx-2 text-sm font-semibold text-primary-blue-1">
              Perhatian!
            </div>
          </div>
          <div className="px-6 text-xs">
            Luas sesuai HGU atau HGU dalam proses pemberian,
            perpanjangan/pembaharuan
          </div>
        </div>
      </div>
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Pemeliharaan Tanaman</a>
      </div>
      <div className="mt-2 text-sm font-normal text-black">
        Pemupukan (yang dilakukan tahun terakhir sebelum penilaian usaha
        perkebunan saat ini)
      </div>
      <div className="mt-2 text-sm font-normal text-black">Pupuk Organik</div>
    </>
  );
};

export default FormKebun;
