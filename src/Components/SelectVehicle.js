import React, { useState } from 'react'


function SelectVehicle() {
    //to select vehicle
    const [selectedVehicle, setSelectedVehicle] = useState('');

    const handleVehicleChange = (event) => {
        setSelectedVehicle(event.target.value);
    };
  return (
    <div>
<label htmlFor="">
                                    <br />
                                    <select style={{ fontSize: '18px', borderRadius: '5px', border: 'solid wheat' }} value={selectedVehicle} onChange={handleVehicleChange}>
                                        <option value="">Select Vehicle</option>
                                        <option value="car">Car/Jeep/Van/SUV</option>
                                        <option value="truck">Taxi</option>
                                        <option value="truck">Truck</option>
                                        <option value="bus">Bus</option>
                                        <option value="two-wheeler">Two-Wheeler</option>
                                        <option value="heavy-vehicle">Heavy Vehicle</option>
                                    </select>
                                </label>
    </div>
  )
}

export default SelectVehicle