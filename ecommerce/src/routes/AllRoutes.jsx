import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Wrapper from "../pages/Wrapper"
import { fetchApi } from "../services/Api"
import CartProducts from "../components/CartProducts"
import AllBlogs from "../components/AllBlogs"
import SingleBlog from "../components/SingleBlog"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
        children: [
            {
                index: 'true',
                element: <Home />,
                loader: () => fetchApi('https://fakestoreapi.com/products?limit=5')
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetchApi('https://fakestoreapi.com/products')
            },
            {
                path: '/blog',
                children: [
                    {
                        index: true,
                        element: <AllBlogs />,
                        loader: () => fetchApi('https://jsonplaceholder.typicode.com/posts'),
                    },
                    {
                        path:':id',
                        element: <SingleBlog />,
                        loader: (e)=> fetchApi(`https://jsonplaceholder.typicode.com/posts/${e.params.id}`)
                    }
                ]
            },
            {
                path: '/cart',
                element: <CartProducts />,
            },
        ]
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
])

export default function Router() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}