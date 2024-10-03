import CartProvider from "./context/cartContext"
import Routes from "./routes/AllRoutes"

function App() {

  return (
    <>
    <CartProvider>
     <Routes />
     </CartProvider>
    </>
  )
}

export default App
