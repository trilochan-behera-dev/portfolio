import React, { useState } from 'react';
import './contact.css';
import { RxCrossCircled } from 'react-icons/rx';
import { socialIcon } from '../../resources/resource';
import ButtonOutline from '../Button/ButtonOutline.';

const Contacts = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    if(!email || !name ){
      alert('Please enter you good name and email address');
    }else{
      const formData = new FormData();
      formData.append('email', email);
      formData.append('subject', `Thank you ${name} for contacting me!`);
      formData.append('message', message);
  
      try {
        const response = await fetch(
          process.env.REACT_APP_EMAIL_URL,
          {
            method: 'POST',
            mode: 'no-cors', // Try this to bypass strict CORS policies
            body: formData,
  
          }
        );
  
        console.log("response",response)
  
        if (response.ok || response.type === 'opaque') {
          // Email likely sent (since we get an opaque response with no-cors)
          alert(`Thank you ${name} for contacting me!`);
          onClose();
          setEmail("");
          setName("");
          setMessage("");
        } else {
          // Handle potential errors if the request fails
          alert('Failed to send email.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error sending email.');
      }
    }
  };

  return (
    <div className="relative rounded-md p-1 h-full min-h-[400px] mx-4 md:mx-auto bg-white flex flex-col justify-between">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Don’t hesitate to get in touch with me—I’m eager to explore new
            opportunities, collaborate on exciting projects, or simply have a
            meaningful conversation. Let's connect!
          </p>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              {socialIcon.map(({ icon: Icon, color, link }, index) => (
                <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
                  <p className={`${color} p-2`}>{Icon}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={sendEmail}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Good Name</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder='EMail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span>Message</span>
            </div>
            <div className="flex justify-end">
              <ButtonOutline>Send</ButtonOutline>
            </div>
          </form>
        </div>

        <div
          className="absolute top-4 right-4 text-2xl text-primary sm:text-white-500 font-bold cursor-pointer z-50"
          onClick={() => onClose()}
        >
          <RxCrossCircled />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
