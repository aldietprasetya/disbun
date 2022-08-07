import React, { useState } from 'react';
import Page from 'src/components/Page';
import BreadCrumbs from 'src/components/BreadCrumbs';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { navList } from 'src/components/sidebar/GroupLink';
import FormAspekManajemen from 'src/components/pages/aspek/FormAspekManajemen';

const ManajemenPage = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  const [isError, setIsError] = useState(false);

  return (
    <Page
      isInfografis={true}
      backdropHeight="h-[280px]"
      navListSidebar={navList}
    >
      <div className="relative mt-5 w-full text-white">
        <div className="">
          <BreadCrumbs
            variant="1"
            links={[
              { path: '/user/pelaporan-perkebunan', title: 'Pelaporan Perkebunan' },
              {
                path: '/user/pelaporan-perkebunan/aspek-manajemen',
                title: 'Aspek Manajemen',
              },
            ]}
          />
          <div className="mt-6 flex items-center justify-between ">
            <div className=" text-4xl font-semibold text-black">
              Aspek Manajemen
            </div>
          </div>
          <div className="w-[632px]">
            <FormAspekManajemen />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ManajemenPage;
