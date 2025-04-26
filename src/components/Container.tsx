import styles from './Container.module.css';

// Define o tipo das props (propriedades) que o componente Container vai receber
type ContainerProps = {
    children: React.ReactNode; 
    // 'children' é uma propriedade especial do React usada para renderizar conteúdo interno,
    // por exemplo: <Container><p>Texto</p></Container>
};

// Define o componente 'container' como uma função que recebe as props
export function Container({ children }: ContainerProps) {
    return (
        <div className={styles.container}>
           {/* A classe 'container' é usada para o contêiner principal */}
           <div className={styles.content}>{children}</div>         
        </div>
    );
}
