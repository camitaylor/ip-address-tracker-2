import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const Map = ({lat, lng}) => {
  const map = useMap();
  
  const position = [lat, lng];

  useEffect(() => {
    map.setView(position)
  }, [lat,lng])

  return(
    <div className='map'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          You are here
        </Popup>
      </Marker>
    </div>
  )
}

export default Map;
