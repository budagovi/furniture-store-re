import style from './ContactForm.module.css';
import Button from '../../UI/Button';

const ContactForm = () => {
  return (
    <form className={style.form}> 
      <div className={style.inputWrapper}>
        <label>Name</label>
        <input />
      </div>
      <div className={style.inputWrapper}>
        <label>Email</label>
        <input />
      </div>
      <div className={style.inputWrapper}>
        <label>Comment or Message</label>
        <textarea type='textarea' rows={6}/>
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default ContactForm;