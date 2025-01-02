import React from 'react'
import '@styles/global.scss';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/footer.module.scss';

//IMPORT DAS IMAGENS
import Linkedin from '@assets/linkedin.png';
import Github from '@assets/github.png';
import Instagram from '@assets/instagram.png';
import Presentes from '@assets/presentes.png';

function Footer() {
  return (
    <section className={S.footerStyle}>
    <figure className={S.fig01}>
      <img src={Linkedin} alt="Logo do LinkedIn por Icons8" />
      <img src={Instagram} alt="Logo do Instagram por Icons8" />
      <img src={Github} alt="Logo do Github por Icons8" />
    </figure>
    <div className={S.creditosFinais}>
      <h3>Desenvolvido por Lorrayne Lima Mota</h3>
      <h3>Vinicius Bispo</h3>
      <h3>Marina Gomes</h3>
      <h3>Layout criado para fins natalísticos na escola Vai Na Web</h3>
    </div>
    <figure className={S.fig02}>
      <img src={Presentes} alt="Quatro caixas de presentes verdes e vermelhas com laços vermelhos e amarelos" />
    </figure>
    </section>
  )
}

export default Footer