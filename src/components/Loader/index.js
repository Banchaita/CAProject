import React from 'react'
import { Loader } from 'rsuite'
import "rsuite/dist/rsuite.css";



const Loading = () => {
  return (
    <>
      <div style={{height:"100vh", background:"#000"}}>
            <Loader size="lg" inverse center content="Loading..."/>
      </div>
    </>
  )
}

export default Loading
