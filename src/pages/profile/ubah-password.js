import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { Icon } from '@iconify/react';
import { navListSidebarEditProfile } from 'src/components/sidebar/GroupLink';

const UbahPasswordPage = () => {
  const [typePassword, setTypePassword] = useState({
    prevPassword: false,
    mainPassword: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState({
    prevPassword: '',
    mainPassword: '',
    confirmPassword: '',
  });
  const [valid, setValid] = useState(false);
  const [passLowerCaseCheck, setPassLowerCaseCheck] = useState(false);
  const [passUpperCaseCheck, setUpperCaseCheck] = useState(false);
  const [passNumberCheck, setPassNumberCheck] = useState(false);
  const [passCharCheck, setPassCharCheck] = useState(false);

  useEffect(() => {
    let valPass1 = password.mainPassword
    let valPass2 = password.confirmPassword
    let valPass3 = password.prevPassword

    valPass1.length < 9 ? setPassCharCheck(false) : setPassCharCheck(true)

    valPass1.search(/[a-z]/) < 0 ? setPassLowerCaseCheck(false) : setPassLowerCaseCheck(true)

    valPass1.search(/[A-Z]/) < 0 ? setUpperCaseCheck(false) : setUpperCaseCheck(true)

    valPass1.search(/[0-9]/) < 0 ? setPassNumberCheck(false) : setPassNumberCheck(true)

    if ((valPass1 === valPass2) && valPass1 != '' && valPass2 != '') {
      if (passLowerCaseCheck && passUpperCaseCheck && passNumberCheck && passCharCheck) {
        if (valPass3 != '') {
          setValid(true)
        } else {
          setValid(false)
        }
      }
    } else {
      setValid(false)
    }
  },[password])

  function handleChange(e, type) {
    const { name, value } = e.target;
    setPassword(prevState => ({
      ...prevState,
      [type]: value
    }));
  }

  return (
    <Page sidebar navListSidebar={navListSidebarEditProfile} sidebarWithIcon>
      <div className="w-full">
        <BreadCrumbs
          links={[
            { path: '/profile', title: 'Edit Profile' },
            { path: '/profile/ubah-password', title: 'Ubah Password' },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Ubah Password</div>
        <div className="mt-10 w-[50%] border-b border-[#EDEDED]">
          <div className="mb-6">
            <div className="mb-2 text-xs font-semibold">
              Kata Sandi Sekarang<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                type={typePassword.prevPassword ? 'text' : 'password'}
                onChange={(event) => handleChange(event, 'prevPassword')}
                values={password.prevPassword}
                placeholder="Masukan Kata Sandi anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    prevPassword: !typePassword.prevPassword,
                  })
                }
                icon={
                  typePassword.prevPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 w-[50%]">
          <div className="mb-2">
            <div className="mb-2 text-xs font-semibold">
              Masukan Kata Sandi baru anda<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                type={typePassword.mainPassword ? 'text' : 'password'}
                onChange={(event) => handleChange(event, 'mainPassword')}
                values={password.mainPassword}
                placeholder="Masukan password anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    mainPassword: !typePassword.mainPassword,
                  })
                }
                icon={
                  typePassword.mainPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
          <div className={'text-sm mt-2'}>
            <p className={'text-[#616161]'}>Kata sandi harus berisi berikut ini:</p>
            <ul className={'list-disc pl-5 text-[#9E9E9E]'}>
              <li className={`${passLowerCaseCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter huruf kecil</li>
              <li className={`${passUpperCaseCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter huruf besar</li>
              <li className={`${passNumberCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter angka</li>
              <li className={`${passCharCheck && 'text-primary-green font-bold'} pt-2 transition`}>Minimal 8 karakter</li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold">
              Konfirmasi kata sandi anda<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                type={typePassword.confirmPassword ? 'text' : 'password'}
                onChange={(event) => handleChange(event, 'confirmPassword')}
                values={password.confirmPassword}
                placeholder="Masukan password anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    confirmPassword: !typePassword.confirmPassword,
                  })
                }
                icon={
                  typePassword.confirmPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="w-32 rounded-md bg-primary-green p-2 text-sm text-white disabled:bg-[#D5DBDA]"
              disabled={!valid}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default UbahPasswordPage;
