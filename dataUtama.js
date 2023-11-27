// dataUtama.js

import {useState} from 'react';

const useBlogState = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Tanjung Puting',
      rating: '4.7(9k Review)',
      location: 'Kotawaringin Barat',
      mapDirection: 'Map Direction',
      description: `
Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletakdi semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996, Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya 415.040 ha.
      `,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPo36cmOpqXOaJ3B5TQ3TSSEZb7zHOwMHag&usqp=CAU',
    },
    {
      id: 2,
      title: 'Ujung Pandaran',
      rating: '4.7(8k Review)',
      location: 'Kotawaringin Timur',
      mapDirection: 'Map Direction',
      description: `
      Letak Pantai Ujung Pandaran yang jauh dari hiruk pikuk kota merupakan tempat yang menarik bagi Anda untuk berlibur melepas  lelah dari rutinitas sehari-hari. Pantai Ujung Pandaran berpasir putih, butiran-butiran pasirnya juga sangat halus. Di sekitar pantai  banyak ditemukan kayu-kayu besar yang berserakan. Kayu-kayu tersebut adalah kayu-kayu yang dibawa oleh ombak besar hingga bibir pantai.[1][2] Penduduk di  sekitar pantai sebagian besar berprofesi sebagai nelayan. kita bisa mengamati aktivitas nelayan yang sedang mencari ikan menggunakan perahu. Di sana para  penduduk juga banyak yang membuat ikan asin, maka tak heran bila semerbak bau khas ikan asin menyambut kita saat berkunjung ke sana.
      `,
      imageUrl:
        'https://i0.wp.com/mentayanet.com/wp-content/uploads/2023/02/Pantai-Kalimantan-Tengah-e1676192534337.webp?fit=750%2C375&ssl=1',
    },
    {
      id: 3,
      title: 'Sungai Panjang',
      location: 'Kotawaringin',
      rating: '4.7(9k Review)',
      mapDirection: 'Map Direction',
      description: `
        Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletak
        di semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting
        pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan
        oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan
        SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996,
        Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya
        415.040 ha.
      `,
      imageUrl:
        'https://www.intimnews.com/wp-content/uploads/2023/04/whatsapp-image-2023-04-25-at-19.52.43jpeg.jpg',
    },
    {
      id: 4,
      title: 'Rumah Betang',
      location: 'Kotawaringin',
      rating: '4.7(9k Review)',
      mapDirection: 'Map Direction',
      description: `
        Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletak
        di semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting
        pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan
        oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan
        SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996,
        Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya
        415.040 ha.
      `,
      imageUrl:
        'https://www.daerahkita.com/gambar/rumah-betang-tradisional-kalteng-1.webp',
    },
    {
      id: 5,
      title: 'Batu Banama',
      location: 'Kotawaringin',
      rating: '4.7(9k Review)',
      mapDirection: 'Map Direction',
      description: `
        Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletak
        di semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting
        pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan
        oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan
        SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996,
        Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya
        415.040 ha.
      `,
      imageUrl:
        'https://osccdn.medcom.id/images/content/2021/09/10/234ad084213642ebdf4ba658361f63d8.jpg',
    },
    {
      id: 6,
      title: 'Tugu Soekarno',
      location: 'Kotawaringin',
      rating: '4.7(9k Review)',
      mapDirection: 'Map Direction',
      description: `
        Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletak
        di semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting
        pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan
        oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan
        SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996,
        Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya
        415.040 ha.
      `,
      imageUrl: 'https://kaltengtoday.com/wp-content/uploads/2020/05/2-7.jpg',
    },
  ]);

  return {
    blogs,
    setBlogs,
  };
};

export default useBlogState;
