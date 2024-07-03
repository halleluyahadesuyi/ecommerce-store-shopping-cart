import React, { useEffect, useState } from "react";
import "../App.css";

interface ProgressiveImageProps {
  src: string;
  placeholderSrc: string;
  alt: string;
  className?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholderSrc || src);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <img
      src={loading ? placeholderSrc : imgSrc}
      alt={alt}
      className={`${className || ""} ${loading ? "loading" : "loaded"}`}
    />
  );
};

export default ProgressiveImage;
