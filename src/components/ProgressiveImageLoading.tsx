// import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"
// import 'react-lazy-load-image-component/src/effects/blur.css';

// interface LazyImageProps extends Omit<LazyLoadImageProps, 'src'> {
//   src: string;
//   alt: string;
// }

// const ProgressiveLazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => (
//   <LazyLoadImage
//     alt={alt}
//     src={src} // Use the original src
//     effect="blur" // Other effects such as "opacity" can be used
//     {...props} // Pass down other props like className, style, etc.
//   />
// );

// export default ProgressiveLazyImage;

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
