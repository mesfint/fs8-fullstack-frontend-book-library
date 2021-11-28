import { ImgHTMLAttributes, VoidFunctionComponent } from 'react'
import React from 'react'
import icons, { IconType } from './icons';

type SvgType = {
  type: IconType;
} & ImgHTMLAttributes<HTMLImageElement>

const Svg: VoidFunctionComponent<SvgType> = (props) => {
  const {type, ...otherProps} = props;
  return <img {...otherProps} src={icons[type] ?? otherProps.src} alt={`icon ${type}`} />
}

export default Svg
