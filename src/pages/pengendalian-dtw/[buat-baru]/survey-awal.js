import React, { useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import SurveyAwalForm from 'src/components/pages/pengendalianDTW/surveyAwalForm';

const SurveyAwalPage = () => {
  const router = useRouter();

  return (
    <Page sidebar={false}>
      <div className="h-full rounded bg-white px-7 pb-10 pt-5">
        <div className="flex items-center justify-between">
          <BreadCrumbs
            links={[
              {
                path: '/pengendalian-dtw',
                title: 'Pengendalian Daya Tarik Wisata',
              },
              {
                path: '/pengendalian-dtw/buat-baru',
                title: 'Buat Baru',
              },
              {
                path: '/pengendalian-dtw/buat-baru/survey-awal',
                title: 'Survey Awal',
              },
            ]}
          />
          <div
            onClick={() => router.back()}
            className="flex cursor-pointer  items-center gap-1 
            rounded-[4px] border border-primary-green py-2 px-3 text-primary-green transition hover:shadow-md"
          >
            <Icon icon="bi:arrow-left-short" className="text-lg" />
            <div className="text-sm font-semibold text-primary-green">
              Kembali
            </div>
          </div>
        </div>
        <div className="mt-7 flex w-full justify-center">
          <div className="flex w-[60%] flex-col items-center ">
            <div className="text-2xl font-semibold">Survey Awal</div>
            <div className="mt-4 flex w-full items-start gap-2 rounded bg-[#F0F3FF] px-2 py-3">
              <div>
                <Icon icon="dashicons:warning" className="text-[#3267E3]" />
              </div>
              <div className="text-sm">
                <div className="text-[#3267E3]">Penting!</div>
                <div className="text-[#404040]">
                  Survey Awal Destinasi Pariwisata ditujukan untuk pendataan
                  identitas dan informasi setiap daya tarik wisata di Provinsi
                  Jawa Barat. Silakan lengkapi formulir berikut dengan data yang
                  sebenar-benarnya.
                </div>
              </div>
            </div>
            <SurveyAwalForm type="buat-baru" />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SurveyAwalPage;
