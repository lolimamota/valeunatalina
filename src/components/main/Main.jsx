import React from 'react';
import '@styles/global.scss';

//IMPORT DO ESTILO PERSONALIZADO
import S from '@styles/componentStyle/main.module.scss';

function Main() {
    return (
        <>
            <section id="Home" className={S.homeStyle}>
            </section>
            <section id="Curiosity" className={S.curiosityStyle}>
                curioso
            </section>
            <section id="Gallery" className={S.galleryStyle}>
                galeria
            </section>
        </>
    )
}

export default Main