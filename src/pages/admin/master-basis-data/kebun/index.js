import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { skoringAdmin } from 'src/components/sidebar/GroupLink';
import FormKebun from 'src/components/pages/skoring/FormKebun';

const KebunPage = () => {
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
              path: '/admin/master-basis-data/kebun',
              title: 'Skoring Kebun',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">
            SUB SISTEM KEBUN
          </div>
        </div>
        <div className="w-[632px]">
          <FormKebun />
        </div>
      </div>
    </Page>
  );
};
export default KebunPage;
