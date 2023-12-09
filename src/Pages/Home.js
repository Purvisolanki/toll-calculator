import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css';
import SelectVehicle from '../Components/SelectVehicle';
import FuelInfo from '../Components/FuelInfo';



function Home() {

    //to swap location
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');

    const handleSwapLocations = () => {

        const temp = location1;
        setLocation1(location2);
        setLocation2(temp);
    };



    return (
        <div>
            <section className='p-5 '  >
                <h1 style={{ fontWeight: '800', color: 'rgb(290, 201, 6)' }} className='text-center'>TOLL CALCULATOR</h1>

                <p className='mt-5'>Looking to calculate toll tax between cities in India? Use the India Toll Calculator App!
                    See trip cost breakdown - tolls, fuel and other charges,
                    toll plaza, discounts, etc. Travel on the cheapest or the
                    fastest routes to your destination. For all vehicles - car, pickup truck, truck, motorcycle, HCM,
                    EME - across the India national and state highways, toll roads, bridges, and tunnels!</p>
                <Row className='mt-5'>
                    <Col >

                        <form action="" className=''>
                            <Row>
                                <Col>
                                    <input value={location1} onChange={(e) => setLocation1(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: 'solid wheat' }} type="text" placeholder='Enter Starting Point' />
                                    <input value={location2} onChange={(e) => setLocation2(e.target.value)} className='mt-2' style={{ padding: '10px', borderRadius: '5px', border: 'solid wheat' }} type="text" placeholder='Enter Ending Point' />

                                </Col>

                                <Col style={{ marginTop: '2rem' }}>
                                    <Button onClick={handleSwapLocations} variant="outline-warning"> <i class="fa-solid fa-right-left" style={{ color: 'black' }}></i></Button>
                                </Col>


                                <SelectVehicle></SelectVehicle>

                                <div>
                                    <FuelInfo></FuelInfo>
                                </div>

                            </Row>

                        </form>
                    </Col>

                    
                    <Col className='mt-2'>
                        <img src="https://i.postimg.cc/zB48J7Lp/world-map-continents-oceans.webp" alt="" />
                    </Col>

                </Row>


            </section>
        </div>
    )
}

export default Home