import Roots from "./roots";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Technologies from "./component/technologies/technologies";
/*,
    {
      basename: "/",
    }

*/
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
    },
    {
      path: "technologies",
      element: <Technologies />,
    },
  ]);

  return (
    <div id="oben" className="app-div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
