import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home";
import FAQs from "../components/pages/FAQs";
import Details from "../components/pages/Details";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import PrivateRouts from "./Privaterouts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root> ,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('events.json')
            },
            {
                path: '/details/:id',
                element: <PrivateRouts><Details></Details>,</PrivateRouts> ,
                loader: () => fetch(`/public/events.json`)
                
            },
            {
                path: '/faqs',
                element:  <PrivateRouts> <FAQs></FAQs></PrivateRouts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           
        ]
    }    
]);

export default router;