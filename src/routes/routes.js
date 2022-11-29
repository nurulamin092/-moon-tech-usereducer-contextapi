import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import TopRated from "../pages/TopRated";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'home',
                element:<Home/>
            }
            ,
            {
                path:'about',
                element:<About/>
            },
            {
                path:'cart',
                element: <Cart/>              
            },
            {
                path:'topRate',
                element:<TopRated/>
            }
        ]
    }
]);

export default routes;