import { createRoot } from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import router from './routes/Route.jsx'
import store from './store/store.js'
import AuthContext from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <AuthContext>
        <Home />
        </AuthContext>
     
    </RouterProvider>
)

