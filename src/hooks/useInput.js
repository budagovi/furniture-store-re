import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);

  const valueHandler = (e) => {
    setValue(e.target.value)
  }

  const blurHandler = (e) => {
    setIsTouched(true);
  }

  const reset = () => {
    setIsTouched(false);
    setValue('');
  }

  return {value, isTouched, isValid, valueHandler, blurHandler, reset}
}

export default useInput;