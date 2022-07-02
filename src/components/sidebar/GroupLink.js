export const navItemList = [
  {
    id: 0,
    title: 'Koleksi DTW',
    isExpand: false,
    path: '/manajemen-basis-data/koleksi-dtw',
  },
  {
    id: 1,
    title: 'Monev DTW',
    isExpand: true,
    path: '/manajemen-basis-data/monev-dtw',
    subNavList: [
      {
        title: 'Survey Awal',
        path: '/manajemen-basis-data/monev-dtw/survey-awal',
        id: 'surveyAwal',
      },
      {
        title: 'Survey Harian',
        path: '/manajemen-basis-data/monev-dtw/survey-harian',
        id: 'surveyHarian',
      },
      {
        title: 'Survey CHSE',
        path: '/manajemen-basis-data/monev-dtw/survey-chse',
        id: 'surveyChse',
      },
    ],
  },
  {
    id: 2,
    title: 'Rencana Investasi',
    isExpand: false,
    path: '/manajemen-basis-data/rencana-investasi',
  },
  {
    id: 3,
    title: 'Pengajuan',
    isExpand: true,
    path: '/manajemen-basis-data/pengajuan',
    subNavList: [
      {
        title: 'Perubahan Data',
        path: '/manajemen-basis-data/pengajuan/perubahan-data',
        id: 'perubahanData',
      },
      {
        title: 'DTW Baru',
        path: '/manajemen-basis-data/pengajuan/dtw-baru',
        id: 'dtwBaru',
      },
    ],
  },
  {
    id: 4,
    title: 'Master Database',
    isExpand: false,
    path: '/manajemen-basis-data/master-database',
  },
];

export const navListElementDTW = [
  {
    title: 'Informasi Umum',
    path: '/element-dtw/buat-baru/informasi-umum',
  },
  {
    title: 'Atraksi',
    path: '/element-dtw/buat-baru/atraksi',
  },
  {
    title: 'Aksebilitas',
    path: '/element-dtw/buat-baru/aksebilitas',
  },
  {
    title: 'Amenitas & Fasilitas',
    path: '/element-dtw/buat-baru/amenitas-fasilitas',
  },
  {
    title: 'Lain-lain',
    path: '/element-dtw/buat-baru/lain-lain',
  },
];

export const navListRencanaPembangunan = [
  {
    title: 'Pembangunan',
    path: '/rencana-pengembangan/buat-baru/pembangunan',
  },
  {
    title: 'Investasi',
    path: '/rencana-pengembangan/buat-baru/investasi',
  },
  {
    title: 'Dokumen Penunjang',
    path: '/rencana-pengembangan/buat-baru/dokumen-penunjang',
  },
];

export const navListSidebarEditProfile = [
  {
    icon: '/icon/pengaturan-akun-icon-white.svg',
    iconActive: '/icon/pengaturan-akun-icon-green.svg',
    title: 'Pengaturan Akun',
    path: '/profile/pengaturan-akun',
  },
  {
    icon: '/icon/password-icon-white.svg',
    iconActive: '/icon/password-icon-green.svg',
    title: 'Ubah Password',
    path: '/profile/ubah-password',
  },
  // {
  //   icon: '/icon/kapasitas-dtw-icon-white.svg',
  //   iconActive: '/icon/kapasitas-dtw-icon-green.svg',
  //   title: 'Kapasitas DTW',
  //   path: '/profile/admin/kapasitas-dtw',
  //   isAdmin: true,
  // },
];

export const navList = [
  {
    title: 'Aspek Umum',
    path: '/pelaporan-perkebunan/aspek-umum',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: true,
  },
  {
    title: 'Aspek Manajemen',
    path: '/pelaporan-perkebunan/aspek-manajemen',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: true,
  },
  {
    title: 'Aspek Kebun',
    path: '/pelaporan-perkebunan/aspek-kebun',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Aspek Pengolahan',
    path: '/pelaporan-perkebunan/aspek-pengolahan',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
  },
  {
    title: 'Aspek Sosial Ekonomi dan Lingkungan',
    path: '/pelaporan-perkebunan/aspek-sosial',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Konfirmasi',
    path: '/pelaporan-perkebunan/konfirmasi',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: true,
    arrowRight: true,
    // isActive: false,
  },
];

export const navListPenilaianPerkebunan = [
  {
    title: 'Legalitas',
    path: '/penilaian-perkebunan/legalitas',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: true,
  },
  {
    title: 'Manajemen',
    path: '/penilaian-perkebunan/manajemen',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: true,
  },
  {
    title: 'Kebun',
    path: '/penilaian-perkebunan/kebun',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Pengolahan Hasil',
    path: '/penilaian-perkebunan/pengolahan-hasil',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
  },
  {
    title: 'Sosial',
    path: '/penilaian-perkebunan/sosial',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Ekonomi Wilayah',
    path: '/penilaian-perkebunan/ekonomi-wilayah',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Lingkungan',
    path: '/penilaian-perkebunan/lingkungan',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Pelaporan',
    path: '/penilaian-perkebunan/pelaporan',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: false,
    arrowRight: false,
    // isActive: false,
  },
  {
    title: 'Konfirmasi',
    path: '/penilaian-perkebunan/konfirmasi',
    icon: '/icon/home-icon-white.svg',
    isAdmin: true,
    stickyBot: true,
    arrowRight: true,
    // isActive: false,
  },
];
