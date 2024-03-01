import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import BackgroundColor from "./BackgroundColor";


const Body = () => {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/background",
      element: <BackgroundColor/>,
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={routing} />
    </div>
  );
};

export default Body;
