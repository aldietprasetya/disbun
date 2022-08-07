import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { navListSidebarEditProfile } from 'src/components/sidebar/GroupLink';
import PengaturanAkun from 'src/components/pages/profile/PengaturanAkun';

const PengaturanAkunPage = () => {
  return (
    <Page sidebar navListSidebar={navListSidebarEditProfile} sidebarWithIcon>
      <div className="w-full">
        <BreadCrumbs
          links={[
            { path: '/profile', title: 'Edit Profile' },
            { path: '/profile/pengaturan-akun', title: 'Pengaturan akun' },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Pengaturan Akun</div>
        <div className="mt-10 w-[50%]">
          <PengaturanAkun />
        </div>
      </div>
    </Page>
  );
};

export default PengaturanAkunPage;
