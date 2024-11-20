import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard_Page     from "./components/Dashboard_Page";
import Chat_Page           from "./components/Chat_Page";
import Dashboard          from "./components/Dashboard";
import SignIn_Page        from "./components/SignIn_Page";
import SignUp_Page        from "./components/SignUp_Page";
import Home_Page          from "./components/Home_Page";
import Root               from "./components/Root";
import React              from "react";
import ReactDOM           from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";

if (import.meta.env.NODE_ENV === 'production') disableReactDevTools()

const Router = createBrowserRouter([{

    element: <Root />,
    children: [
        {
            path: "/", 
            element: <Home_Page />,
        },
        {
            path: "/sign-in/*",
            element: <SignIn_Page />,
        },
        {
            path: "/sign-up/*",
            element: <SignUp_Page />,
        },
        {
            element: <Dashboard />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard_Page />,
                },
                {
                    path: "/dashboard/chats/:id",
                    element: <Chat_Page />,
                },
            ],
        },
    ],
},]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
