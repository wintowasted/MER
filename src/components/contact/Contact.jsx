import './contact.scss';
import React from 'react';

const Contact = () => {
  const [message, setMessage] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Email'/>
          <textarea placeholder='Message...' cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact