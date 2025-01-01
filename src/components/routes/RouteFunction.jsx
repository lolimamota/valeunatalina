//PRINCIPAIS IMPORTS
import React from 'react';
import '@styles/global.scss';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/route.module.scss';

function routeFunction() {
  return (
    <section className={S.sectionNav}>
      <ul className={S.sectionUl}>
        <li className={S.cursorPointer}>
          <a href="#Home" className={S.cursorHover}>
            Início
          </a>
        </li>
        <li className={S.cursorPointer}>
          <a href="#Curiosity" className={S.cursorHover}>
            Curiosidade
          </a>
        </li>
        <li className={S.cursorPointer}>
          <a href="#Gallery" className={S.cursorHover}>
            Galeria
          </a>
        </li>
      </ul>
    </section>
  )
}

export default routeFunction