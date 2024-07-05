import { useEffect, useState } from "react";
import { BACKGROUND_URL } from "../api/api";

const images: string[] = [
  "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
  "/faV0HuR6WnQoLrVq3r6mhjaABL9.jpg",
  "/mRfI3y2oAd7ejur2di09xC9niqp.jpg",
  "/aFTYFqrWp4RS46Twm87l5e0ItYb.jpg",
  "/sFEYsEfzTx7hhjetlNrme8B5OUo.jpg",
];

export const getRandomBackgroundImage = (): string => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export const useBackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`${BACKGROUND_URL}${getRandomBackgroundImage()}`);
  }, []);

  return backgroundImage;
};
