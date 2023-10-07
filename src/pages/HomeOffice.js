import Header from '../components/homeOfficePage/Header';
import ContentHolder from '../Layout/ContentHolder';
import HomeOfficeIntro from '../components/homeOfficePage/HomeOfficeIntro';
import NewReleases from '../components/NewReleases';
import HomeArticles from '../components/homeOfficePage/HomeArticles';

const HomeOfficePage = () => {
  return (
    <>
      <Header />
      <ContentHolder>
        <HomeOfficeIntro/>
        <NewReleases title={'New Releases'} index={3}/>
        <HomeArticles />
      </ContentHolder>
    </>
  )
}

export default HomeOfficePage;

export const loader = async () => {
  const response = await fetch('https://furniture-store-app---react-default-rtdb.firebaseio.com/articles.json');

  if(response.ok) {
    const data = await response.json();
    const articles = Object.values(data).filter(article => article.setup === 'wfh');
    return articles;
  }

  return null;
}