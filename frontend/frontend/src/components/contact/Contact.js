import React, { useState } from 'react';
// import './App.css'; // Assuming you have a CSS file for styling

const ContactInfo = () => (
  <div className="contact-info">
    <div className="address mt-2">
      <i className="icon-room"></i>
      <h4 className="gold mb-2">Location:</h4>
      <p className="white">
        Office No:- A-342, Lodha Signet, Kolshet Road Thane <br />
        West Mumbai (Maharashtra)
      </p>
    </div>

    <div className="open-hours mt-4">
      <i className="icon-clock-o"></i>
      <h4 className="gold mb-2">Open Hours:</h4>
      <p className="white">
        10am–7:30pm<br />
        (Monday Closed)
      </p>
    </div>

    <div className="email mt-4">
      <i className="icon-envelope"></i>
      <h4 className="gold mb-2">Email:</h4>
      <p className="white">admin@emitencerealty.com</p>
    </div>

    <div className="phone mt-4">
      <i className="icon-phone"></i>
      <h4 className="gold mb-2">Call:</h4>
      <p className="white">+91 91591 55237</p>
    </div>
  </div>
);

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    location: 'Mumbai',
    flatType: '',
    budget: '10 To 15 Cr',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-slide">
          <div
            className="img overlay"
            style={{ backgroundImage: "url('images/table.jpg')" }}
          ></div>
        </div>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center">
              <h1 className="heading" data-aos="fade-up">
                Easiest way to find your dream home
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <ContactInfo />
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200" id="contact">
                <form id="flatEnquiryForm" onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  /><br /><br />

                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="text"
                    id="contactNumber"
                    placeholder="Phone Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  /><br /><br />

                  <label htmlFor="location">Preferred City & Location:</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Thane">Thane</option>
                  </select><br /><br />

                  <label htmlFor="flatType">Typology:</label>
                  <label htmlFor="1bhk">
                    <input
                      type="radio"
                      id="1bhk"
                      name="flatType"
                      value="1 RK"
                      checked={formData.flatType === '1 RK'}
                      onChange={handleChange}
                    />1 RK 
                  </label>
                  <label htmlFor="2bhk">
                    <input
                      type="radio"
                      id="2bhk"
                      name="flatType"
                      value="5 BHK Jodi"
                      checked={formData.flatType === '5 BHK Jodi'}
                      onChange={handleChange}
                    />5 BHK Jodi 
                  </label>
                  <label htmlFor="3bhk">
                    <input
                      type="radio"
                      id="3bhk"
                      name="flatType"
                      value="Penthouse"
                      checked={formData.flatType === 'Penthouse'}
                      onChange={handleChange}
                    />Penthouse  
                  </label>
                  <br />

                  <label htmlFor="budget">Budget:</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="10 To 15 Cr">10 To 15 Cr</option>
                    <option value="15 to 20 Cr">15 to 20 Cr</option>
                  </select><br /><br />

                  <label htmlFor="remarks">Message:</label>
                  <input
                    type="text"
                    id="remarks"
                    placeholder="Drop a message (optional)"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                  /><br /><br />

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact
