import React from 'react';

const login = () => {
  return (
    <div className='bg-[url("/images/login-background.png")] bg-no-repeat bg-cover min-h-[100vh] flex items-center justify-center'>
      <div className="bg-white w-96 min-h-[35rem] rounded-md p-6 flex flex-col justify-start items-center">
        <img src="/images/logo-dispar.svg" alt="logo-dispar" className="w-18" />
        <div className="w-full mt-8">
          <div className="text-lg font-semibold">Masuk!</div>
          <div className="text-sm text-[#818282]">
            Masukan email dan kata sandi Anda
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="text-sm">Email</div>
          <input
            type="text"
            placeholder="Masukan Email"
            className="border rounded p-2 w-full mt-2 placeholder:text-sm"
          />
        </div>
        <div className="w-full mt-4">
          <div className="text-sm">Kata Sandi</div>
          <input
            type="password"
            placeholder="Masukan Password"
            className="border rounded p-2 w-full mt-2 placeholder:text-sm"
          />
        </div>
        <div className="w-full mt-4 flex items-center gap-2">
          <input type="checkbox" className="checked:bg-[#048577]" />
          <div className="text-sm">Remember me</div>
        </div>
        <div className="w-full mt-5">
          <button className="text-xs bg-[#048577] w-full p-3 text-white rounded">
            Masuk Sekarang
          </button>
        </div>
        <div className="w-full mt-6 flex flex-col items-center relative">
          <div className="text-xs text-[#868686] bg-white z-10 px-4">Atau</div>
          <div className="border w-full absolute bottom-2" />
        </div>
        <div className="w-full mt-4 flex justify-center">
          <div className="text-xs text-[#868686]">
            Belum memiliki akun? Daftar{' '}
            <span className="text-[#048577] cursor-pointer">disini</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
