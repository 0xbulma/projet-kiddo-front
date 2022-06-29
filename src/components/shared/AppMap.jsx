import * as React from "react";
import { Helmet } from "react-helmet";
import { useRef, useState, useEffect } from "react";

const AppMap = () => {
  const mapRef = useRef();

  const [state, setState] = useState({
    map: null,
  });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && !state.map) {
      const H = window.H;
      const platform = new H.service.Platform({
        apikey: "wmR6wCSRE45uwYIiO7lGNul0URV63nwwvjn4SNNqTPY",
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1,
      });
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Create the default UI components to allow the user to interact with them
      // This variable is unused
      const ui = H.ui.UI.createDefault(map, defaultLayers);
      setState({ map });
    }
    // return () => state.map?.dispose();
  }, [start, state.map]);

  return (
    <>
      <Helmet
        onChangeClientState={(v, addedTags) => {
          setTimeout(() => {
            setStart(true);
          }, 2000);
        }}
      >
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
        ></script>
      </Helmet>
      {start && <div ref={mapRef} style={{ height: "500px" }} />}
    </>
  );
};
export default AppMap;