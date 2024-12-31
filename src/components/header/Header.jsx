import React from 'react';
import RouteFunction from '@components/routes/RouteFunction.jsx';
import '@styles/global.scss';

//IMPORT DO ESTILO

import S from '@styles/componentStyle/header.module.scss';

//IMPORT DE IMAGENS
import Arvore from '@assets/arvoreLogo.png';

function Header() {
  return (
    <header className={S.headerStyle}>
      <section className={S.sectionLogo}>
        <img src={Arvore} alt="Arvore de natal verde com presemtes embaixo e bolinhas vermelhas e amarelas com uma estrela na ponta" />
        <h1>
          Feliz Natal !!!
        </h1>
      </section>
      <section className={S.sectionLogo}>
        < RouteFunction />
      </section>
    </header>
  )
}

export default Header