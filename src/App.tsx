import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';



export function App () {  //componente função 
    return ( 
    <> 
       <Container>
       <Logo />
       </Container>

       <Container>
        <Heading>MENU</Heading>
       </Container>
    </> //que retorna um elemento jsx, <> react fragment
    
    );
}

