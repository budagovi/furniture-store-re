import style from './NavSearchForm.module.css';
import Button from '../../UI/Button';
import { Form } from 'react-router-dom';
import { useState } from 'react';

const NavSearchForm = ({onClick}) => {

  const [value, setValue] = useState('');
  const co = (e) => {
    setValue('');
  }

  const valueHandler = (e) => {
    setValue(e.target.value)
  }
  return (
    <Form method="post" action="/furniture-store-react/store" onSubmit={co} className={style.wrapper}>
      <input 
        type='text' 
        name='q' 
        value={value} 
        onChange={valueHandler} 
        placeholder='Search products...'
      />
      <Button type="submit" className={style.arrowBtn} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
      </svg>
      </Button>
    </Form>
  )
}

export default NavSearchForm;