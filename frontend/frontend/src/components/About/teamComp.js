import React from "react";
//import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import TeamCards from "./team-cards";
import FeatureCard from "../FeatureCard/feature-card";
import { useTranslation } from 'react-i18next';
const steps = [
  {
    title: "Dheeraj Sharma ",
    position:"Director of Emitence Realty & Developers LLP.",
    description: "At Emitence, we believe in challenging the normal way of doing things and pushing boundaries. Giving our absolute best is not just a target but a way of life for us. We aim to deliver projects that go beyond expectations and have a lasting positive impact on the people living there",
    image: "/images/Emitence_head.jpeg",
  },
  {
    title: "Sakshi Palival",
    position:"----Position----",
    description: "I work with a very driven and passionate team. Each person brings their commitment to the table. Together, we deal with the complexities of the industry, seeing challenges as opportunities to grow and improve.",
    image: "/images/Emitence_manager.jpeg",
  },
 
];
const Team = () => {
  const { t} = useTranslation()
  return (
    <div>
     
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
          
          <h2 className="home-features-heading heading2">
              Emitence Realty & Developers LLP
              </h2>
              <p className="bodySmall">
              Emitence Realty and Developers LLP is connecting Home buyers to the developers which suits their requirements. We at Emitence providing end to end services to the home buyers with Trust, Ethical Practices and Professionalism.

Emitence Realty and Developers LLP is a real estate advisory firm offering a one-stop platform for the Home Buyer’s which Include Realty Service , Home Loan Services & Interiores. We at Emitence believes to see a big dream and work to fulfill it, And now it’s our responsibility to full fill our Home Buyer’s Dream Home
              </p>
              <div className="home-container03_HOME">
              <FeatureCard
                heading={t("service_1")} 
                subHeading={t("service_1_1")}
              ></FeatureCard>
              <FeatureCard
                heading={t("service_2")}
                subHeading={t("service_2_2")}
              ></FeatureCard>
              <FeatureCard
                heading={t("service_3")}
                subHeading={t("service_3_3")}
              ></FeatureCard>
              <FeatureCard
                heading={t("service_4")}
                subHeading={t("service_4_4")}
              ></FeatureCard>
            </div>
            <div className="home-container02">
              
              <span className="overline">
                {/* <span>Conda Reddy Party</span> */}
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
              Introducing our team
              
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                    Team Emitence
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
                <TeamCards
                    image={step.image}
                    heading = {step.title}
                    position = {step.position}
                    subHeading={step.description}
                ></TeamCards>
              ))}
            </div>

          </div>
          <div className="home-container02">

          <h2 className="home-features-heading heading2">
              Process at Emitence
              </h2>
              <img src="/images/emitence_process.png" alt="Process Flowchart"  className="flow-chart" />
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
