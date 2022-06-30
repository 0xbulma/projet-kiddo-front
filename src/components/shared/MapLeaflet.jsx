import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';

export default function MapLeaflet(props) {

  return (
    <div className='rounded-lg overflow-hidden'>
    <MapContainer style={{height:300}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
      <ZoomControl position='topright' />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>


    </div>
 
  );
}
