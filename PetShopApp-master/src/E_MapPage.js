import React, { Component } from 'react';
import MapContainer from './DcomponentMapPage/MapContainer';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };


// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12155566.858958283!2d-96.22314543850278!3d39.51816341752782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQvtC10LTQuNC90LXQvdC90YvQtSDQqNGC0LDRgtGLINCQ0LzQtdGA0LjQutC4!5e0!3m2!1sru!2skz!4v1666280373674!5m2!1sru!2skz',
//     googleMapsApiKey: "YOUR_API_KEY"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       { /* Child components, such as markers, info windows, etc. */ }
//       <></>
//     </GoogleMap>
//     ) : <></>
// }


function Linkmap() {
  return (
        <div className='App'>
           <MapContainer/>

           {/* <Map 
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          /> */}
        </div>
  );
}

export default Linkmap;