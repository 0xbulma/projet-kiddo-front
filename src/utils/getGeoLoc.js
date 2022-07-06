const getGeoLoc = () => {
  
  let gps = [];
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      res => {
        gps = [res.coords.longitude, res.coords.latitude]
        resolve(gps);
      },
      err => {
        reject(err);
      }
    );
  });
};

export default getGeoLoc;
