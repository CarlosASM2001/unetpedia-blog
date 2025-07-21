import React from 'react';
import Banner from './Banner';
import NoticiasDestacados from './NoticiasDestacados';
import FuncionalidadesPrincipales from './FuncionalidadesPrincipales';
import TeamSection from './TeamSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <FuncionalidadesPrincipales />
      <NoticiasDestacados />
      <TeamSection />
      
    </div>
  );
};

export default Home;