import OfficeHeader from "../components/officePage/Header";
import ContentHolder from "../Layout/ContentHolder";
import OfficeIntro from '../components/officePage/OfficeIntro';
import NewReleases from '../components/NewReleases';
import OfficeArticles from '../components/officePage/OfficeArticles';

const OfficePage = () => {
  return (
    <>
      <OfficeHeader />
      <ContentHolder>
        <OfficeIntro />
        <NewReleases />
        <OfficeArticles />
      </ContentHolder>
    </>
  )
}

export default OfficePage;

export const loader = async () => {
  const response = await fetch('https://furniture-store-191fb-default-rtdb.firebaseio.com/articles.json');

  if(response.ok) {
    const data = await response.json();
    const articles = Object.values(data).filter(article => article.setup === 'office');
    return articles;
  }

  return null;
}