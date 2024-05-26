
import { IoIosPartlySunny } from "react-icons/io";
import SectionHeaders from './SectionHeaders';
import { TbTemperatureSun } from "react-icons/tb";
import { IoRainySharp } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { LuWheatOff } from "react-icons/lu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useTranslation} from 'react-i18next';




// const { t } = useTranslation();
const cropData = {
    wheat: {

      wr: "wheat_w",
      sd :"wheat_sd",
      cv: "wheat_cv",
      lp: "wheat_lp",
      si: "wheat_si",
      soi: "wheat_soi",
      fu: "wheat_fu",
      id: "wheat_id",
      pd: "wheat_pd",
      hm: "wheat_hm",
      hm: "wheat_hm",
    },   
    // Add data for other crops here...
  };

  function createData(name, quantity) {
    return { name, quantity};
  }
 

  const rows = [
    createData("Trichoderma","5-10 gm"),
    createData("Chlorpyriphos","5 ml"),
    
  ];

  const Hero = ({ cropName }) => {
    const {t}=useTranslation();
    const { wr,sd,cv,lp,si,soi,fu,id,pd,hm } = cropData[cropName] || {};
    const rows = [
      { name: "Urea", quantity: 110 },
      { name: "DAP", quantity: 27 },
      { name: "SSP", quantity: 75 },
      { name: "MOP", quantity: 20 },
      { name: "ZINC", quantity: "-" },
    ];
  
    const rows1 = [
      { name: "Nitrogen", quantity: 110 },
      { name: "PHOSPHORUS", quantity: 27 },
      { name: "POTASH", quantity: 75 },
    ];

  return (
    <div>

   
<section className="hero md:mt-4 max-w-4xl mx-auto  p-4">
        <div className="py-8 md:py-12">
            <h1 className="text-5xl font-semibold">
                
                <span className="text-primary">
                {t(`${cropName}`)}
                </span>
                <br />
                {/* <div className="text-xl flex pt-1"><div className="pr-2"><IoIosPartlySunny/></div>20 MAY - 5 JUN</div> */}
            </h1>
           
            
        </div>
    </section>
    <div className="max-w-4xl mx-auto p-4">
      <div className='text-center'>
        <SectionHeaders subHeader="Our Climate" mainHeader="Weather" />
      </div>
      <div className="table-row">
        <div className="table-cell">
          <div className="icon"><TbTemperatureSun /></div>
          <div className="label">{t("Temperature")}</div>
          <div className="value"> {t(`${cropName}_temp`)}</div>
        </div>
        <div className="table-cell">
          <div className="icon"><IoRainySharp /></div>
          <div className="label">{t("Rainfall")}</div>
          <div className="value"> {t(`${cropName}_rain`)}</div>
        </div>
        <div className="table-cell">
          <div className="icon"><PiPlant /></div>
          <div className="label">{t("STemp")}</div>
          <div className="value"> {t(`${cropName}_stemp`)}</div>
        </div>
        <div className="table-cell">
          <div className="icon"><LuWheatOff /></div>
          <div className="label">{t("HTemp")}</div>
          <div className="value"> {t(`${cropName}_htemp`)}</div>
        </div>
                {t(`${cropName}_wr`)}
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Soil" mainHeader="Details" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_sd`)}
          </p>
        </div>
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Crop" mainHeader="Varieties" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_cv`)}
          </p>
        </div>
      </div>
    </div>
    
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Land" mainHeader="Preparation" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_lp`)}
          </p>
        </div>
      </div>
    </div>
   
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Seed" mainHeader="Information" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_si`)}
          </p>
        </div>
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Information" mainHeader="Sowing" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_soi`)}
          </p>
        </div>
      </div>
    </div>

    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Usage" mainHeader="Fertilizer" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_fu`)}
          </p>
        </div>
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Weed" mainHeader="Control" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_pd`)}
          </p>
        </div>
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Irrigation" mainHeader="Details" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_id`)}
          </p>
        </div>
      </div>
    </div>
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Harvest" mainHeader="Method" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
          {t(`${cropName}_hm`)}
          </p>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Hero