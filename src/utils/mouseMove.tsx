import { useEffect, useState } from "react";

export const MouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // const windowWidth = window.innerWidth / 1;
    // const windowHeight = window.innerHeight / 1;

    // const setEvent = (e: any) => {
    //   const mouseX = e.clientX / windowWidth;
    //   const mouseY = e.clientY / windowHeight;
    //   setPosition({ x: mouseX, y: mouseY })
    // };

    // window.addEventListener("mousemove", setEvent);
    // return () => {
    //   window.removeEventListener("mousemove", setEvent);
    // };
  }, []);

  return position;
};
