import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormAspekUmum from 'src/components/pages/aspek/FormAspekUmum';
import { navList } from 'src/components/sidebar/GroupLink';
import FormAspekPengolahan from 'src/components/pages/aspek/FormAspekPengolahan';

const PengolahanPage = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  return (
    <>
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
                path: '/pelaporan-perkebunan/aspek-pengolahan',
                title: 'Aspek Pengolahan',
              },
            ]}
          />
          <div className="mt-6 flex items-center justify-between ">
            <div className=" text-4xl font-semibold text-black">
              Aspek Pengolahan
            </div>
          </div>
          <div className="w-[632px]">
            <FormAspekPengolahan />
          </div>
        </div>
      </Page>
    </>
  );
};

export default PengolahanPage;
