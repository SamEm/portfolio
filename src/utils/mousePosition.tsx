import {useEffect, useState } from 'react';

export const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const windowWidth = window.innerWidth / 1;
  //   const windowHeight = window.innerHeight / 1;
  //   const setEvent = (e: any) =>
  //     setPosition({
  //       x: e.clientX / windowWidth,
  //       y: e.clientY / windowHeight,
  //     });
  //   window.addEventListener("mousemove", setEvent);
  //   return () => {
  //     window.removeEventListener("mousemove", setEvent);
  //   };
  // }, [])

  return position;
}