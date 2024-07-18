import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={`${styles.container__banner} container__banner`}>
        <h1 className={styles.titulo}>Olá mundo</h1>
        <p className={styles.paragrafo}>
          Meu nome é João Guilherme e sou estudante de Análise e Desenvolvimento de Sistemas.
          Tenho me dedicado ao desenvolvimento web e estou animado para compartilhar meus projetos e habilidades com você.
          Meu objetivo é me tornar um desenvolvedor full-stack, combinando conhecimentos sólidos em front-end e back-end para criar soluções inovadoras.
          Vamos explorar juntos o mundo da tecnologia!
        </p>
      </div>
      <img src='../IMG/logo.png' alt="Logo" className={styles.logo} />
    </section>
  );
}

export default Banner;
