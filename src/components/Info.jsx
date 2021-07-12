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
    
  //   const [dataValues, setDataValues] = useState({
  //     ipAddress: '',
  //     city: '',
  //     region: '',
  //     postalCode: '',
  //     timezone: '',
  //     isp: '',
  //   });

  // const dataReceived = () => {
  //   setDataValues(dataValues)
  // }
    

  return (
    <div className="info-container">
      <ul>
        <li className="item">IP ADDRESS</li>
        <h4>{ipAddress}</h4>
        <div className="vl"></div>
        <li className="item">LOCATION</li>
        <h4>{city}, {region}</h4>
        <h4>{postalCode}</h4>
        <div className="vl"></div>
        <li className="item">TIME ZONE</li>
        <h4>{timezone}</h4>
        <div className="vl"></div>
        <li className="item">ISP</li>
        <h4>{isp}</h4> 
      </ul>
    </div>
  )
}

export default Info
