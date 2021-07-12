import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvents } from 'react-leaflet';

const Map = () => {

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
    },
  })
  
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

return(
    <MapContainer style={{height: "50vh"}} center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
)};

  
export default Map;
