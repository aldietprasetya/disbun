import { useState } from 'react';
import { navItemList } from './GroupLink';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const NavItem = ({
  title,
  icon,
  iconActive,
  isActive,
  handleChangePath,
  stickyBot,
  show,
}) => {
  return (
    <div
      onClick={handleChangePath}
      className={`${
        isActive &&
        'border-l-4 border-primary-green bg-[#038575]/10 text-primary-green'
      } ${
        !show && 'hidden'
      } mb-2 flex cursor-pointer items-center gap-3 py-4 px-6 font-medium text-[#9E9E9E]`}
    >
      <img src={isActive ? iconActive : icon} className="w-[26px]" />
      <div className="">{title}</div>
    </div>
  );
};

const NavItemWithPercentage = ({
  title,
  order,
  isActive,
  handleChangePath,
  percentage,
  arrowRight,
  stickyBot,
}) => {
  return (
    <div
      onClick={handleChangePath}
      className={`${
        isActive
          ? ' border-primary-green bg-[#038575]/10 text-primary-green'
          : 'border-transparent'
      } mb-2 flex cursor-pointer items-center justify-between border-l-2  py-3 pr-6 pl-[22px] font-medium text-[#9E9E9E]`}
    >
      <div className="flex items-center gap-4">
        {(order && title != 'Konfirmasi') && (
          <div
            className={`${
              isActive ? 'bg-primary-green text-white' : 'bg-[#F5F5F5]'
            } flex h-5 w-5 items-center justify-center rounded-full  text-[10px]`}
          >
            {order}
          </div>
        )}
        <div className={`${
          isActive
            ? 'text-primary-green font-semibold'
            : 'border-transparent'
        } w-[160px]`}>{title}</div>
      </div>
      {percentage && <div className="text-[9px] text-[#3267E3]">(90%)</div>}
      {arrowRight && (
        <Icon
          icon="akar-icons:chevron-right"
          className={`${isActive && 'text-primary-green'} text-lg`}
        />
      )}
    </div>
  );
};

const Sidebar = ({
  navList,
  icon,
  onePage,
  isActive,
  handleChangePath,
  isActiveConfirm,
  handleChangePathConfirm,
  roleId,
}) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex h-[540px] w-[280px] mr-[2px] flex-col items-center border-r bg-white py-4">
      <div className="relative h-full w-full flex flex-col">
        {onePage ? (
          <>
            {navList?.map((list, index) => {
              return (
                <NavItemWithPercentage
                  key={index}
                  title={list.title}
                  order={index + 1}
                  isActive={isActive === index}
                  handleChangePath={() => handleChangePath(index)}
                  percentage={false}
                />
              );
            })}
          </>
        ) : (
          <>
            {icon ? (
              <>
                {navList?.map((list) => {
                  return (
                    <NavItem
                      key={list.title}
                      title={list.title}
                      icon={list.icon}
                      isActive={router.asPath.match(list.path)}
                      handleChangePath={() => router.push(list.path)}
                      iconActive={list.iconActive}
                      stickyBot={list.stickyBot}
                      show={list.isAdmin ? user?.roleId !== 1 : true}
                    />
                  );
                })}
              </>
            ) : (
              navList?.map((list, index) => {
                return (
                  <>
                    {list.stickyBot && <div className="flex-1"></div>}
                    <NavItemWithPercentage
                      key={index}
                      title={list.title}
                      order={index + 1}
                      isActive={router.asPath.match(list.path)}
                      handleChangePath={() => router.push(list.path)}
                      percentage={false}
                      stickyBot={list.stickyBot}
                      arrowRight={list.arrowRight}
                    />
                  </>
                );
              })
            )}
          </>
        )}

        {/* {onePage ? (
          <div className="absolute bottom-0 w-full">
            <NavItemWithPercentage
              title="Konfirmasi"
              isActive={isActiveConfirm}
              handleChangePath={() => handleChangePathConfirm()}
              arrowRight
            />
          </div>
        ) : (
          <>
            {!icon && (
              <div className="absolute bottom-0 w-full">
                <NavItemWithPercentage
                  title="Konfirmasi"
                  isActive={router.asPath.match(
                    '/element-dtw/buat-baru/konfirmsi',
                  )}
                  handleChangePath={() =>
                    router.push('/element-dtw/buat-baru/konfirmasi')
                  }
                  arrowRight
                />
              </div>
            )}
          </>
        )} */}
      </div>
    </div>
  );
};

export default Sidebar;
