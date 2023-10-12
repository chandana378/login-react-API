import React from 'react';
import homeImage from './home-image.jpg'; // 

function Home() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>
        Explore our website to learn more about our services, products, and how we can help you achieve your goals.
      </p>
      <div>
        <img src={homeImage} alt="Company Building" /> {/* Display the image */}
      </div>
      <p>
        For any inquiries or to get started with our services, please <a href="/contact">contact us</a>.
      </p>
    </div>
  );
}

export default Home;
