import style from './ContactForm.module.css';
import Button from '../../UI/Button';
import useInput from '../../hooks/useInput';

const ContactForm = () => {

  //MANAGING NAME INPUT
  const {
    value: nameValue,
    isTouched: nameIsTouched, 
    isValid: nameIsValid,
    blurHandler: nameBlurHandler,
    valueHandler: nameValueHandler,
    reset: nameResetHandler
  } = useInput(value=>value.trim()!=='');

  let nameClasses = style.valid;
  if(nameIsTouched && !nameIsValid) 
    nameClasses = `${style.valid} ${style.invalid}`

  //MANAGING EMAIL INPUT
  const {
    value: emailValue,
    isTouched: emailIsTouched, 
    isValid: emailIsValid,
    blurHandler: emailBlurHandler,
    valueHandler: emailValueHandler,
    reset: emailResetHandler
  } = useInput(value=>value.trim()!=='' && value.includes('@'));

  let emailClasses = style.valid;
  if(emailIsTouched && !emailIsValid) 
    emailClasses = `${style.valid} ${style.invalid}`

  //MANAGING TEXTAREA
  const {
    value: textareaValue,
    isTouched: textareaIsTouched, 
    isValid: textareaIsValid,
    blurHandler: textareaBlurHandler,
    valueHandler: textareaValueHandler,
    reset: textareaResetHandler
  } = useInput(value=> value.trim()!=='');

  let textareaClasses = style.valid;
  if(textareaIsTouched && !textareaIsValid) 
    textareaClasses = `${style.valid} ${style.invalid}`


  const submitHandler = (e) => {
    e.preventDefault();
      
    nameResetHandler();
    emailResetHandler();
    textareaResetHandler();
  }

  return (
    <form className={style.form} onSubmit={submitHandler}> 
      <div className={style.inputWrapper}>
        <label htmlFor='name'>Name</label>
        <input 
          className={nameClasses}
          type='text' 
          id='name' 
          onChange={nameValueHandler}
          onBlur={nameBlurHandler}  
          value={nameValue}
        />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor='email'>Email</label>
        <input
          className={emailClasses}
          type='email' 
          id='email' 
          onChange={emailValueHandler}
          onBlur={emailBlurHandler}  
          value={emailValue}
        />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor='area'>Comment or Message</label>
        <textarea
          className={textareaClasses}
          id='textarea' 
          onChange={textareaValueHandler}
          onBlur={textareaBlurHandler}  
          value={textareaValue}
          rows={6} 
        />
      </div>
      <Button type='submit' disabled={!(nameIsValid && emailIsValid && textareaIsValid)}>Submit</Button>
    </form>
  )
}

export default ContactForm;