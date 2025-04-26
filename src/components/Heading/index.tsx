// Importa a biblioteca React para poder criar componentes
import React from 'react';

// Importa os estilos CSS do arquivo 'Heading.module.css' como um objeto chamado 'styles'
// Esse é o uso de CSS Modules, onde cada classe vira uma propriedade no objeto 'styles'
import styles from './styles.module.css';

// Define o tipo das props (propriedades) que o componente 'Heading' vai receber
type HeadingProps = {
  children: React.ReactNode; // 'children' representa qualquer conteúdo passado dentro do componente <Heading>...</Heading>
};

// Define o componente 'Heading' como uma função que recebe as props
export function Heading({ children }: HeadingProps) {
  // children é uma propriedade especial do React que representa o conteúdo interno do componente
  // por exemplo: <Heading>Olá Mundo</Heading> → 'Olá Mundo' será o valor de children

  // O componente retorna um elemento <h1>, aplicando a classe CSS 'heading' vinda do módulo de estilos
  return <h1 className={styles.heading}> {children}</h1>;

  // className={styles.heading} é como aplicamos uma classe CSS do CSS Module ao elemento
  // Isso garante que o estilo seja aplicado corretamente e de forma isolada (sem conflitos com outras classes)
}
