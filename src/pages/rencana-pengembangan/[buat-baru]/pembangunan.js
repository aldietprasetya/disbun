import React from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import FormInformasiUmum from 'src/components/pages/elementDTW/FormInformasiUmum';
import { navListRencanaPembangunan } from 'src/components/sidebar/GroupLink';
import FormPembangunan from 'src/components/pages/rencanaPengembangan/FormPembangunan';

const PembangunanPage = () => {
  return (
    <Page sidebar navListSidebar={navListRencanaPembangunan}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/rencana-pengembangan', title: 'Rencana Pengembangan' },
            { path: '/rencana-pengembangan', title: 'Buat Baru' },
            {
              path: '/rencana-pengembangan/buat-baru/pembangunan',
              title: 'Pembangunan',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Rencana Pembangunan</div>
        <div className="w-[70%]">
          <FormPembangunan />
        </div>
      </div>
    </Page>
  );
};

export default PembangunanPage;
