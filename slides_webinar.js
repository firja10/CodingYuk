import {View, Text} from 'react-native';
import React, {useState} from 'react';

const slides_webinar = [
    {
        id: 1,
        title: 'Selamat Datang di MUTER, Sejahtera Clothes !',
        description: 'Perluas Koneksi di MUTER dengan berbagai fitur yang tersedia !',
        image: require('./src/assets/Poster_Web1.png')
      },
      {
        id: 2,
        title: 'Perluas Branding UMKM   dengan MUTER !',
        description: 'Dapatkan Webinar dan Kelas seputar UMKM !',
        image: require('./src/assets/Poster_Web2.png')
      },
      {
        id: 3,
        title: 'Time For Collaboration',
        description: 'Jadikan MUTER sebagai teman untuk berkolaborasi dan berinovasi demi kemajuan UMKM !',
        image: require('./src/assets/Poster_Web3.png')
      }
]

export default slides_webinar ;