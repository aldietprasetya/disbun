import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { skoringAdmin } from 'src/components/sidebar/GroupLink';
import FormLegalitas from 'src/components/pages/skoring/FormLegalitas';

const LegalitasPage = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  return (
    <Page
      isInfografis={true}
      backdropHeight="h-[280px]"
      navListSidebar={skoringAdmin}
    >
      <div className="relative mt-5 w-full">
        <BreadCrumbs
          links={[
            { path: '/admin/master-basis-data', title: 'Manajemen Data' },
            {
              path: '/admin/master-basis-data/legalitas',
              title: 'Skoring Legalitas',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">
            SUB SISTEM LEGALITAS
          </div>
        </div>
        <div className="w-[632px]">
          <FormLegalitas />
        </div>
      </div>
    </Page>
  );
};
export default LegalitasPage;
