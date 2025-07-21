import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>
          }
        ]
      },
    
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ]
  }
]);


export default router;