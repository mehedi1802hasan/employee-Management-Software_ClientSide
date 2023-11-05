import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../AuthenticationSection/Login";
import Registration from "../AuthenticationSection/Registration";
import Employee from "../Pages/Employee/Employee";
import Intern from "../Pages/Intern/Intern";
import Task from "../Pages/Task/Task";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },{
          path:"/employee",
          element:<Employee></Employee>
        },
        {
          path:'/intern',
          element:<Intern></Intern>
        },
        {
          path:'/task',
          element:<Task></Task>
        }
      ],
    },{
      path:"/login",
      element:<Login></Login>
    },{
      path:"/registration",
      element:<Registration></Registration>
    }
  ]);
  export default router;