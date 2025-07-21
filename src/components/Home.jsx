import React from 'react';
import Banner from './Banner';
import NoticiasDestacados from './NoticiasDestacados';
import FuncionalidadesPrincipales from './FuncionalidadesPrincipales';

const Home = () => {
  return (
    <div>
      <Banner />
      <FuncionalidadesPrincipales />
      <NoticiasDestacados />
      
    </div>
  );
};

export default Home;