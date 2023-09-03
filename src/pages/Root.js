import { Outlet, useSearchParams } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import Footer from "../components/footer/Footer";
import { useLocation, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import CartStateBar from "../components/CartStateBar";
import LoadingPage from "./Loading";

const tabTitle = {
  "/furniture-store-react": "Home - Office Furniture Store",
  "/furniture-store-react/store": "Shop - Office Furniture Store",
  "/furniture-store-react/about": "About Us - Office Furniture Store",
  "/furniture-store-react/contact": "Contact Us - Office Furniture Store",
  "/furniture-store-react/office-setups": "Office Setups - Office Furniture Store",
  "/furniture-store-react/home-office-setups": "Home Office Setups - Office Furniture Store",
  "/furniture-store-react/product": "Product - Office Furniture Store",
}

const RootPage = () => {

  const {pathname} = useLocation();
  const searchParams = useSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
      window.scrollTo(0, 0);

      for (let index in tabTitle){
        if(index.includes(pathname))
          document.title = tabTitle[pathname] || 'Furniture Store';
      }
  }, [pathname, searchParams])
  
  return (
    <>
      <CartStateBar/>
      <MainNavigation />
      {navigation.state==='loading' ? <LoadingPage/> :<Outlet/>}
      {navigation.state==='idle' && <Footer /> }
    </>
  )
}

export default RootPage;

export const loader = async () => {
  const response = await fetch('https://furniture-store-191fb-default-rtdb.firebaseio.com/products.json');

  if(response.ok) {
    const data = await response.json();
    const products = Object.values(data);
    return products;
  }

  return null;
}
