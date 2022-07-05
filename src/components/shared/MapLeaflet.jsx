import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';

export default function MapLeaflet(props) {
  const { inputGPS } = props;
  const gps = inputGPS.length === 2 ? [inputGPS[1], inputGPS[0]] : [51.505, -0.09];

  return (
    <div className='rounded-lg overflow-hidden'>
      <MapContainer style={{ height: '300px' }} center={gps} zoom={13} scrollWheelZoom={false} zoomControl={false}>
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> - Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <Marker position={gps}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export function MapLeafletMultipleMarkers(props) {
  let { inputGPS, mainGPS } = props;
  mainGPS = mainGPS.length === 2 ? [mainGPS[1], mainGPS[0]] : [51.505, -0.09];

  return (
    <div className='rounded-lg overflow-hidden'>
      <MapContainer style={{ height: '300px' }} center={mainGPS} zoom={13} scrollWheelZoom={false} zoomControl={false}>
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> - Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        {inputGPS.map((map, index) => (
          <Marker position={map}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
