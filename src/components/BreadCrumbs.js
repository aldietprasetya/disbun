import React from 'react';
import CustomLink from './CustomLink';

const BreadCrumbs = ({ links, variant = '1' }) => {
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <CustomLink href="/">
          <img
            src={
              variant === '1'
                ? '/icon/home-icon.svg'
                : '/icon/home-icon-white.svg'
            }
            alt="home-icon"
            className="w-4"
          />
        </CustomLink>
      </div>
      {links?.map((link, index) => {
        return (
          <CustomLink key={link.path} href={link.path}>
            <div
              className={`mr-3 flex gap-3 ${
                variant === '1' ? 'text-[#9E9E9E]' : 'text-[#E0E0E0]'
              }`}
            >
              <img
                src={
                  variant === '1'
                    ? '/icon/arrow-right-icon.svg'
                    : '/icon/arrow-right-icon-light.svg'
                }
                alt="arrow-right"
                className="w-[6px]"
              />
              <div
                className={`${
                  index === links.length - 1 &&
                  `${variant === '1' ? 'text-primary-green' : 'text-[#E0E0E0]'}`
                }`}
              >
                {link.title}
              </div>
            </div>
          </CustomLink>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
