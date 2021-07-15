import React, {useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Info = ({searchValue, setLat, setLng}) => {
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [timezone, setTimezone] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [isp, setIsp] = useState('');

    const res = useFetch(`https://geo.ipify.org/api/v1?apiKey=at_2U9EnXiYCVcq3fL6WUdKU23QMEMED&ipAddress=${searchValue}`);
    
    
    useEffect(() => {
      if(res.response) {
      
      setCity(res.response.location.city)
      setIpAddress(res.response.ip)
      setIsp(res.response.isp)
      setLat(res.response.location.lat)
      setLng(res.response.location.lng)
      setRegion(res.response.location.region)
      setTimezone(res.response.location.timezone)
      }
    }, [res]);

    if (!res.response) {
      console.log(searchValue)
      return <div>Loading...</div> 
    }
  
    
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

export default Info;
