import React, { useRef, useEffect } from 'react';
import '@styles/global.scss';

// //IMPORT DO SWIPER
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/effect-fade';
// import 'swiper/scss/pagination';
// import 'swiper/scss/navigation';

// //IMPORT DOS MODULOS DO SWIPER
// import { EffectFade, Pagination, Navigation } from 'swiper/modules';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/main.module.scss';

//IMPORT DAS IMAGENS
import Capa from '@assets/capa.png';
import Globo from '@assets/globoNeve.png';
import fotoA from '@assets/casinhasColoridas.png';
import fotoB from '@assets/gramadoLuz.png';
import fotoC from '@assets/luzesAzuis.png';

function Main() {
    return (
        <>
            <section id="Home" className={S.homeStyle}>
                <img src={Capa} alt="" />
            </section>
            <section id="Curiosity" className={S.curiosityStyle}>
                <img src={Globo} alt="Uma arvore dentro de um globo de vidro com pedestal de madeira com a simulação de pequenos flocos de neve caindo sobre a arvore" />
                <p>
                    A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.
                </p>
            </section>
            {/* <section id="Gallery" className={S.galleryStyle}>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={fotoA} alt="A foto mostra no fundo casas historicas com fachadas coloridas e arvores com luzes amarelas no tronco no primeiro plano" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={fotoB} alt="Imagem mostra a atração de Gramado luz, com casarões históricos e arcos de luzes, juntamente de pinheiros tradicionais do natal enfeitados com luzes" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={fotoC} alt="A imagem apresenta um rio ladeado por arvores iluminadas com luzes amarelas e luzes refletoras voltadas para agua na cor azul, com um monumento iluminado ao centro" />
                    </SwiperSlide>
                </Swiper> 
            </section>*/}
            <section id="Gallery" className={S.galleryStyle}>
                    <ul>
                        <li>
                            <img src={fotoA} alt="" />
                        </li>
                        <li>
                            <img src={fotoB} alt="" />
                        </li>
                        <li>
                            <img src={fotoC} alt="" />
                        </li>
                    </ul>
            </section>
        </>
    )
}

export default Main