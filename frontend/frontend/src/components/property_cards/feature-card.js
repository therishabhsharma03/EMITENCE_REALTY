// PropertyCard.js
import React from 'react';
import PropTypes from 'prop-types';
// import './PropertyCard.css'; // Optional: for styling the component
import './feature-card.css';

const PropertyCard = ({ image, projectName, price, type, location }) => {
  return (
    <div className="property-card">
      <img src={image} alt={projectName} className="property-card-image" />
      <div className="property-card-details">
        <h2 className="property-card-title">{projectName}</h2>
        <p className="property-card-price">{price}</p>
        <p className="property-card-type">{type}</p>
        <p className="property-card-location">{location}</p>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PropertyCard;
