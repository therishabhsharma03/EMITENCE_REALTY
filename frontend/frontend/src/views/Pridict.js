// import React, { useState } from 'react';
// import './home.css';
// import '../../src/style.css'
// import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';
// const PredictionForm = () => {
//     const { t} = useTranslation();
//     const history = useHistory();
//     const [inputs, setInputs] = useState({
//         nitrogen: '',
//         phosphorus: '',
//         potassium: '',
//         temperature: '',
//         humidity: '',
//         ph: '',
//         rainfall: ''
//     });


//     const [prediction, setPrediction] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInputs(prevInputs => ({
//             ...prevInputs,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:4000/ml/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(inputs)
//             });
//             console.log(response)
//             if (!response.ok) {
//                 throw new Error('Network response was not ok.');
//             }
    
//             const responseData = await response.text(); // Read response body as text
//             const data = JSON.parse(responseData); // Parse the response data as JSON
//             console.log('Response Data:', data); // Log the response data
//             console.log('Response url:', data.img_url); // Log the response data
            
//             console.log('Response Data:', data.prediction); // Log the response data
//             if(data.prediction === 'None'){
//                 alert('According to the given data , condition is not suitable for any crop.')
//                 return
//             }else{

//               const r = data.url.replace(/['"]+/g, '');
//               // const image = data.img_url.replace(/['"]+/g, ''); 
//               // setImage(data.url)
//               history.push(`/${r}`)
//               setPrediction(data.prediction);
//             }
    
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
    
    

//     return (
//         <div className="home-hero">
//         <div className="heroContainer_prediction home-hero1">
//           <div className="home-container01">
//             <h1 className="home-hero-heading heading1">
//               {t("greeting")}
//             </h1>
//             <span className="home-hero-sub-heading bodyLarge">
//               <span>
//                 <span>
//                   <span>{t("sub_greeting")}</span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                 </span>
//                 <span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                 </span>
//               </span>
//               <span>
//                 <span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                 </span>
//                 <span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                 </span>
//               </span>
//             </span>
//             <div className="home-btn-group">
//             <form onSubmit={handleSubmit} className="prediction-form">
//             <input type="number" name="nitrogen" required value={inputs.nitrogen} onChange={handleChange} placeholder= {t("nitrogen_p")} />
//             <input type="number" name="phosphorus" required value={inputs.phosphorus} onChange={handleChange} placeholder= {t("phosphorus_p")} />
//             <input type="number" name="potassium" required value={inputs.potassium} onChange={handleChange} placeholder={t("potassium_p")} />
//             <input type="number" name="temperature" required value={inputs.temperature} onChange={handleChange} placeholder={t("temperature_p")} />
//             <input type="number" name="humidity" required value={inputs.humidity} onChange={handleChange} placeholder= {t("humidity_p")} />
//             <input type="number" name="ph" required value={inputs.ph} onChange={handleChange} placeholder= {t("ph_p")} />
//             <input type="number" name="rainfall" required value={inputs.rainfall} onChange={handleChange} placeholder={t("rainfall_p")} />
//             <button type="submit">{t("predict")}</button>

//             {prediction !== null && (
//                 <div className="prediction-result">
//                     <h3>Prediction Result:</h3>
//                     <p>{prediction}</p>
//                 </div>
//             )}
//         </form>
             
//             </div>
//           </div>
//         </div>
   
//             </div>
//     );
// };

// export default PredictionForm;

import React, { useState } from 'react';
import './home.css';
import '../../src/style.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const PredictionForm = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const [inputs, setInputs] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs before submitting
        const isValid = validateInputs();
        if (!isValid) {
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/ml/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json(); // Parse response data as JSON
            console.log('Response Data:', responseData);

            if (responseData.prediction === 'None') {
                alert('According to the given data, conditions are not suitable for any crop.');
            } else {
                const cropUrl = responseData.url.replace(/['"]+/g, '');
                history.push(`/${cropUrl}`);
                setPrediction(responseData.prediction);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const validateInputs = () => {
        // Define the allowed range for each input field
        const ranges = {
            nitrogen: { min: 10, max: 100 },
            phosphorus: { min: 10, max: 100 },
            potassium: { min: 10, max: 100 },
            temperature: { min: 10, max: 60 }, // Example temperature range in Celsius
            humidity: { min: 10, max: 97 },
            ph: { min: 5, max: 8 }, // pH range typically 0-14
            rainfall: { min: 50, max: 500 } // Rainfall range in mm
        };

        // Check each input against its defined range
        for (const [fieldName, value] of Object.entries(inputs)) {
            if (isNaN(value) || value < ranges[fieldName].min || value > ranges[fieldName].max) {
                alert('According to the given data, conditions are not suitable for any crop.');
                return false;
            }
        }

        return true; // All inputs are valid within the specified ranges
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    return (
        <div className="home-hero">
            <div className="heroContainer_prediction home-hero1">
                <div className="home-container01">
                    <h1 className="home-hero-heading heading1">
                        {t("greeting")}
                    </h1>
                    <div className="home-btn-group">
                        <form onSubmit={handleSubmit} className="prediction-form">
                            <input type="number" name="nitrogen" required value={inputs.nitrogen} onChange={handleChange} placeholder={t("nitrogen_p")} />
                            <input type="number" name="phosphorus" required value={inputs.phosphorus} onChange={handleChange} placeholder={t("phosphorus_p")} />
                            <input type="number" name="potassium" required value={inputs.potassium} onChange={handleChange} placeholder={t("potassium_p")} />
                            <input type="number" name="temperature" required value={inputs.temperature} onChange={handleChange} placeholder={t("temperature_p")} />
                            <input type="number" name="humidity" required value={inputs.humidity} onChange={handleChange} placeholder={t("humidity_p")} />
                            <input type="number" name="ph" required value={inputs.ph} onChange={handleChange} placeholder={t("ph_p")} />
                            <input type="number" name="rainfall" required value={inputs.rainfall} onChange={handleChange} placeholder={t("rainfall_p")} />
                            <button type="submit">{t("predict")}</button>

                            {prediction !== null && (
                                <div className="prediction-result">
                                    <h3>Prediction Result:</h3>
                                    <p>{prediction}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictionForm;
