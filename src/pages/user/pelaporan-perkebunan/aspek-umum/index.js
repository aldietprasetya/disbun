import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormAspekUmum from 'src/components/pages/aspek/FormAspekUmum';
import { navList } from 'src/components/sidebar/GroupLink';

const UmumPage = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  return (
    <Page
      isInfografis={true}
      backdropHeight="h-[280px]"
      navListSidebar={navList}
    >
      <div className="relative mt-5 w-full">
        <BreadCrumbs
          links={[
            { path: '/user/pelaporan-perkebunan', title: 'Pelaporan Perkebunan' },
            {
              path: '/user/pelaporan-perkebunan/aspek-umum',
              title: 'Aspek Umum',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">Aspek Umum</div>
        </div>
        <div className="w-[632px]">
          <FormAspekUmum />
        </div>
      </div>
    </Page>
  );
};
export default UmumPage;
