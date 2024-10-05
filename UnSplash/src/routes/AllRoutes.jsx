import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Wrapper from "../pages/Wrapper"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Wrapper/>
    }
])


export default function Router(){
    return(
        <RouterProvider router={router}>

        </RouterProvider>
    )
}