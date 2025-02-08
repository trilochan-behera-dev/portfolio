import React, { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { socialIcon } from '../../resources/resource';
import './contact.css';
import ButtonOutline from '../Button/ButtonOutline.';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Contacts = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [apiCall, setApiCall] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setApiCall(true);

    if(!email || !name ){
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: 'Please enter your good name and email address'
      });
     setApiCall(false);
    }else{
      const templateParams = {
        from_name:"Trilochan Behera",
        from_email: email.toLowerCase(),
        to_name: name, // You can customize this
        message: message,
      };

      if(apiCall) return
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your EmailJS credentials
      emailjs.send('service_08fd5vt', 'template_yab20ai', templateParams, 'fBaAhjyardf3P269t')
        .then((result) => {
          // Show success message
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Thank you " + name + " for contacting me!"
          });
          setApiCall(false);
          onClose();
          setEmail("");
          setName("");
          setMessage("");
        }, (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Something went Wrong!!!"
          });
          setApiCall(false);
        });
    }
  }
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
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
             <ButtonOutline> {!apiCall ? "Send" : <div className='py-0.5 px-2.5 animate-spin'><AiOutlineLoading3Quarters /></div>  }</ButtonOutline>
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
