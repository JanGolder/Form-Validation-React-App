import {useState} from 'react';


const SimpleInput = (props) => {

  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);



  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    // we put in the if statement as many valid inputs states as we have inputs
    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    } 


  const nameInputChangeHandler = e =>{
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = e =>{
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = e =>{
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = e =>{
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = e =>{
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!enteredNameIsValid){
      return;
    }

    // console.log(nameInputRef.current.value);

    // clear the input by refs is also possible but not 'elegant' way - you should only change the values of controlled elements (states), here you manipulate DOM by uncontrolled element
    // nameInputRef.current.value = '';
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameInputBlurHandler} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be emty.</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailInputBlurHandler} type='text' id='email' onChange={emailInputChangeHandler} value={enteredEmail}/>
        {emailInputIsInvalid && <p className="error-text">Email is incorrect.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
