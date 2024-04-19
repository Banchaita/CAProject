import React from 'react'
import CommonBannerImage from './CommonBannerImage'

const CommonBanner = ({ src, text, url }) => {
  return (
    <div style={{ maxWidth: '100%', height: 'auto', textAlign: 'center' }}>
      <CommonBannerImage src={src} text={text} url={url}/>
    </div>
  )
}

export default CommonBanner
