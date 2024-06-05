import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../views/home.css'
import '../../style.css'
const WelcomeText = () => {
  const { t } = useTranslation();
  return (
    <div>
         <div className="home-hero">
        <div className="heroContainer_about home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              {t("thrive")}
            </h1> 
            ABOUT US
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  {/* <span className='mar'>{t("our_project_about")}</span> */}
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