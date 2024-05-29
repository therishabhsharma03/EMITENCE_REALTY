import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import gpsIcon from './gps.png'; // Import the custom icon image

// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PropertyMap = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/properties');
                setProperties(response.data);
            } catch (error) {
                console.error("There was an error fetching the properties!", error);
            }
        };

        fetchProperties();
    }, []);

    // Statically defined properties
    const staticProperties = [
        {
            image: 'images/img_1.jpg',
            projectName: 'Project One',
            price: '$500,000',
            type: 'Apartment',
            location: [19.0760, 72.8777] // Mumbai, Maharashtra, India
        },
        {
            image: 'images/img_2.jpg',
            projectName: 'Project Two',
            price: '$750,000',
            type: 'House',
            location: [19.0820, 72.8816] // Another location in Mumbai
        },
        {
            image: 'images/img_3.jpg',
            projectName: 'Project Three',
            price: '$600,000',
            type: 'Condo',
            location: [19.0728, 72.8826] // Another location in Mumbai
        },
        // Add more properties as needed with their respective coordinates
    ];

    const customIcon = new L.Icon({
        iconUrl: gpsIcon , // Provide your custom icon URL here
        iconSize: [70, 80], // Adjust the size as needed
    });

    // Merge fetched properties with static properties
    const mergedProperties = [...properties, ...staticProperties];
     const PropertyLabel = ({ property }) => (
        <div className="marker-label">
            <strong>{property.projectName}</strong><br />
            Price: {property.price}<br />
            Type: {property.type}<br />
        </div>
    );
    return (
        <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: "60vh", width: "100%" }} zoomControl={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />

            {mergedProperties.map((property, index) => (
               <Marker key={index} position={property.location} icon={customIcon}>

                  <Popup>
                      <strong>{property.projectName}</strong><br />
                      Price: {property.price}<br />
                      Type: {property.type}<br />
                      <img src={property.image} alt={property.projectName} style={{ maxWidth: "100%", height: "auto" }} />
                  </Popup>
 
          
              </Marker>
            ))}
        </MapContainer>
    );
};

export default PropertyMap;
