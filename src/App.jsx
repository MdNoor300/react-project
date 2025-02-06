import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>,
  <Route index element={<HomePage />} />
  </Route>
  )
);


const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
