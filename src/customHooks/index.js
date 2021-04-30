import { useEffect } from 'react';

export default function useOutsideAlerter(ref, cb = () => {}, isShow) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };
    if (isShow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else if (!isShow) {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb, isShow]);
}
