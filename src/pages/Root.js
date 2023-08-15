import { Outlet, useSearchParams } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootPage = () => {

  const {pathname} = useLocation();
  const searchParams = useSearchParams();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname, searchParams])

  return (
    <>
      <MainNavigation />
      <Outlet/>
      <Footer />
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
