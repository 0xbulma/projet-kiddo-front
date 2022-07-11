import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';
// import './mapLeaflet.css';
import L from 'leaflet';

export default function MapLeafletOneMarker(props) {
  let { name, inputGPS } = props;
  const finalGPS = inputGPS.length === 2 ? [inputGPS[1], inputGPS[0]] : [51.505, -0.09];

  const customIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/536px-Google_Maps_icon_%282020%29.svg.png',
    iconSize: [30, 35],
    popupAnchor: [0, -30],
  });

  // Ne pas faire de target='_blank' sur le <a> faille de sécurité !!!
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='z-0 rounded-lg h-full w-full overflow-hidden shadow-sm shadow-kiddoShadow'>
      <MapContainer className='z-0 h-full w-full' center={finalGPS} zoom={13} scrollWheelZoom={false} zoomControl={false}>
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> - Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <Marker position={finalGPS} icon={customIcon}>
          <Popup>
            <span className='text-lg'>
              {name} <br />
              <span
                className='text-kiddoPurple hover:underline cursor-pointer'
                onClick={() => openInNewTab(`https://www.google.com/maps/dir//${inputGPS}/`)}>
                Consulter l'itinéraire
              </span>
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
