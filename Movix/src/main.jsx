import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)

