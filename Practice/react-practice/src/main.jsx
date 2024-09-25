import { createRoot } from 'react-dom/client'
import './index.css'
import UseContextApp from './components/Counter/App'
import CounterProvider from './Context/CounterContext'
import CartContextProvider from './Context/CartContext'

createRoot(document.getElementById('root')).render(
    <CartContextProvider>
      <UseContextApp />
      </CartContextProvider>
)
