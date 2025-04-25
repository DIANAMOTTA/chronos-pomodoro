import { Heading } from './components/Heading';  //importou automaticamente a função Heading

import './styles/theme.css'
import './styles/global.css'



export function App () {  //componente função
    console.log('Oi')

    return ( 
        <> 
    <Heading/>
     </>); //que retorna um elemento jsx, <> react fragment
    
}

