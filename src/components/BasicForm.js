import useInput from '../hooks/use-input';


const BasicForm = (props) => {

const {
  value: nameValue,
  isValid: nameIsValid,
  hasError: nameHasError,
  valueChangeHandler: nameChangeHandler,
  inputBlurHandler: nameBlurHandler,
  reset: nameReset
} = useInput(value=>value.trim() !== '');

const {
  value: emailValue,
  isValid: emailIsValid,
  hasError: emailHasError,
  valueChangeHandler: emailChangeHandler,
  inputBlurHandler: emailBlurHandler,
  reset: emailReset
} = useInput(value=>value.includes('@'));

const {
  value: lastNameValue,
  isValid: lastNameIsValid,
  hasError: lastNameHasError,
  valueChangeHandler: lastNameChangeHandler,
  inputBlurHandler: lastNameBlurHandler,
  reset: lastNameReset
} = useInput(value=>value.trim() !== '');

let formIsValid = false;

if(nameIsValid && emailIsValid && lastNameIsValid){
  formIsValid=true;
}


const submitHandler = (e)=>{
  e.preventDefault();
  console.log(nameValue, emailValue);
  nameReset();
  emailReset();
  lastNameReset();
}

const nameInputClasses = nameHasError
? "form-control invalid"
: "form-control";

const emailInputClasses = emailHasError
? "form-control invalid"
: "form-control";

const lastNameInputClasses = lastNameHasError
? "form-control invalid"
: "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameValue}/>
          {nameHasError && <p>Please write correct name.</p>}
        </div>
        <div className={lastNameInputClasses}>
        <label htmlFor='name'>Last Name</label>
        <input type='text' id='name'  onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameValue}/>
        {lastNameHasError && <p>Please write correct last name.</p>}
      </div>
      </div>
      <div className={emailInputClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue}/>
          {emailHasError && <p>Please write correct email.</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
