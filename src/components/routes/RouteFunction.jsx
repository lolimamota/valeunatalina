//PRINCIPAIS IMPORTS
import React from 'react';
import '@styles/global.scss';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/route.module.scss';

function routeFunction() {
  const toSection = (sectionId) =>{
    const element = document.getElementById(
      sectionId
    );
    if (element){
        ElementInternals.toSectionView(
          {
            behavior: 'smooth'
          }
        );
    }
  }

  return (
    <section className={S.sectionNav}>
      <ul className={S.sectionUl}>
        <li className={S.cursorPointer} onClick={() => toSection('Home')}>
          Início
        </li>
        <li className={S.cursorPointer} onClick={() => toSection('Curiosity')}>
          Curiosidades
        </li>
        <li className={S.cursorPointer} onClick={() => toSection('Gallery')}>
          Galeria
        </li>
      </ul>
    </section>
  )
}

export default routeFunction