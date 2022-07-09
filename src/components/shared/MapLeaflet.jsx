import { useMemo } from 'react';
import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';
import './mapLeaflet.css';
import { useState, useEffect } from 'react';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/536px-Google_Maps_icon_%282020%29.svg.png',
  iconSize: [22, 30],
  popupAnchor: [0, -15],
});

export default function MapLeaflet({ currentLocation, items, className, maxDistMeters }) {
  const [center, setCenter] = useState([48.864716, 2.349014]);
  const [zoom, setZoom] = useState(5);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (maxDistMeters <= 200000) {
      setZoom(9);
    }
  }, [maxDistMeters]);

  useEffect(() => {
    if (currentLocation) {
      setCenter([currentLocation[1], currentLocation[0]]);
    }
    if (!currentLocation && items?.length > 0) {
      setCenter([items[0]?.gps[1], items[0]?.gps[0]]);
      setZoom(7);
    }
  }, [currentLocation, items]);

  useEffect(() => {
    if (map) {
      map.setView(center, zoom);
    }
  }, [map, center, zoom]);

  // Ne pas faire de target='_blank' sur le <a> faille de sécurité !!!
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const displayMap = useMemo(
    () => (
      <MapContainer className={`rounded-lg grow ${className}`} center={center} zoom={zoom} scrollWheelZoom={false} zoomControl={false} ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <ZoomControl position='topright' />
        {currentLocation && (
          <Marker position={center} icon={customIcon}>
            <Popup>
              <span>Vous êtes ici</span>
            </Popup>
          </Marker>
        )}
        {items?.length > 0 &&
          items.map((item, index) => {
            let gpsCoord = [item?.gps[1], item?.gps[0]];
            return (
              <Marker key={index} position={gpsCoord} icon={customIcon}>
                <Popup>
                  <span className='text-lg'>
                    {item.content.title} <br />
                    <span
                      className='text-kiddoPurple hover:underline cursor-pointer'
                      onClick={() => openInNewTab(`https://www.google.com/maps/dir//${gpsCoord}/`)}>
                      Consulter l'itinéraire
                    </span>
                  </span>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    ),
    [center, className, currentLocation, items, zoom]
  );

  return <div className='sticky square top-4 lg:mt-[5.7rem] flex w-full shadow-md shadow-kiddoGray'>{displayMap}</div>;
}

export function MapLeafletPlaceHolder({ className }) {
  return (
    <div className='sticky square top-4 flex w-full'>
      <MapContainer className={`grow`} center={[48.8566, 2.3522]} zoom={9} scrollWheelZoom={false} zoomControl={false}>
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, Team Kiddo'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
      </MapContainer>
    </div>
  );
}
