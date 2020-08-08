/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';

// import dadosIniciais from '../../data/dados_iniciais.json';

import BannerMain from '../../components/BannerMain';

import Carousel from '../../components/Carousel';

import PageDefault from '../../components/PageDefault';

import Footer from '../../components/Footer';

import categoriesRepository from '../../repositories/categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((videosCategories) => {
        setDadosIniciais(videosCategories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (

    <PageDefault>

      <Menu />

      {JSON.stringify(dadosIniciais)}
      {/*
      <BannerMain

        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}

        url={dadosIniciais.categorias[0].videos[0].url}

        videoDescription={"P'aquí p'allá"}

      />

      {dadosIniciais.categorias.map((cat, i) => (i === 0 ? (

        <Carousel ignoreFirstVideo category={cat} />

      ) : (

        <Carousel category={cat} />

      )))} */}

      <Footer />

    </PageDefault>

  );
}

export default Home;
