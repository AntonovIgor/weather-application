import {useState, useEffect} from 'react';
import {getCurrentPosition} from '../utils';

export function useLocation() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    (async () => {
      const {coords} = await getCurrentPosition();
      setCoordinates([
        coords.latitude,
        coords.longitude,
      ]);
    })();
  }, []);

  return [...coordinates];
}
