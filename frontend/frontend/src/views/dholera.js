import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from '../components/parallex/ParallaxComponent';
import './home.css';

const Dholera = (props) => {
  const history = useHistory();
  const isUserLoggedIn = !!localStorage.getItem('user');

  const handleClick = () => {
    if (!isUserLoggedIn) {
      history.push('/log');
    } else {
      history.push('/predictor');
    }
  };

  const handleClick1 = () => {
    history.push('/guide');
  };

  const { t } = useTranslation();
  const properties = [
    // Your properties data
  ];

  const [results, setResults] = useState([]);
  const data = [
    'apple',
    'banana',
    'grape',
    'orange',
    'pineapple',
    'strawberry',
    'watermelon'
  ];

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <ParallaxProvider>

      <div className="home-hero">
        <div className="heroContainer_dholera home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading2"></h1>
            <span className="home-hero-sub-heading bodyLarge"></span>
            <div className="home-btn-group"></div>
            <h2 className="home-features-heading heading1">
              Dholera
            </h2>
          </div>
        </div>
      </div>


      <div className="App">
        <div className="home-features_dholera">
          <div className="featuresContainer">
            <h2 className='bodyLarge goldText'>Why To Invest In Dholera?</h2>
            <div className='news'>
              <p className="bodySmall">Dholera is a city located in the Indian state of Gujarat. It is known for being
                part of the ambitious Dholera Special Investment Region (DSIR), which is one of
                the key projects under the Delhi-Mumbai Industrial Corridor (DMIC)</p>
              {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" /> */}
            </div>

          </div>
        </div>
        <ParallaxComponent image="/images/emitence_about.jpg" alignment="left" bg_align="right">
      

          <h2 className='bodyLarge goldText'>Planned Smart City</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall"> Dholera is designated as a Special Investment Region,
              intended to foster economic development by attracting investments in various
              sectors like manufacturing, infrastructure, and technology. 
              is actively involved in identifying prime commercial properties within the region,
              providing strategic locations for businesses and investors.</p>
              {/* <span className="goldText"> Emitence Realty </span> */}

          </div>
      
        </ParallaxComponent>
        

        <ParallaxComponent image="/images/emitence_dholera.png" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Geographical Location</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall justify">  Dholera is located approximately 100 kilometers southwest of Ahmedabad,
              the largest city in Gujarat. Its proximity to major urban centers and ports makes it a
              strategically advantageous location for industries <span className="goldText"> Emitence Realty </span>leverages this strategic
              location to provide comprehensive guidance on property investments, helping clients identify
              properties with promising returns.</p>

          </div>

        </ParallaxComponent>
        <section className="content-section">

        </section>
        <ParallaxComponent image="/images/dholera_3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Economic Opportunities</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall"> Dholera aims to attract both domestic and international investors
              by providing a conducive environment for businesses. The government offers various
              incentives and policy support to encourage investment in the region. <span className="goldText"> Emitence Realty </span>
              assists investors by providing expert guidance on lucrative commercial and residential
              property investments, ensuring clients maximize their returns.</p>

          </div>


        </ParallaxComponent>
        <div className="home-banner">
          <img src="/images/emitence_dholera_@.png" alt="team" className="Emitence_dholera_2" />
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              <span className='goldText'>Current Status</span>
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                As of the latest updates, significant progress has been made in infrastructure
                development, but the full realization of Dholera as a smart city is still in
                process. The ongoing work includes the construction of roads, utilities, and
                other basic infrastructure, with continuous efforts to attract investors and
                residents to the area.
              </span>
            </span>
          </div>
        </div>
        <section className="content-section">

        </section>
        <ParallaxComponent image="/images/emitence_dholera4.jpg" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Residential & Commercial Spaces</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall">The city will feature a mix of residential,
              commercial, and industrial zones, providing a balanced ecosystem for
              living, working, and leisure. <span className='goldText'>Emitence Realty</span> curates a diverse portfolio
              of residential properties, ensuring clients find luxurious and comfortable
              homes. Our team also specializes in identifying prime commercial properties,
              including office spaces, retail outlets, and industrial units, to cater
              to various business needs.</p>

          </div>

        </ParallaxComponent>
        <section className="content-section">

        </section>
        <ParallaxComponent image="/images/emitence_dholera5.png" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Utility Services</h2>
          <div className='news'>
            {/* <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" /> */}
            <p className="bodySmall">
              <ul><span className='goldText'>24/7 Water Supply </span>: Ensuring continuous and reliable water supply to all households and businesses.</ul>
              <ul><span className='goldText'>Efficient Waste Management </span>: Advanced systems for waste collection, segregation, and disposal to maintain cleanliness and hygiene.</ul>
              <ul><span className='goldText'>Uninterrupted Power Supply </span>: Reliable electricity supply with backup systems to ensure no disruptions.</ul>
            </p>

          </div>


        </ParallaxComponent>
      </div>
      <div className="home-features_dholera">
        <div className="featuresContainer">
          <h2 className='bodyLarge goldText'>Latest News Updates</h2>
          <div className='news1'>
            <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
            <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" />

          </div>
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline"><br /></span>
              <span className="home-features-sub-heading bodyLarge"></span>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Dholera;
