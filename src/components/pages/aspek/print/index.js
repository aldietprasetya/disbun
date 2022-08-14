import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import mng from '../../../../styles/Managemen.module.scss'

export const ComponentToPrint = React.forwardRef((props, ref) => {

  const [currentDateYear, setCurrentDateYear] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [periodMonthId, setPeriodMonthId] = useState('');
  const [periodYearId, setPeriodYearId] = useState('');
  const [centerAddress, setCenterAddress] = useState('');
  const [centerPhone, setCenterPhone] = useState('');
  const [centerFax, setCenterFax] = useState('');
  const [representativeAddress, setRepresentativeAddress] = useState('');
  const [representativePhone, setRepresentativePhone] = useState('');
  const [representativeFax, setRepresentativeFax] = useState('');
  const [gardenAddress, setGardenAddress] = useState('');
  const [gardenPhone, setGardenPhone] = useState('');
  const [gardenFax, setGardenFax] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [gardenName, setGardenName] = useState('');
  const [factoryName, setFactoryName] = useState('');
  const [cityId, setCityId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [villageId, setVillageId] = useState('');
  const [legalitas, setLegalitas] = useState([])
  const [izin, setIzin] = useState([])



  const [komisaris, setKomisaris] = useState([])
  const [direksi, setDireksi] = useState([])
  const [administrasi, setAdministrasi] = useState('')
  const [tenagaKerja, setTenagaKerja] = useState([])
  const [rencanaInvest, setRencanaInvest] = useState([])



  const [tanaman, setTanaman] = useState([])
  const [bibit, setBibit] = useState([])
  const [kebun, setKebun] = useState([])
  const [emplasmen, setEmplasmen] = useState([])
  const [jalanJembatan, setJalanJembatan] = useState([])
  const [cadangan, setCadangan] = useState([])
  const [konservasi, setKonservasi] = useState([])
  const [tmd, setTmd] = useState([])
  const [sawah, setSawah] = useState([])
  const [pihakKetiga, setPihakKetiga] = useState([])
  const [lainnya, setLainnya] = useState([])
  const [topografi, setTopografi] = useState([])
  const [tanamBaru, setTanamBaru] = useState([])
  const [komposisi, setKomposisi] = useState([])
  const [pemupukan, setPemupukan] = useState([])
  const [hamaKendali, setHamaKendali] = useState([])
  const [disertifikasi, setDisertifikasi] = useState([])
  const [produksiProduktivitas, setProduksiProduktivitas] = useState([])


  const [jenisKapasitas, setJenisKapasitas] = useState([])
  const [bahanBaku, setBahanBaku] = useState([])
  const [pemasaran, setPemasaran] = useState([])
  const [mutu, setMutu] = useState([])


  const [pajakRestribusi, setPajakRestribusi] = useState([])
  const [kawasanLindung, setKawasanLindung] = useState([])
  const [konservasiSos, setKonservasiSos] = useState([])
  const [pengawasan, setPengawasan] = useState([])
  const [kemitraan, setKemitraan] = useState([])


  useEffect(() => {
    let retrievedObject = JSON.parse(localStorage.getItem('manajementReport'));

    setAdministrasi(retrievedObject.administrasi)
    setKomisaris(retrievedObject.komisaris)
    setDireksi(retrievedObject.direksi)

    let jml = 0;
    retrievedObject.tenagaKerja.forEach((item, i) => {
      jml += Number(item.value)
    });
    retrievedObject.tenagaKerja.push({
      'title':'Jumlah','value':jml
    })

    setTenagaKerja(retrievedObject.tenagaKerja)
    setRencanaInvest(retrievedObject.rencanaInvest)


    let retrievedObjectGeneral = JSON.parse(localStorage.getItem('generalReport'));

    setCompanyName(retrievedObjectGeneral.companyName)
    setPeriodMonthId(retrievedObjectGeneral.periodMonthId.value)
    setPeriodYearId(retrievedObjectGeneral.periodYearId.value)
    setCenterAddress(retrievedObjectGeneral.centerAddress)
    setCenterPhone(retrievedObjectGeneral.centerPhone)
    setCenterFax(retrievedObjectGeneral.centerFax)
    setRepresentativeAddress(retrievedObjectGeneral.representativeAddress)
    setRepresentativePhone(retrievedObjectGeneral.representativePhone)
    setRepresentativeFax(retrievedObjectGeneral.representativeFax)
    setGardenAddress(retrievedObjectGeneral.gardenAddress)
    setGardenPhone(retrievedObjectGeneral.gardenPhone)
    setGardenFax(retrievedObjectGeneral.gardenFax)
    setLatitude(retrievedObjectGeneral.latitude)
    setLongitude(retrievedObjectGeneral.longitude)
    setGardenName(retrievedObjectGeneral.gardenName)
    setFactoryName(retrievedObjectGeneral.factoryName)
    setCityId(retrievedObjectGeneral.cityId.value)
    setDistrictId(retrievedObjectGeneral.districtId.value)
    setVillageId(retrievedObjectGeneral.villageId.value)
    setLegalitas(retrievedObjectGeneral.legalities)
    setIzin(retrievedObjectGeneral.iup)


    let retrievedObjectGarden = JSON.parse(localStorage.getItem('KebunReport'));

    setTanaman(retrievedObjectGarden.plant)
    setBibit(retrievedObjectGarden.seed)
    setKebun(retrievedObjectGarden.sprout)
    setEmplasmen(retrievedObjectGarden.emplacement)
    setJalanJembatan(retrievedObjectGarden.road)
    setCadangan(retrievedObjectGarden.backupArea)
    setKonservasi(retrievedObjectGarden.conservationArea)
    setTmd(retrievedObjectGarden.tmd)
    setSawah(retrievedObjectGarden.riceField)
    setPihakKetiga(retrievedObjectGarden.thirdParty)
    setLainnya(retrievedObjectGarden.other)
    setTopografi(retrievedObjectGarden.topography)
    setTanamBaru(retrievedObjectGarden.newPlanting)
    setKomposisi(retrievedObjectGarden.composition)
    setPemupukan(retrievedObjectGarden.fertilization)
    setHamaKendali(retrievedObjectGarden.pestControl)
    setDisertifikasi(retrievedObjectGarden.diversification)
    setProduksiProduktivitas(retrievedObjectGarden.productivity)


    let retrievedObjectOlah = JSON.parse(localStorage.getItem('dataSubmitOlah'));

    setJenisKapasitas(retrievedObjectOlah.capacity)
    setBahanBaku(retrievedObjectOlah.material)
    setPemasaran(retrievedObjectOlah.marketing)
    setMutu(retrievedObjectOlah.quality)


    let retrievedObjectSosial = JSON.parse(localStorage.getItem('dataSubmitSosial'));

    setPajakRestribusi(retrievedObjectSosial.retribution)
    setKawasanLindung(retrievedObjectSosial.protectedArea)
    setKonservasiSos(retrievedObjectSosial.conservation)
    setPengawasan(retrievedObjectSosial.environmentalMonitoring)
    setKemitraan(retrievedObjectSosial.businessPartnership)


    const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

    const d = new Date();

    setCurrentDateYear(month[d.getMonth()] + " " + d.getFullYear())
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={mng.base} ref={ref}>

        <p className="text-center font-bold text-lg">"LAPORAN BULANAN PERKEBUNAN"</p>
        <p className="text-center font-bold text-lg">{companyName}</p>
        <p className="text-center font-bold text-lg mb-8">Bulan : {currentDateYear}</p>

        <div className={mng.base__print}>

          <h1 className={mng.base__print_title}>A. ASPEK UMUM</h1>
          <ol className="pl-[10px]">

            <li className="ml-[30px] list-[lower-alpha] mt-2">Umum</li>

            <ol className={mng.base__print_list}>
              <li><span className="inline-block w-[256px]">Nama Perusahaan</span>:<span className="ml-[28px]">{companyName}</span></li>

              <li>Alamat Perusahaan</li>

              <ol className={mng.base__print_sublist}>
                <li>Kantor Pusat</li>
                  <ul className={mng.base__print_suberlist}>
                    <li><span>Alamat</span>:<span>{centerAddress}</span></li>
                    <li><span>Telp/Fax</span>:<span>{centerPhone}/{centerFax}</span></li>
                  </ul>
                <li>Kantor Perwakilan</li>
                  <ul className={mng.base__print_suberlist}>
                    <li><span>Alamat</span>:<span>{representativeAddress}</span></li>
                    <li><span>Telp/Fax</span>:<span>{representativePhone}/{representativeFax}</span></li>
                  </ul>
                <li>Kantor Kebun</li>
                  <ul className={mng.base__print_suberlist}>
                    <li><span>Alamat</span>:<span>{gardenAddress}</span></li>
                    <li><span>Telp/Fax</span>:<span>{setGardenFax}/{gardenFax}</span></li>
                    <li><span>Koordinat</span>:<span>{latitude}, {longitude}</span></li>
                  </ul>
                <li className="list-none">
                  <span className="-ml-[15px] mr-[15px]">Nama Kebun</span>:<span>{gardenName}</span>
                </li>
                <li className="list-none">
                  <span className="-ml-[15px] mr-[15px]">Nama Pabrik</span>:<span>{factoryName}</span>
                </li>

              </ol>

              <li>Lokasi Kebun</li>

              <ol className={mng.base__print_sublist}>
                <li>
                  <span>Desa</span>:<span>{villageId.value}</span>
                </li>
                <li>
                  <span>Kecamatan</span>:<span>{districtId.value}</span>
                </li>
                <li>
                  <span>Kabupaten</span>:<span>{cityId.value}</span>
                </li>
              </ol>

              <li>Lingkup Usaha</li>

              <ol className={mng.base__print_sublist}>
                <li>
                  <span>Budidaya/Komoditi</span>:<span>-</span>
                </li>
                <li>
                  <span>Pengolahan</span>:<span>-</span>
                </li>
                <li>
                  <span>Integrasi</span>:<span>-</span>
                </li>
              </ol>
            </ol>

            <li className="ml-[30px] list-[lower-alpha] mt-2">Legalitas</li>

            <div className="ml-[14px] mt-2">
              <li className="list-none">Hak Guna Usaha (HGU)</li>

              <table className="border w-full mt-2">
                <tr>
                  <th>No</th>
                  <th>Nama Persil</th>
                  <th>No dan Tanggal SK HGU</th>
                  <th>No dan Tanggal Sertifikat HGU</th>
                  <th>Tanggal Expirasi</th>
                  <th>Luas Lahan</th>
                  <th>Komoditas</th>
                  <th>Ket.</th>
                </tr>

                  {
                    legalitas == undefined ?
                    <tr></tr>
                    :
                    legalitas.map((item,i) => (
                      <tr>
                        <td>{i+1}</td>
                        <td>{item[0].value}</td>
                        <td>{item[1].value} ({item[2].value})</td>
                        <td>{item[3].value} ({item[4].value})</td>
                        <td>{item[6].value}</td>
                        <td>{item[5].value} Ha</td>
                        <td>{item[7].value}</td>
                        <td>{item[8].value}</td>
                      </tr>
                    ))
                  }

              </table>
            </div>

            <div className="ml-[14px] mt-2">
              <li className="list-none">Izin Usaha Perkebunan (IUP)</li>

              <table className="border w-full mt-2">
                <tr>
                  <th>No</th>
                  <th>Jenis IUP</th>
                  <th>Nomor</th>
                  <th>Tanggal</th>
                  <th>Pejabat Yang Menetapkan</th>
                  <th>Luas Lahan</th>
                  <th>Komoditas</th>
                  <th>Ket.</th>
                </tr>

                {
                  izin == undefined ?
                  <tr></tr>
                  :
                  izin.map((item,i) => (
                    <tr>
                      <td>{i+1}</td>
                      <td>{item[0].value}</td>
                      <td>{item[1].value}</td>
                      <td>{item[2].value}</td>
                      <td>{item[4].value}</td>
                      <td>{item[3].value}</td>
                      <td>{item[5].value}</td>
                      <td>{item[6].value}</td>
                    </tr>
                  ))
                }

              </table>
            </div>

          </ol>

        </div>


        <div className={mng.base__print}>

          <h1 className={mng.base__print_title}>B. ASPEK MANAJEMEN</h1>
          <ol className={mng.base__print_list}>

            <li>Struktur Organisasi dan Nama Pengelola</li>

            <ol className={mng.base__print_sublist}>
              <li>Susunan Komisaris</li>
                <ul className={mng.base__print_suberlist}>
                  {
                    komisaris == undefined ?
                    <>
                    <li><span>Komisaris Utama</span>:<span></span></li>
                    <li><span>Komisaris</span>:<span></span></li>
                    <li><span>Komisaris</span>:<span></span></li>
                    </>
                    :
                    komisaris.map((item,i) => (
                      <li key={i}>
                        <span>{item.title}</span>
                        :
                        <span>{item.value}</span>
                      </li>
                    ))
                  }
                </ul>
              <li>Susunan Direksi</li>
                <ul className={mng.base__print_suberlist}>
                  {
                    direksi == undefined ?
                    <>
                    <li><span>Direktur Utama</span>:<span></span></li>
                    <li><span>Direktur</span>:<span></span></li>
                    <li><span>Direktur</span>:<span></span></li>
                    </>
                    :
                    direksi.map((item,i) => (
                      <li key={i}>
                        <span>{item.title}</span>
                        :
                        <span>{item.value}</span>
                      </li>
                    ))
                  }
                </ul>
              <li>
                <span>Administratur/Manajer</span>
                {
                  administrasi == undefined ?
                  <>:<span></span></>
                  :
                  <>:<span>{administrasi}</span></>
                }
              </li>
              <li>Tenaga Kerja</li>
                <ul className={mng.base__print_suberlist}>
                {
                  tenagaKerja == undefined ?
                  <>
                  <li><span>Administratur</span>:<span></span>Orang</li>
                  <li><span>Staf</span>:<span></span>Orang</li>
                  <li><span>Bulanan</span>:<span></span>Orang</li>
                  <li><span>Harian Tetap</span>:<span></span>Orang</li>
                  <li><span>Harian Lepas</span>:<span></span>Orang</li>
                  <li><span>Borongan/Musiman</span>:<span></span>Orang</li>
                  <li><span>Jumlah</span>:<span></span>Orang</li>
                  </>
                  :
                  tenagaKerja.map((item,i) => (
                    <li key={i}>
                      <span>{item.title}</span>
                      :
                      <span>{item.value}</span>
                      Orang
                    </li>
                  ))
                }
                </ul>
            </ol>

            <li>Rencana Investasi/Eksploitasi</li>

            <ol className={mng.base__print_sublist}>

            {
              rencanaInvest == undefined ?
              <>
              <li>
                <ul>
                  <li><span>Kegiatan Investasi/Eksploitasi</span>:<span></span></li>
                  <li><span>Tahun</span>:<span></span></li>
                  <li><span>Volume</span>:<span></span></li>
                  <li><span>Nilai Biaya</span>:<span></span></li>
                </ul>
              </li>
              </>
              :
              rencanaInvest.map((items,i) => (
                <li key={i}>
                  <ul>
                    {
                      items.map((item,ii) => (
                        <li key={ii}><span>{item.title}</span>:<span>{item.value}</span></li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }

            </ol>



          </ol>

        </div>


        <div className={mng.base__print}>

          <h1 className={mng.base__print_title}>C. ASPEK KEBUN</h1>
          <ol className={mng.base__print_list}>

            <li>Pemanfaatan Lahan HGU</li>
            <table className="border w-full mt-2">
              <tr>
                <th className='px-[40px]'>Uraian</th>
                <th>Kec/Desa <br/> <span className='text-xs font-light'>Pangalengan/Sukaluyu</span> <br/> (Ha)</th>
                <th>Kec/Desa <br/> <span className='text-xs font-light'>Talegong/Sukalaksana</span> <br/> (Ha)</th>
                <th>Kec/Desa <br/> ………… <br/> (Ha)</th>
                <th>Kec/Desa <br/> ………… <br/> (Ha)</th>
                <th>Jumlah (Ha)</th>
                <th>Ket.</th>
              </tr>

              <tr>1. Tanaman</tr>
              {
                tanaman == undefined ?
                <tr></tr>
                :
                tanaman.map((item,i) => (
                  <tr>
                    <td className='px-[40px]'>{item[0].value}</td>
                    <td>{item[1].value.value}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{item[2].value}</td>
                    <td>{item[3].value}</td>
                  </tr>
                ))
              }

            </table>

          </ol>

        </div>

        <div className={mng.base__print}>

          <h1 className={mng.base__print_title}>D. ASPEK PENGOLAHAN</h1>
          <ol className={mng.base__print_list}>

            <li>Jenis dan Kapasitas</li>
            <table className="border w-full mt-2">
              <tr>
                <th>Jenis UPH</th>
                <th>Jumlah (Unit)</th>
                <th>Luas Bangunan (M2)</th>
                <th>Terpasang (Kg/Hari)</th>
                <th>Terpakai (Kg/Hari)</th>
                <th>Ket.</th>
              </tr>

              {
                jenisKapasitas == undefined ?
                <tr></tr>
                :
                jenisKapasitas.map((item,i) => (
                  <tr>
                    <td>{item.uphType}</td>
                    <td>{item.total}</td>
                    <td>{item.buildingArea}</td>
                    <td>{item.installed}</td>
                    <td>{item.used}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Sumber Bahan Baku</li>
            <table className="border w-full mt-2">
              <tr>
                <th>Jenis UPH</th>
                <th>Kabupaten</th>
                <th>Volume</th>
                <th>Keterangan</th>
              </tr>

              {
                bahanBaku == undefined ?
                <tr></tr>
                :
                bahanBaku.map((item,i) => (
                  <tr>
                    <td>{item.uphType}</td>
                    <td>{item.cityId.value}</td>
                    <td>{item.volume}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Jenis Mutu Akhir</li>
            <table className="border w-full mt-2">
              <tr>
                <th>Jenis UPH</th>
                <th>Sendiri</th>
                <th>Kebun Seinduk</th>
                <th>Beli</th>
                <th>Jumlah</th>
                <th>Jenis Mutu Akhir</th>
                <th>Volume Produksi</th>
              </tr>

              {
                mutu == undefined ?
                <tr></tr>
                :
                mutu.map((item,i) => (
                  <tr>
                    <td>{item.uphType}</td>
                    <td>{item.selfMaterial}</td>
                    <td>{item.internalMaterial}</td>
                    <td>{item.broughtMaterial}</td>
                    <td>-</td>
                    <td>{item.processingResult[0].qualityType}</td>
                    <td>{item.processingResult[0].volume}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Pemasaran</li>
            <table className="border w-full mt-2">
              <tr>
                <th>No</th>
                <th>Komoditas</th>
                <th>Lokal/Ekspor</th>
                <th>Jenis Mutu</th>
                <th>Biaya Prod./Kg</th>
                <th>Harga Jual/Kg</th>
                <th>Ket.</th>
              </tr>

              {
                pemasaran == undefined ?
                <tr></tr>
                :
                pemasaran.map((item,i) => (
                  <tr>
                    <td>{i+1}</td>
                    <td>{item.comodity}</td>
                    <td>{item.targetMarketId.value}</td>
                    <td>{item.qualityType}</td>
                    <td>{item.cost}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

          </ol>

        </div>


        <div className={mng.base__print}>

          <h1 className={mng.base__print_title}>E. ASPEK SOSIAL EKONOMI DAN LINGKUNGAN</h1>
          <ol className={mng.base__print_list}>

            <li>Pajak dan Retribusi</li>
            <table className="border w-full mt-2">
              <tr>
                <th>No</th>
                <th>Jenis Pajak/Retribusi</th>
                <th>Nilai (Rp)</th>
                <th>Ket.</th>
              </tr>

              {
                pajakRestribusi == undefined ?
                <tr></tr>
                :
                pajakRestribusi.map((item,i) => (
                  <tr>
                    <td>{i+1}</td>
                    <td>{item.retributionType}</td>
                    <td>{item.value}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Kawasan Lindung (Hutan Lindung, Sungai, Danau, dsb.)</li>
            <ul>
              <li>Luas Kawasan Lindung {kawasanLindung.area}</li>
              <li><span className='w-[180px] inline-block'>Dikelola Sejak Tahun</span>:<span className='ml-2'>{kawasanLindung.year}</span></li>
              <li><span className='w-[180px] inline-block'>Usaha Pelestarian</span>:<span className='ml-2'>{kawasanLindung.effort}</span></li>
            </ul>

            <li className="mt-4">Konservasi</li>
            <table className="border w-full mt-2">
              <tr>
                <th>Luas Lahan Kritis (Ha)</th>
                <th>Jenis Kegiatan</th>
                <th>Luas</th>
                <th>Ket.</th>
              </tr>

              {
                konservasiSos == undefined ?
                <tr></tr>
                :
                konservasiSos.map((item,i) => (
                  <tr>
                    <td>-</td>
                    <td>{item.conservationType}</td>
                    <td>{item.area}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Pengawasan Lingkungan</li>
            <table className="border w-full mt-2">
              <tr>
                <th>Masalah Lingkungan</th>
                <th>Waktu Kejadian</th>
                <th>Frekuensi (Kali)</th>
                <th>Upaya Penyelesaian</th>
                <th>Ket.</th>
              </tr>

              {
                pengawasan == undefined ?
                <tr></tr>
                :
                pengawasan.map((item,i) => (
                  <tr>
                    <td>{item.problem}</td>
                    <td>{item.dateOccurency}</td>
                    <td>{item.frequency}</td>
                    <td>{item.effort}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              }

            </table>

            <li className="mt-4">Kemitraan Usaha Dengan Petani Perkebunan Rakyat</li>
            <table className="border w-full mt-2">
              <tr>
                <th>No</th>
                <th>Kelompok Tani</th>
                <th>Nomor</th>
                <th>Tanggal</th>
                <th>Lamanya Perjanjian</th>
                <th>Jenis Perjanjian</th>
              </tr>

              {
                kemitraan == undefined ?
                <tr></tr>
                :
                kemitraan.map((item,i) => (
                  <tr>
                    <td>{i+1}</td>
                    <td>{item.groupName}</td>
                    <td>{item.agreementNumber}</td>
                    <td>{item.agreementDate}</td>
                    <td>{item.duration}</td>
                    <td>{item.agreementType}</td>
                  </tr>
                ))
              }

            </table>


          </ol>

          <p className="text-center font-bold text-lg mt-8">{companyName}</p>

        </div>

      </div>
    </>
  )
});
