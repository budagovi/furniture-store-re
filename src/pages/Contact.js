import FormWrapper from '../components/contactPage/FormWrapper';
import Header from '../components/contactPage/Header';
import ContentHolder from '../Layout/ContentHolder';

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContentHolder>
        <FormWrapper />
      </ContentHolder>
    </>
  )
}

export default ContactPage;