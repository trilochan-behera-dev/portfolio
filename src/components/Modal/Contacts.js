import React from 'react';
import ButtonOutline from '../Button/ButtonOutline.';
import "./contact.css"
import { GrLinkedinOption } from 'react-icons/gr';
import { MdCall, MdOutgoingMail } from 'react-icons/md';
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';

const Contacts = ({onClose}) => {
  return (
    <div className="relative rounded-md p-1  h-full min-h-[400px] mx-4 md:mx-auto bg-white flex flex-col justify-between bg-white-500">
       <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
               Don’t hesitate to get in touch with me—I’m eager to explore new opportunities, collaborate on exciting projects, or simply have a meaningful conversation. Let's connect!
          </p>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
            <a href="https://www.linkedin.com/in/trilochanbehera/"><p className='text-blue-500  p-2'> <GrLinkedinOption /> </p>
                                </a>
                                <a href="mailto:trilochanbeherak@gmail.com"> <p className='text-red-600  p-2'> <MdOutgoingMail /> </p>
                                </a>
                                <a href="https://wa.me/+919583998665"><p className='text-green-300  p-2'> <IoLogoWhatsapp /></p>
                                </a>
                                <a href="tel:+919583998665"><p className='text-cyan-900  p-2'> <MdCall /></p></a>
                                <a href="https://github.com/trilochan-behera-dev"><p className='text-black  p-2'> <IoLogoGithub /></p>
                                </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Your Name</label>
              <span>Good Name</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <div className="flex justify-end"  >
              <ButtonOutline>Send</ButtonOutline>
              </div>
          </form>
        </div>

        <div className='absolute top-4 right-4 text-2xl text-primary font-bold' onClick={()=>onClose()}>
          <RxCrossCircled/>
        </div>
      </div>
      </div>
  );
};

export default Contacts;
