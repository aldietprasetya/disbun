import React, { useState } from 'react';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import Page from '../../../../components/Page';
import SectionAksesibilitas from '../../../../components/pages/koleksiDTW/SectionAksesibilitas';
import SectionAmenitas from '../../../../components/pages/koleksiDTW/SectionAmenitas';
import SectionAtraksi from '../../../../components/pages/koleksiDTW/SectionAtraksi';
import SectionFasilitas from '../../../../components/pages/koleksiDTW/SectionFasilitas';
import SectionInformasiUmum from '../../../../components/pages/koleksiDTW/SectionInformasiUmum';
import SectionUtilitas from '../../../../components/pages/koleksiDTW/SectionUtilitas';
import Tabs from '../../../../components/Tabs';

const optionTabs = [
  {
    title: 'Informasi Umum',
    id: 'informasiUmum',
  },
  {
    title: 'Atraksi',
    id: 'atraksi',
  },
  {
    title: 'Aksesibilitas',
    id: 'aksesibilitas',
  },
  {
    title: 'Amenitas',
    id: 'amenitas',
  },
  {
    title: 'Fasilitas',
    id: 'fasilitas',
  },
  {
    title: 'Utilitas',
    id: 'utilitas',
  },
];

const LihatDetail = () => {
  const [tabSelected, setTabSelected] = useState('informasiUmum');

  const renderContent = () => {
    switch (tabSelected) {
      case 'informasiUmum':
        return <SectionInformasiUmum />;
      case 'atraksi':
        return <SectionAtraksi />;
      case 'aksesibilitas':
        return <SectionAksesibilitas />;
      case 'amenitas':
        return <SectionAmenitas />;
      case 'fasilitas':
        return <SectionFasilitas />;
      case 'utilitas':
        return <SectionUtilitas />;
    }
  };
  return (
    <Page>
      <div className="pt-2 pb-5">
        <BreadCrumbs
          links={[
            {
              path: '/master-basis-data',
              title: 'Master Basis Data',
            },
            {
              path: '/master-basis-data/koleksi-dtw',
              title: 'Koleksi DTW',
            },
            {
              path: '/master-basis-data/koleksi-dtw/lihat-detail',
              title: 'Lihat Detail',
            },
          ]}
        />
      </div>
      <div className="w-full h-40 bg-[#048577] rounded-lg">
        <div className="p-4 h-full flex gap-4 text-white  bg-[url('/images/dashboard-image.png')] bg-no-repeat bg-right bg-contain">
          <img
            src="/images/test-image/test-image-dtw.jpeg"
            alt="image-dtw"
            className="h-full object-cover rounded-md shadow-sm"
          />
          <div className="mt-3">
            <div className="text-lg font-semibold">Glamping Lakeside</div>
            <div className="mt-1">NIB. 2003182400163</div>
          </div>
        </div>
      </div>
      {/* end of header */}
      {/* tab */}
      <Tabs
        optionTabs={optionTabs}
        tabSelected={tabSelected}
        handleChangeTab={(id) => setTabSelected(id)}
      />
      {/* end of tab */}
      {/* content */}
      {renderContent()}
      {/* end of content */}
    </Page>
  );
};

export default LihatDetail;
