import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, useLocation } from "react-router-dom";


//Page Elements
import RootPage, { loader as fetchProductsLoader } from "./pages/Root";
import HomePage, { loader as articlesLoader } from './pages/Home';
import StorePage from './pages/Store';
import OfficePage, { loader as officeArticlesloader } from "./pages/Office";
import HomeOfficePage, { loader as homeOfficeArticlesloader } from "./pages/HomeOffice";
import AboutPage, {loader as photoLoader} from "./pages/About";
import ContactPage from "./pages/Contact";
import StoreContent from "./components/storePage/StoreContent";

const router = createBrowserRouter([
  {
    path: '/furniture-store-react', element: <RootPage />, id: 'root', loader: fetchProductsLoader, children: [
      { index: true, element: <HomePage />, loader: articlesLoader, id: 'home' },
      { path: 'store', element: <StorePage />, children: [
        {path: ':page', element: <StorePage />},
        {path: ':category/:page', element: <StorePage />}
      ]},
      { path: 'office-setups', element: <OfficePage />, loader: officeArticlesloader },
      { path: 'home-office-setups', element: <HomeOfficePage />, loader: homeOfficeArticlesloader },
      { path: 'about', element: <AboutPage />, loader:photoLoader },
      { path: 'contact', element: <ContactPage /> },
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
