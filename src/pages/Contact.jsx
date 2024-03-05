import { useState } from 'react';
import { validateEmail } from '../../utils/validate';

export default function Contact() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //check if that none of the fields are empty.
    //check that a valid email was entered
    if(!userName || !email || !message){
      setErrorMessage('All fields are required.')
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    } else {
      setErrorMessage(`Form submitted. Thanks ${userName} for your message! I'll get back to you shortly!`)
    }

    //clear form inputs
    setName('');
    setEmail('');
    setMessage('');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      return setName(value)
    } else if (name === "email") {
      return setEmail(value)
    } else {
      return setMessage(value)
    }
  };

  const styles = {
    font: {
      fontSize: 'calc(1.75rem + 1.25vw)'
    },
    form: {
      fontSize: 'calc(1rem + .5vw)'
    }
  } 

  return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>Contact Me</h1>
        <div className='card col-md-5 my-3 mx-auto border p-2 shadow' style={styles.form}>
          <p className='card-header'>Enter details below to contact me</p>
          <form className="form card-body" onSubmit={handleFormSubmit}>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder='Enter Name'
            />
            <br></br>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder='Enter your email address'
            />
            <br></br>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder='Send me a message'
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
          {errorMessage && (
            <div className='card-footer'>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
      </div>
      </div>
    );
  }