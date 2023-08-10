import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import Footer from "../components/footer/Footer";

const RootPage = () => {

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
