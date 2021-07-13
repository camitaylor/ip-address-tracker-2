import React from 'react';
import useFetch from '../hooks/useFetch';
//import Search from './Search';

const Info = ({searchValue}) => {

    const res = useFetch(`https://geo.ipify.org/api/v1?apiKey=at_2U9EnXiYCVcq3fL6WUdKU23QMEMED&ipAddress=${searchValue}`);
    if (!res.response) {
      return <div>Loading...</div>
    }

    const { city, region, postalCode, timezone } = res.response.location;
    const ipAddress = res.response.ip;
    const isp = res.response.isp;
    
  return (
    <div className='container'>
      <div className='row d-flex align-items-center mt-1 mb-2'>
        <div className="col">
          <h5>IP Address</h5>
          <h6>{ipAddress}</h6>
        </div>
        <div className="col">
          <h5>Location</h5>
          <h6>{city}, {region}</h6> 
          <h6>{postalCode}</h6>
        </div>
        <div className="col">
          <h5>Time Zone</h5>
          <h6>{timezone}</h6>
        </div>
        <div className="col">
          <h5>ISP</h5>
          <h6>{isp}</h6>
        </div>
      </div>
    </div>
  )
}

export default Info
