import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Postcode from "./pages/Postcode";

const router = createBrowserRouter([
  {
    errorElement: <div>This page doesn't exist. Go home!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:code",
        element: <Postcode />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
