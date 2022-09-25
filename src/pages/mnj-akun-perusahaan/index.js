import React, { useCallback, useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import axiosInstance from 'src/lib/axios';
import MasterBasisData from 'src/components/pages/admin/mnjAkunPerusahaan/MasterBasisData';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import table from 'src/styles/Table.module.scss';
import eventBus from "src/state";

const Detail = ({ item }) => {
  function changeState(e) {
    if (e == 'Diajukan') {
      return <div className="bg-[#FEF6F6] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#EE5C52] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#EE5C52] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Ditunda') {
      return <div className="bg-[#FFF6E3] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#FCBD0F] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#FCBD0F] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Diterima') {
      return <div className="bg-[#ECF8F1] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#27AE60] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#27AE60] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
  }

  const closeDisplay = (item) => {
    eventBus.dispatch("detilApply", item);
  };

  let [dokumen, setDokumen] = useState([
    {title: 'Foto KTP Administratur/Manajer',link: '#'},
    {title: 'Surat Permohonan Pengajuan Akun',link: '#'},
  ])

  const handleClickAdmin = (item, dt) => {
    item.modalType = dt
    eventBus.dispatch("modalShow", item);
  };

  return (
    <div className="w-full fixed h-full block z-10 top-0 left-0 bg-black/[.4]">
      <div className="w-full h-full absolute z-10"></div>
      <div className="w-[480px] bg-white ml-auto h-full relative z-20 pl-6 pr-10 py-4 overflow-y-auto">
        <div className="flex border-b border-[#E9EDF5] pb-4">
          <div className="text-xl	font-semibold h-[48px] flex items-center">Detail</div>
          <img src="/icon/close.svg" className="w-6 ml-auto cursor-pointer" onClick={() => { closeDisplay(null) }}/>
        </div>
        <div className="border-b border-[#E9EDF5] py-4">
          <div className="text-[#3267E3]">Detail Pengajuan</div>
          <div className="flex mt-3">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Nama Perusahaan</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.perusahaan}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Nama Administratur</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.admin}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">{item.type == "PENGAJUAN AKUN PERUSAHAAN" ? 'Email Administratur' : 'Kota/Kab'}</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.trd}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">{item.type == "PENGAJUAN AKUN PERUSAHAAN" ? 'No. Telepon Administratur' : 'Username'}</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.frth}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">{item.type == "PENGAJUAN AKUN PERUSAHAAN" ? 'Waktu Pengajuan' : 'Terakhir Akses'}</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs ml-2 bg-[#E9EDF5] rounded px-[10px] h-[20px] flex items-center">
              {item.date}
            </span>
          </div>
        </div>
        {
          item.type == "PENGAJUAN AKUN PERUSAHAAN" ? (
            <div className="py-4">
              <div className="text-[#3267E3] mb-3">Dokumen Permohonan Pengajuan Akun</div>
              <table className={table.table}>
                <thead className={table.table__head}>
                  <tr className={table.table__head_row}>
                    <th className={`${table.table__head_col}`}>
                      DOKUMEN
                    </th>
                    <th className={`${table.table__head_col} text-center`}>
                      AKSI
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                  dokumen.map((items, i) => (
                    <tr key={i}>
                      <td className={`${table.table__body_col}`}>
                        {items.title}
                      </td>
                      <td className={`${table.table__body_col}`}>
                        <span className="text-xs text-[#038575] border rounded border-[#038575] block w-[102px] text-center py-1 mx-auto">Detail</span>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          ) : (
            <></>
          )
        }
        <div className="flex justify-between">
        {
          item.type == "PERUSAHAAN PERKEBUNAN" ? (
            <>
              <button onClick={() => handleClickAdmin(item, 'hapus')} className={`${"w-[96px] h-[48px] text-xs	text-white font-bold bg-gradient-to-b from-[#F66E6E] to-[#EB5757] mt-1 inline-flex items-center justify-center rounded"}`}>
                Hapus
              </button>
              <button onClick={() => handleClickAdmin(item, 'reset')} className={`${"w-[308px] h-[48px] text-xs	text-white font-bold bg-gradient-to-b from-[#119F90] to-[#048577] bg-gradient-to-b mt-1 inline-flex items-center justify-center rounded ml-3"}`}>
                Reset Password
              </button>
            </>
          ) : (
            <>
              <button onClick={() => handleClickAdmin(item, 'tolak')} className={`${"w-[96px] h-[48px] text-xs	text-white font-bold bg-gradient-to-b from-[#F66E6E] to-[#EB5757] mt-1 inline-flex items-center justify-center rounded"}`}>
                Tolak
              </button>
              <button onClick={() => handleClickAdmin(item, 'buat')} className={`${"w-[308px] h-[48px] text-xs	text-white font-bold bg-gradient-to-b from-[#119F90] to-[#048577] bg-gradient-to-b mt-1 inline-flex items-center justify-center rounded ml-3"}`}>
                Buat Akun Perusahaan
              </button>
            </>
          )
        }
        </div>
      </div>
    </div>
  );
};

const Modal = ({ item }) => {
  const closeModal = (item) => {
    eventBus.dispatch("modalShow", item);
  };

  const [typePassword, setTypePassword] = useState({
    mainPassword: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState({
    mainPassword: '',
    confirmPassword: '',
  });
  const [valid, setValid] = useState(false);
  const [passLowerCaseCheck, setPassLowerCaseCheck] = useState(false);
  const [passUpperCaseCheck, setUpperCaseCheck] = useState(false);
  const [passNumberCheck, setPassNumberCheck] = useState(false);
  const [passCharCheck, setPassCharCheck] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    let valPass1 = password.mainPassword
    let valPass2 = password.confirmPassword

    valPass1.length < 9 ? setPassCharCheck(false) : setPassCharCheck(true)

    valPass1.search(/[a-z]/) < 0 ? setPassLowerCaseCheck(false) : setPassLowerCaseCheck(true)

    valPass1.search(/[A-Z]/) < 0 ? setUpperCaseCheck(false) : setUpperCaseCheck(true)

    valPass1.search(/[0-9]/) < 0 ? setPassNumberCheck(false) : setPassNumberCheck(true)

    if ((valPass1 === valPass2) && valPass1 != '' && valPass2 != '') {
      if (passLowerCaseCheck && passUpperCaseCheck && passNumberCheck && passCharCheck) {
        setValid(true)
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

  function resetPassword() {
    setResetSuccess(true)
  }

  return (
    <>
      <div className="fixed z-20 overflow-y-auto top-0 w-full left-0">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[675px]" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="px-4 py-5 border-b border-[#E9EDF5] flex">
              <span className="font-semibold text-[#4F4F4F] leading-5">Hapus Akun Perusahaan</span>
              <img src="/icon/close.svg" className="w-6 ml-auto cursor-pointer" onClick={() => { closeModal(null) }}/>
            </div>
            <div className="bg-white px-4 px-4 sm:p-4 sm:pb-4">
              {
                resetSuccess ? (
                  <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3">
                    <div className="flex items-center">
                      <img src="/icon/info-circle.svg" className="w-6" />
                      <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                        Perhatian!
                      </div>
                    </div>
                    <div className="px-8 text-xs">
                      Akun <b>Perusahaan A</b> berhasil dibuat dengan: <br/>
                      Username : <b>ptkebuna</b> <br/>
                      Password : <b>Password123</b> <br/>
                      Silakan tangkap layar berikut untuk memberikan rincian akun kepada Perusahaan yang bersangkutan secara manual/kovensional melalui email/no. telepon Administratur.
                    </div>
                  </div>
                ) : (
                  <>
                  {
                    item.modalType == 'reset' ? (
                      <>
                      <div className="mb-2">
                        <div className="mb-2 text-xs font-semibold">
                          Masukan Kata Sandi baru anda<span className="text-red-400">*</span>
                        </div>
                        <div className="flex items-center justify-between rounded bg-[#F7F7F7] border-[#EDEDED] pr-3 ">
                          <input
                            name="password"
                            type={typePassword.mainPassword ? 'text' : 'password'}
                            onChange={(event) => handleChange(event, 'mainPassword')}
                            values={password.mainPassword}
                            placeholder="Masukan password anda"
                            className="h-[48px] placeholder:text-sm placeholder:font-normal border-transparent focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4"
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
                        <div className="flex items-center justify-between rounded bg-[#F7F7F7] border-[#EDEDED] pr-3 ">
                          <input
                            name="password"
                            type={typePassword.confirmPassword ? 'text' : 'password'}
                            onChange={(event) => handleChange(event, 'confirmPassword')}
                            values={password.confirmPassword}
                            placeholder="Masukan password anda"
                            className="h-[48px] placeholder:text-sm placeholder:font-normal border-transparent focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4"
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
                      </>
                    ) : (
                      <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3">
                        <div className="flex items-center">
                          <img src="/icon/info-circle.svg" className="w-6" />
                          <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                            Perhatian!
                          </div>
                        </div>
                        {
                          item.modalType == 'hapus' ? (
                            <div className="px-8 text-xs">
                              Apakah Anda yakin untuk menghapus Akun Perusahaan A? Hapus Akun artinya menghilangkan selamanya seluruh data dan informasi akun tersebut dari Sistem Aplikasi Lampion Kebun.
                            </div>
                          ) : item.modalType == 'buat' ? (
                            <div className="px-8 text-xs">
                              Akun <b>Perusahaan A</b> berhasil dibuat dengan: <br/>
                              Username : <b>ptkebuna</b> <br/>
                              Password : <b>Password123</b> <br/>
                              Silakan tangkap layar berikut untuk memberikan rincian akun kepada Perusahaan yang bersangkutan secara manual/kovensional melalui email/no. telepon Administratur.
                            </div>
                          ) : (
                            <div className="px-8 text-xs">
                              Apakah Anda yakin untuk menolak pengajuan Akun Perusahaan A? Penolakan pengajuan artinya menghapus data dan dokumen dari Sistem Aplikasi Lampion Kebun. Admin Aplikasi Lampion Kebun wajib menyampaikan informasi penolakan dan pengajuan ulang secara manual/konvensional pada Perusahaan yang bersangkutan.
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                  </>
                )
              }
            </div>
            <div className="px-4 py-6 text-center">
              {
                resetSuccess ? (
                  <button onClick={() => { closeModal(null) }} className={`${"w-[180px] h-[48px] text-sm	text-white font-bold bg-gradient-to-b from-[#119F90] to-[#048577] mt-1 inline-flex items-center justify-center rounded"}`}>
                    Tutup
                  </button>
                ) : (
                  <>
                  {
                    item.modalType == 'reset' ? (
                      <>
                        <button onClick={() => { closeModal(null) }} className={`${"w-[103px] h-[48px] text-sm mr-4 text-[#4F4F4F] font-bold bg-[#F8F7FA] mt-1 inline-flex items-center justify-center rounded"}`}>
                          Batal
                        </button>
                        <button onClick={() => { resetPassword() }} className={`${"w-[180px] h-[48px] text-sm	text-white font-bold bg-gradient-to-b from-[#119F90] to-[#048577] mt-1 inline-flex items-center justify-center rounded"}`}>
                          Simpan Password
                        </button>
                      </>
                    ) : item.modalType == 'buat' ? (
                      <>
                        <button onClick={() => { closeModal(null) }} className={`${"w-[180px] h-[48px] text-sm	text-white font-bold bg-gradient-to-b from-[#F66E6E] to-[#EB5757] mt-1 inline-flex items-center justify-center rounded"}`}>
                          Tutup
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => { closeModal(null) }} className={`${"w-[103px] h-[48px] text-sm mr-4 text-[#4F4F4F] font-bold bg-[#F8F7FA] mt-1 inline-flex items-center justify-center rounded"}`}>
                          Batal
                        </button>
                        <button onClick={() => { closeModal(null) }} className={`${"w-[180px] h-[48px] text-sm	text-white font-bold bg-gradient-to-b from-[#F66E6E] to-[#EB5757] mt-1 inline-flex items-center justify-center rounded"}`}>
                          {item.modalType == 'hapus' ? 'Hapus Akun' : 'Hapus Pengajuan'}
                        </button>
                      </>
                    )
                  }
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const cards = [
  {
    title: 'Jumlah Perusahaan',
    value: '21',
    icon: '/images/master/card/icon/jumlah perusahaan.svg',
    bannerImage: '/images/master/card/icon/jumlah perusahaan bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah Kebun',
    value: '12',
    icon: '/images/master/card/icon/jumlah kebun.svg',
    bannerImage: '/images/master/card/icon/jumlah kebun bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBN',
    value: '6',
    icon: '/images/master/card/icon/jumlah pbn.svg',
    bannerImage: '/images/master/card/icon/jumlah pbn bg.svg',
    infosImg: '/images/master/card/icon/infos.svg',
  },
  {
    title: 'Jumlah PBS',
    value: '9',
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

const ManajemenAkunPerusahaan = () => {
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [dataDtwControl, setDataDtwControl] = useState(null);
  const [dataMeta, setDataMeta] = useState();
  const [searchField, setSearchField] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [limit, setLimit] = useState(10);
  const [dataItem, setDataItem] = useState(null);
  const [modalItem, setModalItem] = useState(null);

  if (session) {
    if (session.user.acquiredUser.role !== 3) {
      router.push({
        pathname: "/beranda"
      })
    }
  }

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const handleNextPage = () => {
    if (dataMeta.page * dataMeta.limit <= dataMeta.total) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (dataMeta.page !== 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    eventBus.on("detilApply", (data) => {
      setDataItem(data);
    });
    return function cleanup () {
      eventBus.remove("detilApply");
    }
  },[])

  useEffect(() => {
    eventBus.on("modalShow", (data) => {
      setModalItem(data);
    });
    return function cleanup () {
      eventBus.remove("modalShow");
    }
  },[])

  const closeDisplay = (dt) => {
    console.log(dt);
  };

  const closeModal = (dt) => {
    console.log(dt);
  };

  return (
    <>
      <Page sidebar={false} backdrop adminMode>

        <div className="mx-10 lg:mx-10  ">

          <div className="mt-2">
            <BreadCrumbs
              variant="0"
              links={[
                {
                  path: '/mnj-akun-perusahaan',
                  title: 'Manajemen Akun Perusahaan',
                },
              ]}
            />
            <div className="text-[32px] font-normal text-white leading-9 mt-4">Admin PPUP Disbun Jabar</div>
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

          <div className="mt-6">
            <MasterBasisData/>
          </div>

        </div>

      </Page>
      {
        modalItem != null ? (
          <Modal item={modalItem} closeModal={closeModal}/>
        ) : (
          <></>
        )
      }
      {
        dataItem != null ? (
          <Detail item={dataItem} closeDisplay={closeDisplay}/>
        ) : (
          <></>
        )
      }
    </>
  );
};

export default ManajemenAkunPerusahaan;
