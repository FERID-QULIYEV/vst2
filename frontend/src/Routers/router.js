import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import IdmanNovleri from "../Pages/IdmanNovleri/IdmanNovleri";
import Paraolimpiya from "../Pages/IdmanNovleri/Paraolimpiya/Paraolimpiya";
import QeyriOlimpiya from "../Pages/IdmanNovleri/QeyriOlimpia/QeyriOlimpiya";
import Add from "../Pages/Add/Add";
import Elave from "../Pages/Elave/Elave";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/idmannovleri",
      element: <IdmanNovleri/>,
    }
    ,
    {
      path: "/paraolimpiya",
      element: <Paraolimpiya/>,
    }
    ,
    {
      path: "/qeyriolimpiya",
      element: <QeyriOlimpiya/>,
    }
    ,
    {
      path: "/addpage",
      element: <Add/>,
    }
    ,
    {
      path: "/elavepage",
      element: <Elave/>,
    }
   
  ]);
  export default router