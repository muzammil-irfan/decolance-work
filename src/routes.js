import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";
import HomePage from "./pages/home";


const routes = createBrowserRouter([
    {
        path:"",
        element: <GeneralLayout />,
        children:[
            {
                path:"",
                element:<HomePage />
            },
        ]
    }
])

export default routes;