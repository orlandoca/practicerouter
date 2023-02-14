import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
import Hello from "../components/hello";
import Cuatro from "../components/4";
import Hellobluered from "../components/hellobluered";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Ve a una ruta!</div>,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/4",
    element: <Cuatro />,
  },
  {
    path: ":parameter/:bgColor/:color",
    element: <Hellobluered />,
  },
]);

export default router;
