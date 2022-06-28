import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { navList } from 'src/components/sidebar/GroupLink';
import FormAspekKebun from 'src/components/pages/aspek/FormAspekKebun';

const KebunPage = () => {
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
            { path: '/infografis', title: 'Infografis' },
            { path: '/infografis/buat-laporan', title: 'Buat Laporan' },
            {
              path: '/pelaporan-perkebunan/aspek-kebun',
              title: 'Aspek Kebun',
            },
          ]}
        />
        <div className="mt-6 flex items-center justify-between ">
          <div className=" text-4xl font-semibold text-black">Aspek Kebun</div>
        </div>
        <div className="w-[632px]">
          <FormAspekKebun />
        </div>
      </div>
    </Page>
  );
};
export default KebunPage;
