import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container';
import { Heading } from './components/Heading';



export function App () {  //componente função 
    return ( 
    <> 
       <Container>
        <Heading>LOGO</Heading>
       </Container>

       <Container>
        <Heading>MENU</Heading>
       </Container>
    </> //que retorna um elemento jsx, <> react fragment
    
    );
}

