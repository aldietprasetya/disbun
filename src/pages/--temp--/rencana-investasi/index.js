import React from 'react';
import TextInput from '../../../components/customInput/TextInput';
import Page from '../../../components/Page';
import ButtonContained from '../../../components/button/ButtonContained';
import TextArea from '../../../components/customInput/TextArea';

const RencanaInvestasiPage = () => {
  return (
    <Page>
      <div className="bg-white mt-3 px-9 py-8 rounded-md shadow-md">
        <div className="">
          <div className="w-full flex gap-[2%]">
            <TextInput label="NIB" placeholder="0000000" />
            <TextInput label="Kepemilikan Lahan dan Buktinya" placeholder="0" />
            <TextInput label="Rencana Pengembangan Investasi" placeholder="0" />
          </div>
          <div className="mt-7 w-full">
            <TextArea
              label="Rencana Pengembangan Investasir"
              placeholder="Text"
              rows={6}
            />
          </div>
          <div className="mt-7 w-full flex gap-[2%]">
            <TextInput label="Kebutuhan Modal Tetap" placeholder="0000000" />
            <TextInput
              label="Rencana Pembebasan Lahan"
              placeholder="Ex: Rp10.000.000"
            />
            <TextInput
              label="Rencana Pembangunan Fisik/Bangunan"
              placeholder="Ex: Rp10.000.000"
            />
          </div>
          <div className="mt-7 w-full flex gap-[2%]">
            <TextInput
              label="Rencana Penyediaan Sarpras"
              placeholder="0000000"
            />
            <TextInput
              label="Rencana Pembiayaan Lain-Lain"
              placeholder="Ex: Rp10.000.000"
            />
            <TextInput
              label="Kebutuhan Modal Kerja"
              placeholder="Ex: Rp10.000.000"
            />
          </div>
          <div className="mt-7 w-[32%]">
            <TextInput
              label="Rencana Modal Kerja"
              placeholder="Ex: Rp10.000.000"
            />
          </div>
          <div className="flex justify-end mt-7">
            <div className="flex gap-3">
              <ButtonContained color="secondary">Batal</ButtonContained>
              <ButtonContained color="primary">
                Simpan Perubahan
              </ButtonContained>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default RencanaInvestasiPage;
