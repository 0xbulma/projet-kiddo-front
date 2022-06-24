import useGeolocation from './useGeolocation';

export default function GeolocationComponentExemple() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  );
}
