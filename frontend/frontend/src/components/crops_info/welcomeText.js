import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../views/home.css'

const WelcomeText = () => {
  const { t } = useTranslation();
  return (
    <div>
         <div className="home-hero">
        <div className="heroContainer_cp home-hero1">
          <div className="home-container">
            <h1 className="home-hero-heading heading1">
              {t("welcome_crops_guide")}
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span className='mar'>{t("description_crops_guide")}</span>
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
    </div>
  )
}

export default WelcomeText