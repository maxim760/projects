import React from 'react'

export const Loader: React.FC = (): React.ReactElement => {
  return (
    <div className={"loaderWrapper"}><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
  )
}  