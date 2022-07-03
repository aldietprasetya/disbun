import Head from 'next/head'
import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormKebun = () => {
  const [isError, setIsError] = useState(false);

  const [asalTanaman, setAsalTanaman] = useState('');
  const [bersertifikat, setBersertifikat] = useState('');

  const setAsalOption = (e) => {
    setAsalTanaman(e)
  }

  const setSertifikatOption = (e) => {
    setBersertifikat(e)
  }

  ////////////////////////// TANAMAN IMPOR ////////////////////////////////

  const [negaraTanaman, setNegaraTanaman] = useState(0);
  const [suratIjin, setSuratIjin] = useState(0);

  function administrasiChange(e) {
    setAdministrasi(e.target.value)
  }

  ////////////////////////// JENIS TANAMAN ////////////////////////////////

  const [tanaman, setTanaman] = useState([
    [
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddTanaman() {
    setTanaman([...tanaman,...tanaman])
  }

  function tanamanRemoveLabel(i) {
    setTanaman(tanaman.filter((item, idx) => idx != i))
  }

  function tanamanChange(e, index, index2) {
    let stet = tanaman
    let set = setTanaman
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// JENIS PEMANFAATAN KEBUN ////////////////////////////////

  const [pemanfaatanKebun, setPemanfaatanKebun] = useState([
    [
      {'title':'Jenis pemanfaatan kebun','type':'text','placeholder':'masukkan jenis pemanfaatan kebun','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddPemanfaatanKebun() {
    setPemanfaatanKebun([...pemanfaatanKebun,...pemanfaatanKebun])
  }

  function pemanfaatanKebunRemoveLabel(i) {
    setPemanfaatanKebun(pemanfaatanKebun.filter((item, idx) => idx != i))
  }

  function pemanfaatanKebunChange(e, index, index2) {
    let stet = pemanfaatanKebun
    let set = setPemanfaatanKebun
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// JENIS PEMANFAATAN BANGUNAN ////////////////////////////////

  const [pemanfaatanBangunan, setPemanfaatanBangunan] = useState([
    [
      {'title':'Jenis pemanfaatan Tanah/Bangunan','type':'text','placeholder':'masukkan jenis pemanfaatan tanah','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddPemanfaatanBangunan() {
    setPemanfaatanBangunan([...pemanfaatanBangunan,...pemanfaatanBangunan])
  }

  function pemanfaatanBangunanRemoveLabel(i) {
    setPemanfaatanBangunan(pemanfaatanBangunan.filter((item, idx) => idx != i))
  }

  function pemanfaatanBangunanChange(e, index, index2) {
    let stet = pemanfaatanBangunan
    let set = setPemanfaatanBangunan
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// TANAH YANG BELUM DITANAMI ////////////////////////////////

  const [tanahBelumDitanami, setTanahBelumDitanami] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahBelumDitanamiChange(e, index) {
    addToRowChange(setTanahBelumDitanami, tanahBelumDitanami, e, index)
  }

  ////////////////////////// TANAH YANG TIDAK DAPAT DITANAMI ////////////////////////////////

  const [tanahTidakDapatDitanami, setTanahTidakDapatDitanami] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahTidakDapatDitanamiChange(e, index) {
    addToRowChange(setTanahTidakDapatDitanami, tanahTidakDapatDitanami, e, index)
  }

  ////////////////////////// TANAH GARAPAN ////////////////////////////////

  const [tanahGarapan, setTanahGarapan] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahGarapanChange(e, index) {
    addToRowChange(setTanahGarapan, tanahGarapan, e, index)
  }

  ////////////////////////// TANAH INSTANSI LAIN ////////////////////////////////

  const [tanahInstansi, setTanahInstansi] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahInstansiChange(e, index) {
    addToRowChange(setTanahInstansi, tanahInstansi, e, index)
  }

  ////////////////////////// KESERAGAMAN TANAMAN ////////////////////////////////

  const [seragamTanam, setSeragamTanam] = useState([
    [
      {
        'sectionTitle': 'Tanaman selain Tebu',
        'sectionData': [{'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TBM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TT/TR',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ],
  ])

  function handleBtnAddSeragamTanaman() {
    setSeragamTanam([...seragamTanam,[
      {
        'sectionTitle': 'Tanaman selain Tebu',
        'sectionData': [{'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TBM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TT/TR',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ]])
  }

  function seragamTanamRemoveLabel(i) {
    setSeragamTanam(seragamTanam.filter((item, idx) => idx != i))
  }

  function seragamTanamChange(e, index, index2, index3) {
    let stet = seragamTanam
    let set = setSeragamTanam
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            console.log(item2)
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// TANAMAN TEBU ////////////////////////////////

  const [tanamanTebu, setTanamanTebu] = useState([
    [
      {
        'sectionTitle': 'Komposisi Plant Care',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Ratoon',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ],
  ])

  function tanamanTebuChange(e, index, index2, index3) {
    let stet = tanamanTebu
    let set = setTanamanTebu
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KESERAGAMAN TANAMAN ////////////////////////////////

  const [komoditas, setKomoditas] = useState([
    [
      {
        'sectionTitle': 'Kerapatan tanaman (tanaman tahunan)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 0-3 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 4-8 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 9-16 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 17-25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur >25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
    ],
  ])

  function handleBtnAddKomoditas() {
    setKomoditas([...komoditas,...komoditas])
  }

  function komoditasRemoveLabel(i) {
    setKomoditas(komoditas.filter((item, idx) => idx != i))
  }

  function komoditasChange(e, index, index2, index3) {
    let stet = komoditas
    let set = setKomoditas
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// TAHUN TANAM ////////////////////////////////

  const [tahunTanam, setTahunTanam] = useState([
    [
      {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      {'title':'Tahun tanam','placeholder':'YYY','type':'text','value':''},
      {'title':'TBM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TR (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
    ],
  ])

  function handleBtnAddTahunTanam() {
    setTahunTanam([...tahunTanam,...tahunTanam])
  }

  function tahunTanamRemoveLabel(i) {
    setTahunTanam(tahunTanam.filter((item, idx) => idx != i))
  }

  function tahunTanamChange(e, index, index2) {
    let stet = tahunTanam
    let set = setTahunTanam
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KOMODITAS PEMUPUKAN ////////////////////////////////

  const [sumberPupukOrg, setSumberPupukOrg] = useState('')

  function sumberPupukOrgChange(e) {
    setSumberPupukOrg(e.target.value)
  }

  const [pupukOrganik, setPupukOrganik] = useState('');

  const setPupukOrganikOption = (e) => {setKegPerlTanam(e)}

  const [komoditasPemupukan, setKomoditasPemupukan] = useState([
    [
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'TM/TBM/TT/PC/R','placeholder':'masukkan jenis','type':'text','value':''},
      {'title':'Jenis Pupuk','type':'text','placeholder':'masukkan jenis pupuk','value':''},
      {'title':'Dosis (kg/ha/th)','type':'text','placeholder':'masukkan dosis','value':''},
      {'title':'frekuensi/tahun','type':'text','placeholder':'masukkan frekuensi dalam satu tahun','value':''},
      {'title':'Waktu aplikasi (bulan)','type':'text','placeholder':'masukkan waktu dalam bulan','value':''},
    ],
  ])

  function handleBtnAddKomoditasPemupukan() {
    setKomoditasPemupukan([...komoditasPemupukan,...komoditasPemupukan])
  }

  function komoditasPemupukanRemoveLabel(i) {
    setKomoditasPemupukan(komoditasPemupukan.filter((item, idx) => idx != i))
  }

  function komoditasPemupukanChange(e, index, index2) {
    let stet = komoditasPemupukan
    let set = setKomoditasPemupukan
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KETERSEDIAAN PEMUPUKAN ////////////////////////////////

  const [pedomanPemupukan, setPedomanPemupukan] = useState('')

  function pedomanPemupukanChange(e) {
    setPedomanPemupukan(e.target.value)
  }

  const [pedomanPemupukanJelaskan, setPedomanPemupukanJelaskan] = useState('')

  function pedomanPemupukanJelaskanChange(e) {
    setPedomanPemupukanJelaskan(e.target.value)
  }

  const [komoditasKetersediaanPemupukan, setKomoditasKetersediaanPemupukan] = useState([
    [
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'Jenis','placeholder':'masukkan jenis TBM/TM dll','type':'text','value':''},
      {'title':'Dosis Anjuran','type':'text','placeholder':'masukkan dosis dalam kg/ha/th','value':''},
      {'title':'kebutuhan total per tahun','type':'text','placeholder':'masukkan total dalam ton','value':''},
      {'title':'Asal pupuk','type':'text','placeholder':'masukkan asal penerimaan pupuk','value':''},
      {'title':'ketersediaan','type':'text','placeholder':'masukkan keterangan sulit/mudah','value':''},
    ],
  ])

  function handleBtnAddKomoditasKetersediaanPemupukan() {
    setKomoditasKetersediaanPemupukan([...komoditasKetersediaanPemupukan,...komoditasKetersediaanPemupukan])
  }

  function komoditasKetersediaanPemupukanRemoveLabel(i) {
    setKomoditasKetersediaanPemupukan(komoditasKetersediaanPemupukan.filter((item, idx) => idx != i))
  }

  function komoditasKetersediaanPemupukanChange(e, index, index2) {
    let stet = komoditasKetersediaanPemupukan
    let set = setKomoditasKetersediaanPemupukan
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// PENGAMATAN OPT ////////////////////////////////

  const [sumberOpt, setSumberOpt] = useState('')

  function sumberOptChange(e) {
    setSumberOpt(e.target.value)
  }

  const [laksanaPengamatan, setLaksanaPengamatan] = useState('');
  const [detilLaksana, setDetilLaksana] = useState('');
  const [kendaliOpt, setKendaliOpt] = useState('');

  const setLaksanaPengamatanOption = (e) => {
    setLaksanaPengamatan(e)
  }
  const setKendaliOptOption = (e) => {
    setKendaliOpt(e)
  }
  const setDetilLaksanaOption = (e) => {
    setDetilLaksana(e)
  }

  const [orgPengganggu, setOrgPengganggu] = useState([
    [
      {'title':'Hama','type':'textarea','placeholder':'Jelaskan','value':''},
      {'title':'Penyakit','placeholder':'Jelaskan','type':'textarea','value':''},
      {'title':'Gulma','type':'textarea','placeholder':'Jelaskan','value':''},
    ],
  ])

  function orgPenggangguChange(e, index, index2) {
    let stet = orgPengganggu
    let set = setOrgPengganggu
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  const [komoditasOpt, setKomoditasOpt] = useState([
    [
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [
          {'title':'Luas Serangan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'jenis oPT','type':'text','placeholder':'masukkan jenis opt','value':''},
          {'title':'Luas serangan Ringan (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas serangan Berat (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas area pengendalian','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Cara','type':'text','placeholder':'masukkan keterangan cara','value':''},
          {'title':'Dosis','type':'text','placeholder':'masukkan dosis','value':''},
          {'title':'Hasil','type':'text','placeholder':'masukkan keterangan hasil','value':''},
        ]
      },
    ],
  ])

  function handleBtnAddKomoditasOpt() {
    setKomoditasOpt([...komoditasOpt,...komoditasOpt])
  }

  function komoditasOptRemoveLabel(i) {
    setKomoditasOpt(komoditasOpt.filter((item, idx) => idx != i))
  }

  function komoditasOptChange(e, index, index2, index3) {
    let stet = komoditasOpt
    let set = setKomoditasOpt
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// SDM PROTEKSI ////////////////////////////////

  const [jmlPerlTanamOpt, setJmlPerlTanamOpt] = useState('')

  function jmlPerlTanamOptChange(e) {setJmlPerlTanamOpt(e.target.value)}

  const [jmlPetugasPerlTanamOpt, setJmlPetugasPerlTanamOpt] = useState('')

  function jmlPetugasPerlTanamOptChange(e) {setJmlPetugasPerlTanamOpt(e.target.value)}

  const [jenisPelatOpt, setJenisPelatOpt] = useState('')

  function jenisPelatOptChange(e) {setJenisPelatOpt(e.target.value)}

  const [instansiLenggaraOpt, setInstansiLenggaraOpt] = useState('')

  function instansiLenggaraOptChange(e) {setInstansiLenggaraOpt(e.target.value)}

  const [jenisLaborOpt, setJenisLaborOpt] = useState('')

  function jenisLaborOptChange(e) {setJenisLaborOpt(e.target.value)}

  const [agensHayati, setAgensHayati] = useState('')

  function agensHayatiChange(e) {setAgensHayati(e.target.value)}

  const [jenisKimia, setJenisKimia] = useState('')

  function jenisKimiaChange(e) {setJenisKimia(e.target.value)}

  const [kegPerlTanam, setKegPerlTanam] = useState('');
  const [pelatPerlTanam, setPelatPerlTanam] = useState('');
  const [oprPerlTanam, setOprPerlTanam] = useState('');
  const [labPerlTanam, setLabPerlTanam] = useState('');
  const [agensOpt, setAgensOpt] = useState('');
  const [labAgensOpt, setLabAgensOpt] = useState('');
  const [labAgensFungsiOpt, setLabAgensFungsiOpt] = useState('');
  const [dangerKimia, setDangerKimia] = useState('');

  const setKegPerlTanamOption = (e) => {setKegPerlTanam(e)}
  const setPelatPerlTanamOption = (e) => {setPelatPerlTanam(e)}
  const setOprPerlTanamOption = (e) => {setOprPerlTanam(e)}
  const setLabPerlTanamOption = (e) => {setLabPerlTanam(e)}
  const setAgensOptOption = (e) => {setAgensOpt(e)}
  const setLabAgensOptOption = (e) => {setLabAgensOpt(e)}
  const setLabAgensFungsiOptOption = (e) => {setLabAgensFungsiOpt(e)}
  const setDangerKimiaOption = (e) => {setDangerKimia(e)}

  ////////////////////////// PRODUKSI & PRODUKTIVITAS ////////////////////////////////

  const [produksiProduktivitas, setProduksiProduktivitas] = useState([
    [
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Jenis Produk','placeholder':'masukkan jenis produk','type':'text','value':''},
      {'title':'Produksi tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
    ],
  ])

  function handleBtnAddProduksiProduktivitas() {
    setProduksiProduktivitas([...produksiProduktivitas,...produksiProduktivitas])
  }

  function produksiProduktivitasRemoveLabel(i) {
    setProduksiProduktivitas(produksiProduktivitas.filter((item, idx) => idx != i))
  }

  function produksiProduktivitasChange(e, index, index2) {
    let stet = produksiProduktivitas
    let set = setProduksiProduktivitas
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// DISERTIFIKASI CABANG USAHA TANI ////////////////////////////////

  const [disertifikasi, setDisertifikasi] = useState([
    [
      {
        'sectionTitle': 'Ternak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tambak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Lebah',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Sengon',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tanaman Pangan/Palawija',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hortikultura',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Agrowisata',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
    ],
  ])

  function handleBtnDisertifikasi() {
    setDisertifikasi([...disertifikasi,...disertifikasi])
  }

  function disertifikasiRemoveLabel(i) {
    setDisertifikasi(disertifikasi.filter((item, idx) => idx != i))
  }

  function disertifikasiChange(e, index, index2, index3) {
    let stet = disertifikasi
    let set = setDisertifikasi
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function addToRowChange(set, stet, e, index) {
    const { value } = e.target;
    const list = [...stet];

    list[index] = { ...list[index], value };
    set(list);
  }

  const [btnValid, setBtnValid] = useState(false)

  const storeData = preventDefault(() => {

  })

  function clearData() {

  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <span className={mng.base__subtitle}>Bahan Tanaman</span>

      <form>
        <div className={mng.base__formsection}>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Asal bahan tanaman</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bahan-tanaman"
                onClick={() => setAsalOption('import')}
                label="Import"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bahan-tanaman"
                onClick={() => setAsalOption('negeri')}
                label="Dalam Negeri"
              />
            </div>
          </label>
          {asalTanaman == 'import' ? (
            <>
              <div className="mt-6 mb-2 text-sm font-semibold text-black">
                Apabila impor, dari mana asal negaranya?
              </div>
              <div className="grid w-full grid-cols-2 gap-2">
                <InputForm
                  titleForm="Negara Asal"
                  titleName="email"
                  // onChange={handleChange}
                  type="text"
                  // values={values.email}
                  placeholder="Pilih Negara Asal"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
                <InputForm
                  titleForm="Nomor Surat Ijin"
                  titleName="email"
                  // onChange={handleChange}
                  type="text"
                  // values={values.email}
                  placeholder="masukan nomor surat ijin impor"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-sm`}
                  iconEmail={true}
                />
              </div>
            </>
          ) : asalTanaman == 'negeri' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Apabila dari dalam negeri. dari mana sumber benihnya?"
                titleName="email"
                // onChange={handleChange}
                type="text"
                // values={values.email}
                placeholder="masukkan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) :
            <></>
          }
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah bahan tanaman bersertifikat?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikat"
                onClick={() => setSertifikatOption('ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikat"
                onClick={() => setSertifikatOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {bersertifikat == 'ya' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Dari mana sertifikat diperoleh?"
                titleName="email"
                // onChange={handleChange}
                type="text"
                // values={values.email}
                placeholder="masukkan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-6 text-black placeholder:text-base`}
                iconEmail={true}
              />
            </div>
          ) : <></>}
        </div>

        <span className={mng.base__subtitle}>Pemanfaatan Lahan</span>

        <div className={mng.base__formsection}>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Luas sesuai HGU atau HGU dalam proses pemberian,
              perpanjangan/pembaharuan
            </div>
          </div>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Tanah yang digunakan untuk tanaman dan sarana pendukung</p>
          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Areal  yang ditanami</p>
          <p className={mng.base__formtitle}>Tanaman</p>

          <div className="flex flex-col">
            {
              tanaman.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => tanamanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanamanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Kebun Pembibitan/Persemaian/Entrys</p>

          <div className="flex flex-col">
            {
              pemanfaatanKebun.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pemanfaatanKebunRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pemanfaatanKebunChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPemanfaatanKebun}>
            + Tambah Data Jenis Pemanfaatan Kebun
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Tanah/Bangunan</p>

          <div className="flex flex-col">
            {
              pemanfaatanBangunan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pemanfaatanBangunanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pemanfaatanBangunanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPemanfaatanBangunan}>
            + Tambah Data Jenis Pemanfaatan Kebun
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold mt-6"}`}>Tanah yang belum ditanami</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahBelumDitanami.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahBelumDitanamiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Tanah yang tidak dapat ditanami</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahTidakDapatDitanami.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahTidakDapatDitanamiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>Penggunaan Lain</p>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Tanah garapan rakyat</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahGarapan.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahGarapanChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Dipakai instansi lain</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahInstansi.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahInstansiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Keragaman Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>Komposisi tanaman tahun terakhir sebelum penilaian usaha perkebunan saat ini</p>

          <div className="flex flex-col">
            {
              seragamTanam.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => seragamTanamRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => seragamTanamChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>

          <div className={mng.base__btn} onClick={handleBtnAddSeragamTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-6"}`}>Khusus untuk tanaman Tebu</p>

          <div className="flex flex-col">
            {
              tanamanTebu.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => tanamanTebuChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className="flex flex-col">
            {
              komoditas.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => komoditasRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique1-sec"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]} ${mng["base__formlabel_unique1-label-4"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => komoditasChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddKomoditas}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-6"}`}>Tahun Tanam</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Luas areal menurut tahun tanam</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Luas sesuai HGU atau HGU dalam proses pemberian,
              perpanjangan/pembaharuan
            </div>
          </div>

          <div className="flex flex-col mt-3">
            {
              tahunTanam.map((items, i) => (
                <div className={`${mng["base__formlabel_unique2"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => tahunTanamRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tahunTanamChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTahunTanam}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Pemeliharaan Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pemupukan (yang dilakukan tahun terakhir sebelum penilaian usaha perkebunan saat ini)</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pupuk Organik</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah sudah menggunakan pupuk organik?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pupukOrganik"
                onClick={() => setPupukOrganik('sudah')}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pupukOrganik"
                onClick={() => setPupukOrganik('belum')}
                label="Belum"
              />
            </div>
          </label>
          {pupukOrganik == 'sudah' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Sebutkan sumbernya"
                titleName="email"
                onChange={(e) => sumberPupukOrgChange(e)}
                type="text"
                placeholder="berikan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pelaksanaan pemupukan</p>

          <div className="flex flex-col">
            {
              komoditasPemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => komoditasPemupukanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => komoditasPemupukanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]} ${'mb-6'}`} onClick={handleBtnAddKomoditasPemupukan}>
            + Tambah Data Komoditas
          </div>

          <InputForm
            titleForm="Sumber pedoman pemupukan yang dipakai"
            onChange={(e) => pedomanPemupukanChange(e)}
            type="text"
            // values={values.email}
            placeholder="pilih yang sesuai"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
            selectionArea={true}
          />

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Jelaskan</span>
            <input type="text" placeholder="Jelaskan" className={mng.base__inputbase} onChange={(e) => pedomanPemupukanJelaskanChange(e)}/>
          </label>

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Kebutuhan dan ketersediaan pupuk di lokasi kebun</p>

          <div className="flex flex-col">
            {
              komoditasKetersediaanPemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => komoditasKetersediaanPemupukanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => komoditasKetersediaanPemupukanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]} ${'mb-6'}`} onClick={handleBtnAddKomoditasKetersediaanPemupukan}>
            + Tambah Data Komoditas
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Penerapan Pengendalian Hama Terpadu (PHT)</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pengamatan OPT</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilaksanakan pengamatan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="laksanaPengamatan"
                onClick={() => setLaksanaPengamatanOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="laksanaPengamatan"
                onClick={() => setLaksanaPengamatanOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {laksanaPengamatan == 'iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Bagaimana pelaksanaannya?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="detilLaksana"
                    onClick={() => setDetilLaksanaOption('Secara Periodik')}
                    label="Secara Periodik"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="detilLaksana"
                    onClick={() => setDetilLaksanaOption('Secara Insidentil')}
                    label="Secara Insidentil"
                  />
                </div>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Jenis Organisme Pengganggu</p>

          <div className="flex flex-col">
            {
              orgPengganggu.map((items, i) => (
                <div className={`flex`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_tris"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => orgPenggangguChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilaksanakan pengendalian OPT?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kendaliOpt"
                onClick={() => setKendaliOptOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kendaliOpt"
                onClick={() => setKendaliOptOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kendaliOpt == 'iya' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Sebutkan sumbernya"
                titleName="Sebutkan sumbernya"
                onChange={(e) => sumberOptChange(e)}
                type="text"
                placeholder="berikan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <div className="flex flex-col">
            {
              komoditasOpt.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => komoditasOptRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique1-firstfull"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => komoditasOptChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>

          <div className={`${mng["base__btn"]} mb-6`} onClick={handleBtnAddKomoditasOpt}>
            + Tambah Data Komoditas
          </div>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki bagian yang bertanggungjawab terhadap kegiatan perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kegPerlTanam"
                onClick={() => setKegPerlTanamOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kegPerlTanam"
                onClick={() => setKegPerlTanamOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kegPerlTanam == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="Berapa jumlahnya?"
                titleName="Berapa jumlahnya?"
                onChange={(e) => jmlPerlTanamOptChange(e)}
                type="text"
                placeholder="masukkan jumlah bagian"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah sudah ada petugas yang pernah mengikuti pelatihan perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatPerlTanam"
                onClick={() => setPelatPerlTanamOption('Sudah')}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatPerlTanam"
                onClick={() => setPelatPerlTanamOption('Belum')}
                label="Belum"
              />
            </div>
          </label>
          {pelatPerlTanam == 'Sudah' ? (
            <>
            <div className="mt-3">
              <InputForm
                titleForm="Berapa jumlah petugas yang pernah mengikuti pelatihan perlindungan tanaman?"
                titleName="Berapa jumlah petugas yang pernah mengikuti pelatihan perlindungan tanaman?"
                onChange={(e) => jmlPetugasPerlTanamOptChange(e)}
                type="text"
                placeholder="masukkan keterangan jumlah petugas"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            <div className="mt-3">
              <InputForm
                titleForm="Apa jenis pelatihannya?"
                titleName="Apa jenis pelatihannya?"
                onChange={(e) => jenisPelatOptChange(e)}
                type="text"
                placeholder="masukkan keterangan jenis pelatihan"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            <div className="mt-3">
              <InputForm
                titleForm="Sebutkan Instansi Penyelenggara"
                titleName="Sebutkan Instansi Penyelenggara"
                onChange={(e) => instansiLenggaraOptChange(e)}
                type="text"
                placeholder="masukkan keterangan instansi"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            </>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Sarana Operasional Proteksi Tanaman</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki peralatan operasional perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="oprPerlTanam"
                onClick={() => setOprPerlTanamOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="oprPerlTanam"
                onClick={() => setOprPerlTanamOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {oprPerlTanam == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="sebutkan jenis alat dan jumlahnya"
                titleName="sebutkan jenis alat dan jumlahnya"
                onChange={(e) => jmlPerlTanamOptChange(e)}
                type="text"
                placeholder="masukkan keteangan jenis alat dan jumlah"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki peralatan laboratorium perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labPerlTanam"
                onClick={() => setLabPerlTanamOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labPerlTanamv"
                onClick={() => setLabPerlTanamOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {labPerlTanam == 'iya' ? (
            <div className="mt-4">
              <InputForm
                titleForm="Sebutkan jenis laboratorium yang dimiliki"
                titleName="Sebutkan jenis laboratorium yang dimiliki"
                onChange={(e) => jenisLaborOptChange(e)}
                type="text"
                placeholder="masukkan jenis laboratorium"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Bahan Pengendalian OPT (Organisme Pengganggu Tumbuhan)</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menggunakan agens hayati untuk pengedalian OPT?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="agensOpt"
                onClick={() => setAgensOptOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="agensOpt"
                onClick={() => setAgensOptOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {agensOpt == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="Sebutkan jenis dan jumlah agens hayati yang telah digunakan"
                titleName="Sebutkan jenis dan jumlah agens hayati yang telah digunakan"
                onChange={(e) => agensHayatiChange(e)}
                type="text"
                placeholder="masukkan keterangan jenis dan jumlah"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki laboratorium agens hayati?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labAgensOpt"
                onClick={() => setLabAgensOptOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labAgensOpt"
                onClick={() => setLabAgensOptOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {labAgensOpt == 'iya' ? (
            <label className={mng.base__formlabel}>
              <span className={mng.base__inputtitle}>Apabila iya, apakah berfungsi?</span>
              <div className="inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="labAgensFungsiOpt"
                  onClick={() => setLabAgensFungsiOptOption('Berfungsi')}
                  label="Berfungsi"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="labAgensFungsiOpt"
                  onClick={() => setLabAgensFungsiOptOption('Tidak')}
                  label="Tidak"
                />
              </div>
            </label>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menggunakan bahan kimia pertanian yang tergolong berbahaya? (tipe 1A/1B WHO, dll)</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="dangerKimia"
                onClick={() => setDangerKimiaOption('iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="dangerKimia"
                onClick={() => setDangerKimiaOption('tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {dangerKimia == 'iya' ? (
            <div className="mt-4">
              <InputForm
                titleForm="Sebutkan jenis bahan kimia yang digunakan"
                titleName="Sebutkan jenis bahan kimia yang digunakan"
                onChange={(e) => jenisKimiaChange(e)}
                type="text"
                placeholder="masukkan keterangan jenis bahan kimia"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Produksi dan Produktivitas 3 tahun terakhir</span>
          <div className="flex flex-col mt-3">
            {
              produksiProduktivitas.map((items, i) => (
                <div className={`${mng["base__formlabel_unique2"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => produksiProduktivitasRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => produksiProduktivitasChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddProduksiProduktivitas}>
            + Tambah Data Jenis Tanaman
          </div>
        </div>

        <div className={`${mng["base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Diversifikasi Cabang Usaha Tani</span>
          <div className="flex flex-col">
            {
              disertifikasi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => disertifikasiRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`flex`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => disertifikasiChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>

          <div className={mng.base__btn} onClick={handleBtnDisertifikasi}>
            + Tambah Data Jenis Cabang Usaha Tani
          </div>
        </div>

        <div className='flex justify-end items-center mt-9 pt-0.5'>
          {/*
            <div className={`${mng["base__btnclear"]} ${"mt-1"}`} onClick={clearData}>
              <span className="ml-1.5">Clear data</span>
            </div>
          */}

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};

export default FormKebun;
