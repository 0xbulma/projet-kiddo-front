const getGeoLoc = () => {
  
  let gps = {
    lat: null,
    lng: null,
    timestamp: null,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      res => {
        gps.lat = res.coords.latitude;
        gps.lng = res.coords.longitude;
        gps.timestamp = res.timestamp;
        resolve(gps);
      },
      err => {
        reject(err);
      }
    );
  });
};

export default getGeoLoc;
