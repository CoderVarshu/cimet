import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
import { fetchApi } from "../services/Api";
import Products from "../pages/Products";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
        children: [
            {
                index:true,
                element: <Home />,
                // loader: fetchApi('https://fakestoreapi.com/products?limit=5')
            },
            {
                path:'/product',
                element: <Products/>,
                loader: fetchApi('')
            }
        ]
    }
])

const Routes = ()=>{
    return(
     <RouterProvider router={router}></RouterProvider>
    )
}


export default Routes;