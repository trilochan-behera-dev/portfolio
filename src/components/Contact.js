import React from 'react';
import './contact.css'; // Ensure your CSS file is correctly linked

const CardInput = ({ name, id, type = 'text', placeholder }) => (
  <fieldset>
    <input name={name} id={id} type={type} placeholder={placeholder} required />
  </fieldset>
);

const CardTextarea = ({ name, id, placeholder }) => (
  <fieldset>
    <textarea name={name} id={id} placeholder={placeholder} required></textarea>
  </fieldset>
);

const CardBtn = ({ className, type, value }) => (
  <fieldset>
    <button className={className} type={type} value={value}>{value}</button>
  </fieldset>
);

const CardProfileLinks = () => {
  const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

  return (
    <div className='card-social-links'>
      <ul className='social-links'>
        {profileLinks.map((link, index) => (
          <li key={index}><a href='#'><i className={`fa fa-${link}`}></i></a></li>
        ))}
      </ul>
    </div>
  );
};

const CardFront = () => (
  <div className='card-side side-front bg-primary'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-6'>
          <img src='https://source.unsplash.com/w8YICpz1I10/358x458' alt='Profile' />
        </div>
        <div className='col-xs-6 side-front-content'>
          <h2>Czech based</h2>
          <h1>UI/UX Designer</h1>
          <p>Andrey is driven by turning ideas into scalable and empowering experiences that solve real-life problems.</p>
          <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>
          <p>Over the years, Michael has been privileged to have worked with Adobe, Evernote, Square, and more.</p>
        </div>
      </div>
    </div>
  </div>
);

const CardBack = () => (
  <div className='card-side side-back'>
    <div className='container-fluid'>
      <h1>Let's get in touch!</h1>
      <form formAction='' className='card-form'>
        <div className='row'>
          <div className='col-xs-6'>
            <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
          </div>
          <div className='col-xs-6'>
            <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Your last name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Your email address' />
          </div>
          <div className='col-xs-6'>
            <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Subject' />
          </div>
        </div>
        <CardTextarea name='contactMessage' id='contactMessage' placeholder='Your message' />
        <CardBtn className='btn btn-primary' type='submit' value='Send message' />
      </form>
      <CardProfileLinks />
    </div>
  </div>
);

const Card = () => (
  <div className='card-container'>
    <div className='card-body'>
      <CardBack />
      <CardFront />
    </div>
  </div>
);



export default Card