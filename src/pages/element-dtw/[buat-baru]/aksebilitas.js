import React from 'react';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import FormAksebilitas from '../../../components/pages/elementDTW/FormAksebilitas';
import { navListElementDTW } from '../../../components/sidebar/GroupLink';

const AksebilitasPage = () => {
  return (
    <Page sidebar navListSidebar={navListElementDTW}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/element-dtw', title: 'Element DTW' },
            { path: '/element-dtw', title: 'Buat Baru' },
            {
              path: '/element-dtw/buat-baru/aksebilitas',
              title: 'Aksebilitas',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Aksebilitas</div>
        <div className="w-[70%]">
          <FormAksebilitas />
        </div>
      </div>
    </Page>
  );
};

export default AksebilitasPage;
