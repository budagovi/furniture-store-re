import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


//Page Elements
import RootPage, { loader as fetchProductsLoader } from "./pages/Root";
import HomePage, { loader as articlesLoader } from './pages/Home';
import StorePage, { action as searchAction} from './pages/Store';
import OfficePage, { loader as officeArticlesloader } from "./pages/Office";
import ProductPage from "./pages/Product";
import HomeOfficePage, { loader as homeOfficeArticlesloader } from "./pages/HomeOffice";
import AboutPage, { loader as photoLoader } from "./pages/About";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: '/furniture-store-react', element: <RootPage />, id: 'root', loader: fetchProductsLoader, 
    children: [
      { index: true, element: <HomePage />, loader: articlesLoader, id: 'home' },
      {
        path: 'store', element: <StorePage />, action: searchAction, children: [
          { path: ':page', element: <StorePage /> },
          { path: ':category/:page', element: <StorePage /> }
        ]
      },
      { path: 'product', element: <ProductPage /> },
      { path: 'office-setups', element: <OfficePage />, loader: officeArticlesloader },
      { path: 'home-office-setups', element: <HomeOfficePage />, loader: homeOfficeArticlesloader },
      { path: 'about', element: <AboutPage />, loader: photoLoader },
      { path: 'contact', element: <ContactPage /> },
    ]
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
