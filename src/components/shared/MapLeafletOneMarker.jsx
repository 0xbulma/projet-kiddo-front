import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';
import './mapLeaflet.css';

export default function MapLeafletOneMarker(props) {
  let { inputGPS } = props;

  console.log('finalGPS : ', inputGPS);
  const finalGPS = inputGPS.length === 2 ? [inputGPS[1], inputGPS[0]] : [51.505, -0.09];

  console.log('finalGPS : ', inputGPS);
  return (
    <div className='rounded-lg overflow-hidden'>
      <MapContainer style={{ height: '300px' }} center={finalGPS} zoom={13} scrollWheelZoom={false} zoomControl={false}>
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> - Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <Marker position={finalGPS}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
