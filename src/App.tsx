import { RouterProvider } from "react-router-dom";
import { router } from "./route/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
