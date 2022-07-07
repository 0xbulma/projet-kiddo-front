import { useMemo } from 'react';
import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet';
import './mapLeaflet.css';
import { useState, useEffect } from 'react';

export default function MapLeaflet({ currentLocation, items, className, maxDistMeters }) {
  const [center, setCenter] = useState([48.864716, 2.349014]);
  const [zoom, setZoom] = useState(5);
  const [map, setMap] = useState(null);

  useEffect(()=>{
    if(maxDistMeters <= 200000){
      setZoom(9);
    }
  },[maxDistMeters])

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

  const displayMap = useMemo(
    () => (
      <MapContainer
        className={`grow ${className}`}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <ZoomControl position='topright' />
        {currentLocation && (
          <Marker position={center}>
            <Popup>
              <h3>Vous êtes ici</h3>
            </Popup>
          </Marker>
        )}
         {items?.length > 0 && items.map((item, index) => {
          let gpsCoord = [item?.gps[1], item?.gps[0]];
          return (
            <Marker key={index} position={gpsCoord}>
              <Popup>
                <h3>Title: {item.content.title}</h3>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    ),
    [center, className, currentLocation, items, zoom]
  );

  return <div className='sticky square top-4 flex'>{displayMap}</div>;
}



export function MapLeafletPlaceHolder({ className }) {
  return (
    <div className='sticky square top-4 flex'>
      <MapContainer
        className={`grow ${className}`}
        center={[48.8566, 2.3522]}
        zoom={9}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <ZoomControl position='topright' />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
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
