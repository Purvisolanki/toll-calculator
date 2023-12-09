import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Datetime from 'react-datetime';


function FuelInfo() {

    //fuel info
    const [showOptionalFields, setShowOptionalFields] = useState(false);

    const handleToggleOptionalFields = () => {
        setShowOptionalFields(!showOptionalFields);
    };





    //milage table
    const [mileageData, setMileageData] = useState({ city: '', highway: '' });

    const handleInputChange = (columnName, value) => {
        setMileageData((prevData) => ({
            ...prevData,
            [columnName]: value,
        }));
    };



    //fuel price
    const [fuelPrice, setFuelPrice] = useState('');


    const handleFuelPriceChange = (e) => {
        setFuelPrice(e.target.value);
    };






    //departure date n time
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateTimeChange = (momentObj) => {
        setSelectedDateTime(momentObj.toDate());
    };





    return (
        <div>

            <Button variant='outline-warning' className='w-50 mt-4 text-dark' onClick={handleToggleOptionalFields}>Optional Fuel Info</Button>
            {showOptionalFields && (
                <div>

                    <table className='mt-4' >

                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Highway</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>
                                    <input
                                        style={{ borderRadius: '5px', border: 'solid wheat' }}
                                        className='w-75'
                                        type="text"
                                        placeholder='Milage km/l'
                                        value={mileageData.city}
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        className='w-75'
                                        style={{ borderRadius: '5px', border: 'solid wheat' }}
                                        type="text"
                                        placeholder='Milage km/l'
                                        value={mileageData.highway}
                                        onChange={(e) => handleInputChange('highway', e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>

                        <input
                            className='w-75 mt-4 p-1'
                            style={{ borderRadius: '5px', border: 'solid wheat' }}
                            type="number"
                            value={fuelPrice}
                            onChange={handleFuelPriceChange}
                            placeholder="Fuel price per liter"
                        />
                    </div>

                    <div className='mt-4'>
                        <h6 style={{ fontWeight: '700' }}>Departure Date & Time</h6>

                        <div>

                            <Datetime
                                value={selectedDateTime}
                                style={{ border: 'solid wheat' }}
                                className='w-25'
                                onChange={handleDateTimeChange}
                                dateFormat="DD/MM/YYYY"
                                timeFormat="HH:mm"
                            />
                        </div>
                    </div>



                </div>


            )}

        </div>
    )
}

export default FuelInfo