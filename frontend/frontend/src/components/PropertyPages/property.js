import { useLocation } from 'react-router-dom';

export default function PropertyPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyString = searchParams.get('property');
  const property = JSON.parse(decodeURIComponent(propertyString));

  // Use the `property` object values to dynamically render content
  return (
    <div>
      <h2>{property.projectName}</h2>
      <p>Price: {property.price}</p>
      <p>Type: {property.type}</p>
      <p>Location: {property.location}</p>
      {/* Render other content based on property values */}
    </div>
  );
}