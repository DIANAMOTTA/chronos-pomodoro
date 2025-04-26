// Importa os estilos CSS do arquivo 'Logo.module.css' como um objeto chamado 'styles'
// Esse é o uso de CSS Modules, onde cada classe vira uma propriedade no objeto 'styles'
import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

// Define o componente 'Logo' como uma função que recebe as props
export function Logo() {
  return (
  <div className={styles.logo}>
    <a className={styles.logoLink} href="#">
      <TimerIcon />
      <span>Chronos</span>
    </a>
  </div>

  );
}
