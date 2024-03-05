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
    },
    formBody: {
      fontSize: 'calc(.5rem + .5vw)',
    },
    button: {
      backgroundColor: '#2C505E', 
      color: 'white'
    }
  } 

  return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>Contact Me</h1>
        <div className='card col-md-5 my-3 mx-auto border p-2 shadow' style={styles.form}>
          <h2 className='card-header'>Enter details below to contact me</h2>
          <form className="form card-body" style={styles.formBody} onSubmit={handleFormSubmit}>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder='Enter Name'
              className='w-50 m-1'
            />
            <br></br>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder='Enter your email address'
              className='w-50 m-1'
            />
            <br></br>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder='Send me a message'
              className='w-50 m-1'
            />
            <br></br>
            <button type="submit" className='px-2 m-1' style={styles.button}>Submit</button>
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