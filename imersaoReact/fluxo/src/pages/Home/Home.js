import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'



function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"P'aquí p'allá"}
      />

      {dadosIniciais.categorias.map((cat, i) => {
        return i === 0 ? (
          <Carousel ignoreFirstVideo category={cat} />
        ) : (
          <Carousel category={cat} />
        )
      })}
        
      <Footer />

    </div>
  );
}

export default Home;
