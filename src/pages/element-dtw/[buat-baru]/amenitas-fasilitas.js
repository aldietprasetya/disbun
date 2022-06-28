import React from 'react';
import FormAmenitas from 'src/components/pages/elementDTW/FormAmenitas';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Page from '../../../components/Page';
import { navListElementDTW } from '../../../components/sidebar/GroupLink';

const AmenitasFasilitasPage = () => {
  return (
    <Page sidebar navListSidebar={navListElementDTW}>
      <div>
        <BreadCrumbs
          links={[
            { path: '/element-dtw', title: 'Element DTW' },
            { path: '/element-dtw', title: 'Buat Baru' },
            {
              path: '/element-dtw/buat-baru/amenitas-fasilitas',
              title: 'Amenitas & Fasilitas',
            },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Amenitas & Fasilitas</div>
        <div className="">
          <FormAmenitas />
        </div>
      </div>
    </Page>
  );
};

export default AmenitasFasilitasPage;
