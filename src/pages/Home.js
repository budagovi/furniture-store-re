import HomeHeader from "../components/homePage/Header";
import HomeGrid from "../components/homePage/HomeGrid";
import HomeSection from "../components/homePage/HomeSection";
import NewArrivals from "../components/homePage/NewArrivals";
import Offers from "../components/homePage/Offers";
import Articles from "../components/homePage/Articles";
import ContentHolder from "../Layout/ContentHolder";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <ContentHolder>
        <HomeGrid />
        <HomeSection />
        <NewArrivals />
      </ContentHolder>
      <Offers />
      <Articles />
    </>
  )
}

export default HomePage;

export const loader = async () => {
  const response = await fetch('https://furniture-store-191fb-default-rtdb.firebaseio.com/articles.json');

  if(response.ok) {
    const data = await response.json();
    const articles = Object.values(data).filter(article => !article.setup);
    //console.log(articles);
    return articles;
  }

  return null;
}