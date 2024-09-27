/* eslint-disable react/prop-types */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ src, className, caption, alt }) => (
    <div>
      <LazyLoadImage
        alt={alt}
        effect='blur'
        src={src}
        className={className}
         />
      <span>{caption}</span>
    </div>
  );
  
  export default MyImage;