import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";
import HomePage from "./pages/home";
import GigPostPage from "./pages/gigpost";

const routes = createBrowserRouter([
    {
        path:"",
        element: <GeneralLayout />,
        children:[
            {
                path:"",
                element:<HomePage />
            },
            {
                path:"/gigpost",
                element:<GigPostPage />
            },
        ]
    }
])

export default routes;