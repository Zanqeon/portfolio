import React from 'react'
import styles from './index.module.scss'
import NextImage from 'next/image'

export default function Image ({
  image
}) {

  const imageService = ' https://img2.storyblok.com/'
  const newPath = image.src?.replace('https://a.storyblok.com/', '')
  const transformedSrc = imageService + (image.focusPoint ? `filters:focal(${image.focusPoint})/` : '') + newPath

  const myLoader = ({ src, width, quality, height }) => {
    // if(height) {
    //   return imageService + `0x4000/` + (image.focusPoint ? `filters:focal(${image.focusPoint})/` : '') + newPath
      // return imageService + `0x${height}/` + (image.focusPoint ? `filters:focal(${image.focusPoint})/` : '') + newPath
    // }
    return imageService + `${width}x0/` + (image.focusPoint ? `filters:focal(${image.focusPoint})/` : '') + newPath
  }

  return (
    <div className={styles.container} style={{ paddingTop: `min(calc(100% * ${image.aspectRatio}))`}}>
      <NextImage
        loader={myLoader}
        src={transformedSrc}
        alt={image.alt}
        layout="fill"
      />
    </div>
  )
}
