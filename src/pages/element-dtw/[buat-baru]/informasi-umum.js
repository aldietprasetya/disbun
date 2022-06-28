import React from 'react';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import FormInformasiUmum from '../../../components/pages/elementDTW/FormInformasiUmum';
import { navListElementDTW } from '../../../components/sidebar/GroupLink';

const InformasiUmumPage = () => {
  return (
    <Page sidebar navListSidebar={navListElementDTW}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/element-dtw', title: 'Element DTW' },
            { path: '/element-dtw', title: 'Buat Baru' },
            {
              path: '/element-dtw/buat-baru/informasi-umum',
              title: 'Informasi Umum',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Informasi Umum</div>
        <div className="w-[70%]">
          <FormInformasiUmum />
        </div>
      </div>
    </Page>
  );
};

export default InformasiUmumPage;
