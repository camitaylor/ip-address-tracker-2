import React, {useState} from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Search from './components/Search';
import useFetch from './hooks/useFetch';
import Info from './components/Info';
import MapContainer from './components/MapContainer';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [lat, setLat] = useState(38);
  const [lng, setLng] = useState(-94);
  console.log(lat)
  console.log(lng)

  // setLat(res.response.location.lat);
  // setLng(res.response.location.lng);

  return (
    <div>
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Info searchValue={searchValue} setLat={setLat} setLng={setLng} />
      <MapContainer lat={lat} lng={lng} />
    </div>
  )
}

export default App;