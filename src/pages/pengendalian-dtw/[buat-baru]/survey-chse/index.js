import React from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import SurveyChseForm from 'src/components/pages/pengendalianDTW/surveyChseForm';

const SurveyChsePage = () => {
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
                path: '/pengendalian-dtw/buat-baru/survey-chse',
                title: 'Permohonan Survey CHSE',
              },
            ]}
          />
          <div
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-1 rounded-[4px] 
            border border-primary-green py-2 px-3 text-primary-green transition hover:shadow-md"
          >
            <Icon icon="bi:arrow-left-short" className="text-lg" />
            <div className="text-sm font-semibold text-primary-green">
              Kembali
            </div>
          </div>
        </div>
        <div className="mt-7 flex w-full justify-center">
          <div className="flex w-[60%] flex-col items-center ">
            <div className="text-2xl font-semibold">Permohonan Survey CHSE</div>
            <SurveyChseForm />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SurveyChsePage;
