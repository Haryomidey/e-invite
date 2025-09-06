import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
