import ContentHolder from "../Layout/ContentHolder";
import NewReleases from "../components/NewReleases";
import ProductWrapper from "../components/productPage/ProductWrapper";

const ProductPage = () => {
  const randomIndex = Math.floor(Math.random() * 13);
  return (
    <ContentHolder>
      <ProductWrapper />
      <NewReleases title={'Related Products'} index={randomIndex}/>
    </ContentHolder>
  )
}

export default ProductPage;
