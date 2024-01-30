import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageRecentEvents from "../pages/Dashboard/ManageRecetEvents";
import ManageEventItems from "../pages/Dashboard/ManageEventItems/ManageEventItems";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/admin",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {

                index: true,
                element: <Navigate to="/admin/dashboard"></Navigate>
            },
            {
                path: "dashboard",
                element: <DashboardHome />
            },
            {
                path: "manage-recent-events",
                element: <ManageRecentEvents />
            },
            {
                path: "manage-event-items",
                element: <ManageEventItems />
            },
        ]
    }
]);

export default router;