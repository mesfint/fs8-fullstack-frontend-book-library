import React, {
  ImgHTMLAttributes,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react'

import ImageNotAvailable from './svg/icons/not-available.png'

const ImageWithFallback: VoidFunctionComponent<ImgHTMLAttributes<any>> = ({
  src,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)
  const onError = () => setImgSrc(ImageNotAvailable)
  useEffect(() => {
    setImgSrc(src);
  }, [src])
  return (
    <img
      src={imgSrc ? imgSrc : ImageNotAvailable}
      onError={onError}
      alt={props.alt}
      {...props}
    />
  )
}

export default ImageWithFallback;