import React from 'react';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import FormAtraksi from '../../../components/pages/elementDTW/FormAtraksi';
import { navListElementDTW } from '../../../components/sidebar/GroupLink';

const AtraksiPage = () => {
  return (
    <Page sidebar navListSidebar={navListElementDTW}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/element-dtw', title: 'Element DTW' },
            { path: '/element-dtw', title: 'Buat Baru' },
            {
              path: '/element-dtw/buat-baru/atraksi',
              title: 'Atraksi',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Atraksi</div>
        <div className="w-[70%]">
          <FormAtraksi />
        </div>
      </div>
    </Page>
  );
};

export default AtraksiPage;
