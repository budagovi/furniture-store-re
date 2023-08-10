import ContentHolder from '../Layout/ContentHolder';
import AboutIntro from '../components/aboutPage/AboutIntro';
import Gallery from '../components/aboutPage/Gallery';
import Header from '../components/aboutPage/Header';
import Offers from '../components/aboutPage/Offers';
import Quote from '../components/aboutPage/Quote';

const AboutPage = () => {
  return (
    <>
      <Header />
      <ContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />
        <Gallery />
      </ContentHolder>
    </>
  )
}

export default AboutPage;

export const loader = async () => {
  const response = await fetch('https://furniture-store-191fb-default-rtdb.firebaseio.com/gallery.json');

  if(response.ok) {
    const data = await response.json();
    const photos = Object.values(data);
    //console.log(articles);
    return photos;
  }

  return null;
}