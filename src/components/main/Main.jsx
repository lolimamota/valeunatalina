import React from 'react';
import '@styles/global.scss';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/main.module.scss';

//IMPORT DAS IMAGENS
import Globo from '@assets/globoNeve.png';

function Main() {
    return (
        <>
            <section id="Home" className={S.homeStyle}>
            </section>
            <section id="Curiosity" className={S.curiosityStyle}>
                <img src={Globo} alt="Uma arvore dentro de um globo de vidro com pedestal de madeira com a simulação de pequenos flocos de neve caindo sobre a arvore" />
                <p>
                A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.
                </p>
            </section>
            <section id="Gallery" className={S.galleryStyle}>
                galeria
            </section>
        </>
    )
}

export default Main