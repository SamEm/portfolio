import {useEffect, useState } from 'react';

export const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setEvent = (e:any) => setPosition({x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setEvent);
    return () => {
      window.removeEventListener('mousemove', setEvent);
    }
  }, [])

  return position;
}