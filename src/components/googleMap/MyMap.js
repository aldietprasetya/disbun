import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: 'full',
  height: '200px',
};

const center = {
  lat: -6.916955,
  lng: 107.609147,
};

function MyMap() {

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript
      id="google-map-script"
      googleMapsApiKey="AIzaSyDUNfdAhSGykrwNgnI-tEsWETdRAOHUdwc"
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
