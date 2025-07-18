import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      
    ]
  },
]);


export default router;