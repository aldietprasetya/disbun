import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import CustomLink from 'src/components/CustomLink';
import Page from 'src/components/Page';

const links = [
  {
    title: 'Pelaporan',
    title2: 'Perkebunan',
    icon: '/images/card/Pelaporan-Perkebunan-icon.svg',
    bannerImage: 'bg-[url(/images/card/pelaporan.jpg)]',
    path: '/user/pelaporan-perkebunan',
  },
  {
    title: 'Penilaian',
    title2: 'Perkebunan',
    icon: '/images/card/Penilaian-Perkebunan-icon.svg',
    bannerImage: 'bg-[url(/images/card/penilaian.jpg)]',
    path: '/user/penilaian-perkebunan',
  },
];

const Card = ({ title, title2, icon, bannerImage, href }) => {
  return (
    <Link href={href}>
      <div
        className={`relative z-10 h-[480px] 2xl:h-[570px] w-[48%] cursor-pointer
          rounded-lg ${bannerImage} from-black bg-cover shadow-md
          transition-all before:absolute before:-z-10 before:h-full
          before:w-full before:rounded-lg before:bg-gradient-to-t before:via-transparent before:content-[''] hover:h-[495px] hover:2xl:h-[585px] hover:w-[49%] hover:shadow-lg
        `}
      >
        <div className="flex h-full flex-col items-center justify-end pb-[54px]">
          <img src={icon} className="w-15 " />
          <div className="relative mt-3 w-[60%] text-center text-xl font-semibold">
            <CustomLink href={href}>
              <div>{title}</div>
              <div>{title2}</div>
            </CustomLink>
          </div>
        </div>
      </div>
    </Link>

  );
};
const options = {
  position: 'top-left',
  style: {
    backgroundColor: 'midnightblue',
    border: '2px solid lightgreen',
    color: 'lightblue',
    fontSize: '20px',
    textAlign: 'center',
  },
  closeStyle: {
    color: 'lightcoral',
  },
};
export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    if (session.user.acquiredUser.role !== 1) {
      router.push({
        pathname: "/infografis"
      })
    }
  }

  return (
    <Page sidebar={false} backdrop>
      <div className="mx-10 lg:mx-10  ">
        <div className="text-white ">
          <div className="text-4xl font-semibold">Selamat Datang</div>
          <div className="mt-[2px] text-md font-light">
            Silahkan pilih jenis pengajuan yang akan anda ajukan
          </div>
          <div className="mt-10 flex justify-between px-20">
            {links.map((link, i) => {
              return (
                <Card
                  title={link.title}
                  title2={link.title2}
                  icon={link.icon}
                  bannerImage={link.bannerImage}
                  href={link.path}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
