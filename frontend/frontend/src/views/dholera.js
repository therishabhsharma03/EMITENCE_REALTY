import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import "../i18n.js";
import { useHistory, Link } from 'react-router-dom'
import './home.css';
import FeatureCard from '../components/FeatureCard/feature-card'
import Question1 from '../components/question1'
import './home.css'
//import MyForm from '../components/Form'
import PropertyCard from '../components/property_cards/feature-card.js'
import PropertyMap from '../components/map/map.js'
import { useState } from 'react';
import SearchBar from '../components/SearchBar/searchbar.js';
import Collage from '../components/collage/collage.js';
const Dholera = (props) => {
  const history = useHistory();

  const isUserLoggedIn = !!localStorage.getItem('user');

  const handleClick = () => {
    {!isUserLoggedIn&&(
      history.push('/log')
    )}
    {isUserLoggedIn&&(
      history.push('/predictor')
    )}
  };

  const handleClick1 = () => {
    history.push('/guide')
  }


  const { t} = useTranslation()
  const properties = [
    {
      image: 'images/img_2.jpg',
      projectName: 'Project One',
      price: '500,000',
      type: 'Apartment',
      location: 'Thane'
    },
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Mumbai'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
    ,
    {
      image: 'images/img_2.jpg',
      projectName: 'Project Two',
      price: '$750,000',
      type: 'House',
      location: 'Thane'
    }
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
    <div className="home-container">
      {/* <Helmet>
        <title>CroPhecy</title>
        <meta property="og:title" content="Fitting Devoted Jackal" />
      </Helmet> */}
      <div className="home-hero">
        <div className="heroContainer_dholera home-hero1">



      {/* <h1>Ready to find your dream property? Choose your perfect location:</h1> */}
          <div className="home-container01">
            <h1 className="home-hero-heading heading2">
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  {/* <span>{t("sub_greeting")}</span> */}


                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                        />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                      />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                        />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                        />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                        />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                        }}
                      />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              {/* <button className="buttonFilled" onClick={handleClick}>{t("sub_greeting_btn1")}</button>
              <button className="buttonFlat" onClick={handleClick1}>{t("sub_greeting_btn2")}→</button> */}
            </div>
              <h2 className="home-features-heading heading1">
                      {/* {t("greeting")}  */} Dholera 
              </h2>
          </div>
        </div>
      </div>

      <div className="home-banner">
    
        <img src="/images/emitence_dholera_@.png" alt="team"  className="Emitence_dholera_2" />
        
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
           {t("home_page_empower")}
          </h1>
         
          <span className="home-banner-sub-heading bodySmall">
                {/* <image src="images/pngegg.png"/> */}
            <span>
              <span>
                
                 {t("home_page_empower_sub")}
                

              </span>
  
            </span>

          </span>
        </div>
      </div>
            <div className="home-features_dholera">
        <div className="featuresContainer">
          <h2 className='bodyLarge'>The new era</h2>
            {/* The first smart city of India */}

            <div className='news'>
            <img src="/images/dholera_news2.jpg" alt="team"  className="Emitence_dholera_news" />
            <img src="/images/dholera_news1.jpeg" alt="team"  className="Emitence_dholera_news" />
            </div>
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                {/* <span>{t("features")}</span> */}
                <br></br>
              </span>
              <span className="home-features-sub-heading bodyLarge">
                      {/* ****************************************************************** */}
                      {/* <div className='map'>

                              <PropertyMap></PropertyMap>
                      </div> */}
                      
                      {/* ************************************************************************* */}
                <span>
                  <span>
                    <span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
         
            
          </div>
        </div>
     {/* .. */}
      </div>
      

    </div>
  )
}

export default Dholera
