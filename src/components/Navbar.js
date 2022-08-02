/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import CustomLink from './CustomLink';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const links = [
  {
    title: 'Beranda',
    path: '/',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
  },
  {
    title: 'Infografis',
    path: '/admin/infografis',
    icon: '/icon/web-icon.svg',
    isAdmin: true,
  },
  {
    title: 'Master Basis Data',
    path: '/admin/master-basis-data',
    icon: '/icon/web-icon.svg',
    isAdmin: true,
  },
];

function logout() {
  alert('logout')
}

const ProfileDropDown = ({ open, handleLogout }) => {
  return (
    <div
      className={`${
        open ? 'block' : 'hidden'
      } absolute -bottom-28 w-full rounded bg-white p-3 text-black shadow-lg`}
    >
      <CustomLink href="/profile/pengaturan-akun">
        <div className="mb-4 flex cursor-pointer items-center gap-3">
          <Icon icon="fa-solid:user-edit" className="w-4 text-[#9E9E9E]" />
          <div className="text-xs">Edit Profile</div>
        </div>
      </CustomLink>
      <CustomLink href="/riwayat-anda">
        <div className="mb-4 flex cursor-pointer items-center gap-3">
          <Icon icon="gg:notes" className="w-4 text-[#9E9E9E]" />
          <div className="text-xs">Riwayat Anda</div>
        </div>
      </CustomLink>
      <div
        onClick={handleLogout}
        className=" flex cursor-pointer items-center gap-3 text-[#CB3A31]"
      >
        <Icon icon="majesticons:logout" className="w-4 rotate-180" />
        <div className="text-xs">Keluar</div>
      </div>
    </div>
  );
};

const NavItem = ({ isActive, icon, title, href, isAdmin }) => {
  return (
    <CustomLink href={href}>
      <div
        className={`flex items-center gap-3 rounded-md  px-3 py-2 backdrop-grayscale-0 hover:bg-white/30 ${
          isActive && 'bg-white/30 backdrop-grayscale-0'
        }`}
      >
        <img src={icon} alt="icon-grafik" />
        <div className="text-sm">{title}</div>
      </div>
    </CustomLink>
  );
};

const Navbar = ({ backdrop }) => {
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dummyUser, setDummyUser] = useState(true);

  return (
    <div
      className={`${
        backdrop ? 'bg-transparent text-white' : 'bg-white shadow-sm'
      } fixed z-10 w-full`}
    >
      <div className="container mx-auto flex h-20 justify-between px-10">
        <div className="flex items-center gap-10">
          <CustomLink href={'/'}>
            {dummyUser == true ? (
              <img
                src="/images/logo/lampion-kebun-logo.svg"
                alt="logo-disbun"
                className="w-full"
              />
            ) : (
              <img
                src="/images/logo/lampion-kebun-logo-2.svg"
                alt="logo-disbun"
                className="w-full"
              />
            )}
          </CustomLink>

          {backdrop && (
            <>
              {/*  {user?.roleId === 3 || user?.roleId === 2 ? ( */}
              {dummyUser == true ? (
                <div className="flex gap-2">
                  {links.map((link) => {
                    return (
                      <NavItem
                        key={link.path}
                        title={link.title}
                        href={link.path}
                        icon={link.icon}
                        isActive={router.asPath == link.path}
                      />
                    );
                  })}
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className="relative flex items-center gap-3">
          <div
            onClick={() => setDropDownOpen(!dropDownOpen)}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="relative h-8 w-8">
              <Image
                src={
                  '/icon/default-profile-picture.svg'
                }
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="mr-3">
              <div
                className={`${
                  backdrop ? 'text-white' : 'text-primary-green'
                } text-sm`}
              >
                {/* {user?.name} */}
                {'PT. Perkebunan Nusantara VIII'}
              </div>
              <div
                className={`${
                  backdrop ? 'text-white' : 'text-[#A5A5A5]'
                } text-xs font-light`}
              >
                {/* {user?.email?.length > 15
                  ? `${user?.email.slice(0, 15)}...`
                  : user?.email} */}
                {'angelia@email.com'}
              </div>
            </div>
            <Icon
              icon="bx:chevron-down"
              className={`${dropDownOpen && 'rotate-180'} ${
                backdrop ? 'text-white' : 'text-[#A5A5A5]'
              } text-2xl transition`}
            />
          </div>
          <ProfileDropDown
            open={dropDownOpen}
            handleLogout={() => logout()}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
