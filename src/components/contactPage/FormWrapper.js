import style from './FormWrapper.module.css';
import FormTextHolder from './FormTextHolder';
import ContactForm from './ContactForm';

const FormWrapper = () => {
  return (
    <div className={style.wrapper}>
      <h3>Get in touch</h3>
      <section></section>
      <FormTextHolder />
      <ContactForm />
    </div>
  )
}

export default FormWrapper;