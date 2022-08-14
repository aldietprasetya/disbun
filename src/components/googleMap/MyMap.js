import Reactm, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: 'full',
  height: '200px',
};

function MyMap({locCallback, longitude='', latitude=''}) {

  let [center, setCenter] = useState({
    lat: -6.902462534905781,
    lng: 107.61869609355927
  })

  useEffect(() => {
    setLoc({
      lat: parseFloat(latitude == '' ? 0 : latitude),
      lng: parseFloat(longitude == '' ? 0 : longitude)
    }, 'callback')
  }, [longitude,latitude])

  function setLoc(loc, type) {
    setCenter({
      lat: type ? loc.lat : loc.latLng.lat(),
      lng: type ? loc.lng : loc.latLng.lng()
    })
  }

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript
      id="google-map-script"
      googleMapsApiKey="AIzaSyDUNfdAhSGykrwNgnI-tEsWETdRAOHUdwc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={7}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          setLoc(e);
          locCallback(e);
        }}
        initialCenter={center ? (
          { lat: center.lat, lng: center.lng}
        ):({ lat: -6.902462534905781, lng: 107.61869609355927 })}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          position={center ? (
            { lat: center.lat, lng: center.lng}
          ):({ lat: -6.902462534905781, lng: 107.61869609355927 })}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
