import React from 'react';
import FormLainnya from 'src/components/pages/elementDTW/FormLainnya';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import FormAtraksi from '../../../components/pages/elementDTW/FormAtraksi';
import { navListElementDTW } from '../../../components/sidebar/GroupLink';

const LainnyaPage = () => {
  return (
    <Page sidebar navListSidebar={navListElementDTW}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/element-dtw', title: 'Element DTW' },
            { path: '/element-dtw', title: 'Buat Baru' },
            {
              path: '/element-dtw/buat-baru/lain-lain',
              title: 'Lain-lain',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Lain-lain</div>
        <div className="w-[70%]">
          <FormLainnya />
        </div>
      </div>
    </Page>
  );
};

export default LainnyaPage;
