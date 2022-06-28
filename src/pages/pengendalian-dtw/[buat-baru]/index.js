import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import CustomLink from 'src/components/CustomLink';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

const Card = ({ title, description, bannerImage, link }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className={`h-[500px] flex-1 rounded-lg  shadow-md shadow-[#D6D6D6] transition-all hover:h-[530px]`}
    >
      <img
        src={bannerImage}
        alt="banner-image"
        className="h-[60%] w-full rounded-t-md object-cover"
      />
      <div className="p-4 text-black">
        <div className="relative text-lg font-semibold after:absolute after:-bottom-2 after:left-0 after:w-10 after:border-b-2 after:border-primary-green">
          {title}
        </div>
        <div className="mt-8 text-[#616161]">{description}</div>
      </div>
    </div>
  );
};

const CreatePengendalianDtwPage = () => {
  const router = useRouter();
  return (
    <Page sidebar={false} backdrop>
      <div className="text-white ">
        <div className="px-16">
          <BreadCrumbs
            variant="2"
            links={[
              {
                path: '/pengendalian-dtw',
                title: 'Pengendalian Daya Tarik Wisata',
              },
              {
                path: '/pengendalian-dtw/buat-baru',
                title: 'Buat Baru',
              },
            ]}
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="text-2xl font-semibold">
              Pengendalian Daya Tarik Wisata
            </div>
            <div
              className="flex cursor-pointer items-center gap-1 rounded-[4px] 
            bg-white py-2 px-3 text-primary-green transition hover:shadow-md"
              onClick={() => router.push('/pengendalian-dtw')}
            >
              <Icon icon="bi:arrow-left-short" className="text-lg" />
              <div className="text-xs font-semibold text-primary-green">
                Kembali
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-[3%] pl-28 pr-16">
          <Card
            title="Survey Awal"
            bannerImage="/images/survey-awal-image.png"
            link="/pengendalian-dtw/buat-baru/survey-awal"
            description="Silahkan isi Form data destinasi jika anda belum mendaftarkan destinasi milik anda. Jika anda sudah pernah menginput data ini maka tidak perlu menginput kembali"
          />

          <Card
            title="Survey Harian"
            bannerImage="/images/survey-harian-image.png"
            link="/pengendalian-dtw/buat-baru/survey-harian"
            description="Silahkan isi Form data destinasi jika anda belum mendaftarkan destinasi milik anda. Jika anda sudah pernah menginput data ini maka tidak perlu menginput kembali"
          />
          <Card
            title="Survey CHSE"
            bannerImage="/images/survey-chse-image.png"
            link="/pengendalian-dtw/buat-baru/survey-chse"
            description="Silahkan isi Form data destinasi jika anda belum mendaftarkan destinasi milik anda. Jika anda sudah pernah menginput data ini maka tidak perlu menginput kembali"
          />
        </div>
      </div>
    </Page>
  );
};

export default CreatePengendalianDtwPage;
