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

  return (
      <div>
        <h1>Contact Me</h1>
        <p>Enter details below to contact me</p>
        <form className="form" onSubmit={handleFormSubmit}>
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
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    );
  }