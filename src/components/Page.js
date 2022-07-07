import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import StickyBox from "react-sticky-box";
import Head from 'next/head';

const Page = ({
  children,
  sidebar = true,
  backdrop,
  navListSidebar,
  sidebarWithIcon,
  sidebarOnePage,
  onChangeSidebar,
  isActiveSidebar,
  isActiveConfirmPage,
  onChangeSidebarConfirm,
  backdropHeight = 'h-[50%]',
  isInfografis,
}) => {
  return (
    <div className="relative h-screen overflow-x-hidden  bg-gray-100 ">
      <Head>
        <title>Dinas Pekebunan</title>
        <meta name="description" content="ini test dashboard" />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <Navbar backdrop={isInfografis ? false : true} />
      <div className="relative flex bg-gray-100">
        <div
          className={`${
            backdrop ? 'block' : 'hidden'
          } fixed z-0 w-full h-[340px] ${backdropHeight}`}
        >
          <img
            src="/images/background-page.png"
            className="h-full w-full object-cover"
          />
        </div>
        {sidebar ? (
          <div className="container mx-20 mt-[100px] mb-5 flex justify-between min-h-[85vh] text-sm mx-auto flex items-start">
            <StickyBox offsetTop={100}>
              <Sidebar
                navList={navListSidebar}
                icon={sidebarWithIcon}
                onePage={sidebarOnePage}
                handleChangePath={onChangeSidebar}
                isActive={isActiveSidebar}
                isActiveConfirm={isActiveConfirmPage}
                handleChangePathConfirm={onChangeSidebarConfirm}
              />
            </StickyBox>
            <div className="w-[calc(100%-280px)] flex min-h-full bg-white px-10 py-6 ml-auto">
              {children}
            </div>
          </div>
        ) : (
          <div
            className={`container mx-auto ${
              backdrop ? 'z-[1] my-[96px]' : 'pt-[90px]'
            } flex-1 text-sm`}
          >
            {children}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
