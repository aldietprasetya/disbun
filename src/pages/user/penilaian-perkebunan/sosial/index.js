import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormSosial from 'src/components/pages/penilaian-perkebunan/FormSosial';
import { navListPenilaianPerkebunan } from 'src/components/sidebar/GroupLink';

const Sosial = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  return (
    <Page
      isInfografis={true}
      backdropHeight="h-[280px]"
      navListSidebar={navListPenilaianPerkebunan}
    >
      <div className="relative mt-5 w-full">
        <BreadCrumbs
          links={[
            { path: '/user/penilaian-perkebunan', title: 'Penilaian Perkebunan' },
            {
              path: '/user/penilaian-perkebunan/sosial',
              title: 'Sosial',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">Sub Sistem Sosial, Ekonomi dan Sosial</div>
        </div>
        <div className="w-[632px]">
          <FormSosial />
        </div>
      </div>
    </Page>
  );
};
export default Sosial;
