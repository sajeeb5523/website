import {
    createBrowserRouter
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
]);

export default router;