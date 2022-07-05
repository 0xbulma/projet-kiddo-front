import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';
import './mapLeaflet.css';

export default function MapLeaflet({ className, items, currentLocation }) {
  return (

    <div className='sticky square top-4 flex'>
      <MapContainer
        className={`grow ${className}`}
        center={[items[0].gps[1],items[0].gps[0]]}
        zoom={9}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />

        {currentLocation && (
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <h3>Vous êtes ici</h3>
            </Popup>
          </Marker>
        )}
        {items.map((item, index) => {
          let gpsCoord = [item.gps[1], item.gps[0]];
          return (
            <Marker position={gpsCoord}>
              <Popup>
                <h3>Title: {item.content.title}</h3>
              </Popup>
            </Marker>
          );
        })}

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
