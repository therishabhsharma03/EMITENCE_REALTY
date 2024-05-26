import React from "react";
//import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import TeamCards from "./team-cards";
import { useTranslation } from "react-i18next";
import '../../views/home.css';
import '../../style.css'
const steps = [
  {
    title: "rice",
    description: "rd",
    image: "/img/rice.jpg",
    url:"/rice"
    
  },
  {
    title: "maize",
    description: "md",
    image: "/img/maize.jpg",
    url:"/maize"
  },
  {
    title: "wheat",
    description: "wd",
    image: "/img/wheat.jpeg",
    url:"/wheat"
  },
  {
    title: "kidneybeans",
    description: "kbd",
    image: "/img/kidneybeans.jpeg",
    url:"/kidneybeans"
  },
  {
    title: "watermelon",
    description: "wmd",
    image: "/img/watermelon.jpg",
    url: "watermelon"
  },
  {
    title: "muskmelon",
    description: "mmd",
    image: "/img/muskmelon.jpg",
    url:"/muskmelon"
  },
  {
    title: "jute",
    description: "jd",
    image: "/img/jute.jpeg",
    url:"/jute"
  },
  {
    title: "coffee",
    description: "cofd",
    image: "/img/coffee.jpeg",
    url:"/coffee"
  },
  {
    title: "chickpeas",
    description: "cpd",
    image: "/img/chickpeas.jpeg",
    url:"/chickpeas"
  },
  {
    title: "banana",
    description: "bad",
    image: "/img/banana.jpeg",
    url:"/banana"
  },
  {
    title: "blackgram",
    description: "bgd",
    image: "/img/blackgram.jpeg",
    url:"/blackgram"
  },
  {
    title: "coconut",
    description: "cod",
    image: "/img/coconut.jpeg",
    url:"/coconut"
  },
  {
    title: "apple",
    description: "ad",
    image: "/img/apple.jpeg",
    url:"/apple"
  },
  {
    title: "cotton",
    description: "cotd",
    image: "/img/cotton.jpeg",
    url:"/cotton"
  },
  {
    title: "orange",
    description: "od",
    image: "/img/orange.jpeg",
    url:"/orange"
  },
  {
    title: "lentil",
    description: "ld",
    image: "/img/lentil.jpeg",
    url:"/lentil"
  },
  {
    title: "mango",
    description: "mad",
    image: "/img/mango.jpeg",
    url:"/mango"
  },
  {
    title: "moongbeans",
    description: "mbd",
    image: "/img/moongbeans.jpeg",
    url:"/moongbeans"
  },
  {
    title: "mothbeans",
    description: "mtbd",
    image: "/img/mothbeans.jpeg",
    url:"/mothbeans"
  },
  {
    title: "grapes",
    description: "gd",
    image: "/img/grapes.jpeg",
    url:"/grapes"
  },
  {
    title: "papaya",
    description: "pd",
    image: "/img/papaya.jpeg",
    url:"/papaya"
  },
  {
    title: "pigeonpeas",
    description: "ppd",
    image: "/img/pigeonpeas.jpeg",
    url:"/pigeonpeas"
  },
  {
    title: "pomegrate",
    description: "pgd",
    image: "/img/pomegrate.jpeg",
    url:"/pomegranate"
  },


];

const Team = () => {
  const { t } = useTranslation();
  return (
    <div>
     
      <div className="home-features">
        <div className="featuresContainer1">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                {/* <span>Conda Reddy Party</span> */}
                <br></br>
              </span>
            
              <span className="home-features-sub-heading bodyLarge">
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
            <div className="home-container03">
              {steps.map((step, index) => (
            < a href={step.url} className="home-features-button buttonLarge">
                <TeamCards
                    image={step.image}
                    heading = {t(step.title)}
                    subHeading={t(step.description)}
                    
                ></TeamCards>
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
