import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/PublicLayout";
import publicRoute from "./publicRoute";
import NotFoundPage from "../components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [...publicRoute],
  },
]);

export default router;
