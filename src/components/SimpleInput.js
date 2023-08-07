import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput

  } = useInput(value=> value.trim() !=='');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput

  } = useInput(value=> value.includes("@"));

  // const nameInputRef = useRef();

  let formIsValid = false;

  // we put in the if statement as many valid inputs states as we have inputs
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // console.log(nameInputRef.current.value);

    // clear the input by refs is also possible but not 'elegant' way - you should only change the values of controlled elements (states), here you manipulate DOM by uncontrolled element
    // nameInputRef.current.value = '';
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be emty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={emailBlurHandler}
          type="text"
          id="email"
          onChange={emailChangedHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email is incorrect.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
