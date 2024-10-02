import { createRoot } from 'react-dom/client'
import './index.css'
import MemoryGame from './memoryGame/MemoryGame'

createRoot(document.getElementById('root')).render(
    // <CartContextProvider>
    //   <UseContextApp />
    //   </CartContextProvider>
    <MemoryGame />
)
