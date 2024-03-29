import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import RekapitulasiPeriodik from 'src/components/pages/user/infografis/RekapitulasiPeriodik';
import RekapitulasiPeriodikAdm from 'src/components/pages/admin/infografis/RekapitulasiPeriodik';
import GrafikProduksiUsaha from 'src/components/pages/user/infografis/GrafikProduksiUsaha';
import GrafikProduksiUsahaAdm from 'src/components/pages/admin/infografis/GrafikProduksiUsaha';
import GrafikHargaJual from 'src/components/pages/user/infografis/GrafikHargaJual';
import GrafikHargaJualAdm from 'src/components/pages/user/infografis/GrafikHargaJual';

const cards = [
  {
    title: 'Jumlah Perusahaan',
    value: 0,
    icon: '/images/master/card/icon/jumlah perusahaan.svg',
    bannerImage: '/images/master/card/icon/jumlah perusahaan bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah Kebun',
    value: 0,
    icon: '/images/master/card/icon/jumlah kebun.svg',
    bannerImage: '/images/master/card/icon/jumlah kebun bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBN',
    value: 0,
    icon: '/images/master/card/icon/jumlah pbn.svg',
    bannerImage: '/images/master/card/icon/jumlah pbn bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBS',
    value: 0,
    icon: '/images/master/card/icon/jumlah pbs.svg',
    bannerImage: '/images/master/card/icon/jumlah pbs bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
];

const Card = ({ title, value, icon, bannerImage, infosImg }) => {
  return (
    <div
      className={`relative flex z-10 h-[96px] 2xl:h-[110px] w-[280px] 2xl:w-[330px]
        rounded-md bg-cover shadow-sm bg-white
        transition-all hover:shadow-md
      `}
    >
      <img src={bannerImage} className="w-[80px] absolute right-0 bottom-0" />
      <div className="flex items-center px-5 py-6">
        <img src={icon} className="w-[48px]" />
        <div className="ml-3 relative">
          <div className="text-xs	text-primary-gray-1 font-bold flex">
            {title}
            <img src={infosImg} className="w-[12px] ml-1 cursor-pointer" />
          </div>
          <div className="text-2xl pt-1">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default function InfografisPage() {
  const { data: session } = useSession();

  return (
    <Page sidebar={false} backdrop adminMode>

      <div className="mx-10 lg:mx-10  ">

        <div className="mt-2">
          <BreadCrumbs
            variant="0"
            links={[
              {
                path: '/infografis',
                title: 'Infografis',
              },
            ]}
          />
          <div className="text-[32px] font-normal text-white leading-9 mt-4">

            <>
              {session ? (
                <>
                  {
                    session.user.acquiredUser.role == 1 ? (
                      'PT. Perkebunan Nusantara VIII'
                    ) : (
                      'Admin PPUP Disbun Jabar'
                    )
                  }
                </>
              ) : null}
            </>

          </div>
        </div>

        <div className="mt-6 flex justify-between">
          {cards.map((card, i) => {
            return (
              <Card
              title={card.title}
              value={card.value}
              icon={card.icon}
              bannerImage={card.bannerImage}
              infosImg={card.infosImg}
              key={i}
              />
            );
          })}
        </div>

        <>
          {session ? (
            <>
              {
                session.user.acquiredUser.role == 1 ? (
                  <>
                    <div className="mt-6">
                      <RekapitulasiPeriodik />
                    </div>

                    <div className="mt-6">
                      <GrafikProduksiUsaha />
                    </div>

                    <div className="mt-6">
                      <GrafikHargaJual />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-6">
                      <RekapitulasiPeriodikAdm />
                    </div>

                    <div className="mt-6">
                      <GrafikProduksiUsahaAdm />
                    </div>

                    <div className="mt-6">
                      <GrafikHargaJualAdm />
                    </div>
                  </>
                )
              }
            </>
          ) : null}
        </>

      </div>

    </Page>
  );
}
