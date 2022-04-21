import React, {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';
import MapContainer from './components/MapContainer';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [lat, setLat] = useState(38);
  const [lng, setLng] = useState(-94);
  
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