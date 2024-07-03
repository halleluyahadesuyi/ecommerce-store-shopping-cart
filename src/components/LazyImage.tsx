import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps extends Omit<LazyLoadImageProps, 'src'> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => (
  <LazyLoadImage
    alt={alt}
    src={src} // Use the original src
    effect="blur" // Other effects such as "opacity" can be used
    {...props} // Pass down other props like className, style, etc.
  />
);

export default LazyImage;
