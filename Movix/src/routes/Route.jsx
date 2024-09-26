import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import HomePage from "../pages/home/HomePage"
import PageNotFound from "../pages/404/PageNotFound";
import Explore from "../pages/explore/Explore";
import SearchResult from "../pages/searchResult/SearchResult";
// import { Provider } from "react-redux";
// import  store  from "../store/store.js";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path:'/',
                index: true,
                element: <HomePage/>
            },
            {
                path:'/search',
                element: <SearchResult/>,
                children:[{
                    path: ':id',
                    element: <Explore/>
                }]
            },
            {
                path:':mediaType',
                element: <Explore />,
                children:[{
                    path: ':id',
                    element: <Explore/>
                }]
            },
            {
                path:'*',
                element: <PageNotFound />
            }
        ]
    }
]
)

// export const AppRouter = () => {

//     return (
//         <RouterProvider router={router}>
//             <Provider store={store}>
//               <Home />
//              </Provider>
//        </RouterProvider>
//     )
// }

export default router