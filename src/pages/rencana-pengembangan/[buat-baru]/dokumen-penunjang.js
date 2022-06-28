import React from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { navListRencanaPembangunan } from 'src/components/sidebar/GroupLink';
import FormDokumenPenunjang from 'src/components/pages/rencanaPengembangan/FormDokumenPenunjang';

const DokumenPenunjangPage = () => {
  return (
    <Page sidebar navListSidebar={navListRencanaPembangunan}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/rencana-pengembangan', title: 'Rencana Pengembangan' },
            { path: '/rencana-pengembangan', title: 'Buat Baru' },
            {
              path: '/rencana-pengembangan/buat-baru/dokumen-penunjang',
              title: 'Dokumen Penunjang',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Dokumen Penunjang</div>
        <div className="w-[70%]">
          <FormDokumenPenunjang />
        </div>
      </div>
    </Page>
  );
};

export default DokumenPenunjangPage;
