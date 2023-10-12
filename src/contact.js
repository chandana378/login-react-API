import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to get in touch with us. We are here to assist you.
      </p>
      <h2>Contact Information</h2>
      <ul>
        <li>
          <strong>Address:</strong> India
        </li>
        <li>
          <strong>Email:</strong> info@example.com
        </li>
        <li>
          <strong>Phone:</strong> 1234567891        </li>
      </ul>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
