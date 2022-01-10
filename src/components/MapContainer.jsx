import React, { useState } from 'react';
// import useFetch from '../hooks/useFetch';
// import Info  from './Info';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import Map from './Map'


const MapContainer = ({lat, lng, position}) => {
  return (
      <LeafletMapContainer className="map" style={{height: '50vh'}} center={position} zoom={13} scrollWheelZoom={false}>
      <Map lat={lat} lng={lng} />
    </LeafletMapContainer>
  )
}

export default MapContainer
