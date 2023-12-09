// import React, { useState } from 'react';

// const TollCalculator = () => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleTooltipToggle = () => {
//     setShowTooltip(!showTooltip);
//   };

//   return (
//     <div>
//       {/* Your toll calculator components go here */}
//       <button onClick={handleTooltipToggle}>Show Tooltip</button>

//       {showTooltip && (
//         <div className="tooltip">
//           <p>Factors Affecting Toll Costs:</p>
//           <ul>
//             <li>Distance Traveled</li>
//             <li>Vehicle Type</li>
//             {/* Add more factors and explanations as needed */}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TollCalculator;







import React, { useState } from 'react';

const LocationForm = () => {
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');

  const handleSwapLocations = () => {
   
    const temp = location1;
    setLocation1(location2);
    setLocation2(temp);
  };

  return (
    <div>
      <label>
        Location 1:
        <input
          type="text"
          value={location1}
          onChange={(e) => setLocation1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Location 2:
        <input
          type="text"
          value={location2}
          onChange={(e) => setLocation2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSwapLocations}>Swap Locations</button>
    </div>
  );
};

export default LocationForm;





