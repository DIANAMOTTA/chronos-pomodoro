import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';



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

