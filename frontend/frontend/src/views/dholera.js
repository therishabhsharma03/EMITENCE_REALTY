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
        <div className="home-banner">
          <img src="/images/emitence_dholera_@.png" alt="team" className="Emitence_dholera_2" />
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              {t("home_page_empower")}
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                {t("home_page_empower_sub")}
              </span>
            </span>
          </div>
        </div>
        <div className="home-features_dholera">
          <div className="featuresContainer">
            <h2 className='bodyLarge'>The new era</h2>
            <div className='news'>
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
        <div className="App">
          <ParallaxComponent image="/images/emitence_about.jpg" alignment="left">
          <h2 className='bodyLarge'>The new era</h2>
            <div className='news'>
              <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
              
            </div>

          </ParallaxComponent>
          <section className="content-section">
     
          </section>
          <ParallaxComponent image="/images/emitence_dholera.png"alignment="right">

          </ParallaxComponent>
          <section className="content-section">

          </section>
        </div>
      
    </ParallaxProvider>
  );
};

export default Dholera;
