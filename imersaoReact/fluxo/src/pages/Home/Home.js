/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((videosCategories) => {
        setDadosIniciais(videosCategories);
      })
      .catch((err) => {
        console.error('Não foi possível acessar o servidor.', err);
      });
  }, []);

  return (

    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
        <div>Loading...</div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Daqui p'allá"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>

  );
}

export default Home;
