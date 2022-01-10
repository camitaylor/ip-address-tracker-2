import React from 'react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import Map from './Map'


const MapContainer = ({lat, lng, position}) => {
  return (
      <LeafletMapContainer 
        className="map" 
        style={{height: '75vh'}} 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}>
        <Map lat={lat} lng={lng} />
      </LeafletMapContainer>
  )
}

export default MapContainer
