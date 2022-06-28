import React from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { navListRencanaPembangunan } from 'src/components/sidebar/GroupLink';
import FormInvestasi from 'src/components/pages/rencanaPengembangan/FormInvestasi';

const InvestasiPage = () => {
  return (
    <Page sidebar navListSidebar={navListRencanaPembangunan}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/rencana-pengembangan', title: 'Rencana Pengembangan' },
            { path: '/rencana-pengembangan', title: 'Buat Baru' },
            {
              path: '/rencana-pengembangan/buat-baru/investasi',
              title: 'Investasi',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Rencana Investasi</div>
        <div className="w-[70%]">
          <FormInvestasi />
        </div>
      </div>
    </Page>
  );
};

export default InvestasiPage;
