import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);


const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
