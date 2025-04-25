import { Heading } from './components/Heading';  //importou automaticamente a função Heading

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App () {  //componente função 
    return ( 
        <> 
    <Heading>
    Olá mundo 1
    <button>
        <TimerIcon />
    </button>
    </Heading>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ratione! Quam est, consequatur magnam nostrum,
       distinctio rem, debitis laudantium ipsa maiores veniam accusamus illum similique. Amet optio perferendis hic non.
    </p>
    </>
    ); //que retorna um elemento jsx, <> react fragment
    
}

