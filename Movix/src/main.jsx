import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import router from './routes/Route.jsx'
import store from './store/store.js'


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <Provider store={store} >
        <Home />
        </Provider> 
    </RouterProvider>
)

