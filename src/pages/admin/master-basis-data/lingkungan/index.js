import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormLingkungan from 'src/components/pages/skoring/FormLingkungan';
import { skoringAdmin } from 'src/components/sidebar/GroupLink';

const Lingkungan = () => {
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
            { path: '/master-basis-data', title: 'Manajemen Data' },
            {
              path: '/admin/master-basis-data/lingkungan',
              title: 'Skoring Lingkungan',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">
            SUB SISTEM LINGKUNGAN
          </div>
        </div>
        <div className="w-[632px]">
          <FormLingkungan />
        </div>
      </div>
    </Page>
  );
};
export default Lingkungan;
