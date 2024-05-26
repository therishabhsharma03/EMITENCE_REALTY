import React from 'react'
import FeatureCard from '../FeatureCard/feature-card';
import '../guide/guide.css';
import {useTranslation} from "react-i18next";

const KidneyBeans_Info = () => {
  const { t } = useTranslation();
  return (
    <div className="guide-container">
      <div className="home-features">
        <div className="featureContainer">
          <div className="home-features1">
            <h1 className="home-banner-heading heading2 info-head">
              Kidney Beans
            </h1>
            <div className="home-container03">
              <FeatureCard
                heading="Weather Requirements"
                subHeading="Kidney beans are a warm-season crop that thrives in temperate to subtropical climates. The ideal temperature range for their cultivation is between 20°C and 30°C. They require a well-distributed rainfall of around 500-700 mm during the growing season, with dry conditions during the maturation and harvesting stages."
              ></FeatureCard>
              <FeatureCard
                heading="Soil Details"
                subHeading="Kidney beans can be grown in a variety of soil types, but they prefer well-drained, fertile soils with a slightly acidic to neutral pH range of 6.0 to 7.5. Loamy soils with good water-holding capacity and adequate drainage are ideal for their cultivation."
              ></FeatureCard>
              <FeatureCard
                heading="Crop Varieties"
                subHeading="India has a range of kidney bean varieties suitable for different regions and growing conditions. Some popular varieties include Rajma Chitra, Rajma Shvet, Rajma Kasturi, Rajma Pahadi, and Rajma Panchmukhi."
              ></FeatureCard>
              <FeatureCard
                heading="Land Preparation"
                subHeading="Proper land preparation is essential for successful kidney bean cultivation. It involves deep plowing or tillage to break up the soil and incorporate organic matter. Raised beds or ridges can be prepared to improve drainage and aeration."
              ></FeatureCard>
              <FeatureCard
                heading="Seed Information"
                subHeading="Selecting high-quality, disease-free seeds from reliable sources is crucial for a good kidney bean crop. Seed treatment with appropriate fungicides or insecticides can help protect the seeds from pests and diseases during germination and early growth stages."
              ></FeatureCard>
              <FeatureCard
                heading="Sowing Information"
                subHeading="Kidney beans can be sown directly in the field or raised in nursery beds and then transplanted. The recommended sowing depth is 2-3 cm, with a spacing of 45-60 cm between rows and 10-15 cm between plants within a row."
              ></FeatureCard>
              <FeatureCard 
                heading="Fertilizer Usage"
                subHeading="Kidney beans are leguminous crops that can fix atmospheric nitrogen through root nodules. However, they still require adequate levels of phosphorus, potassium, and other essential nutrients for optimal growth and yield. Farmers should conduct soil testing and apply appropriate fertilizers based on the recommendations."
              ></FeatureCard>
              <FeatureCard 
                heading="Irrigation Details"
                subHeading="Kidney beans require regular irrigation, especially during the flowering and pod formation stages. Drip irrigation or furrow irrigation methods can be employed to ensure efficient water use and minimize water wastage."
              ></FeatureCard>
              <FeatureCard 
                heading="Pest and Disease Management"
                subHeading="Kidney beans are susceptible to various pests and diseases, including bean aphids, pod borers, rust, and bacterial blights. Integrated Pest Management (IPM) strategies, such as crop rotation, use of resistant varieties, biological control agents, and judicious use of pesticides, should be implemented to protect the crop."
              ></FeatureCard>
              <FeatureCard 
                heading="Harvest Method"
                subHeading="Kidney beans are typically harvested when the pods turn yellow or dry and the seeds rattle inside. Harvesting can be done manually or mechanically, depending on the scale of cultivation. Proper drying, threshing, and storage techniques are crucial to maintain the quality and longevity of the harvested beans."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="bodySmall home-text89">
              © Crophecy, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default KidneyBeans_Info;