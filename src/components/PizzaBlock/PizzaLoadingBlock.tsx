import React from 'react'
import ContentLoader from "react-content-loader"


export const PizzaLoadingBlock = () => {
  return (
    <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
    <circle cx="130" cy="138" r="130" /> 
    <rect x="0" y="280" rx="6" ry="6" width="280" height="24" /> 
    <rect x="0" y="318" rx="6" ry="6" width="280" height="76" /> 
    <rect x="0" y="415" rx="6" ry="6" width="90" height="26" /> 
    <rect x="126" y="404" rx="22" ry="22" width="154" height="46" />
  </ContentLoader>
  )
}