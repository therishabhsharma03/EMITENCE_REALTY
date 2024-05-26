import React from "react";

const SectionHeaders = (props) => {
  return (
    <div>
      <h3 className="uppercase text-gray-500 font-semibold">
        {props.subHeader}
      </h3>
      <h2 className="text-green font-bold text-4xl italic">
        {props.mainHeader}
      </h2>
    </div>
  );
};

export default SectionHeaders;
