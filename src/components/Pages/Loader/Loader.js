import React from 'react'
import giphy from './Spinner-1s-200px.gif'
function Loader() {
  return (
    <div style={{width:"90vw"}}>
        <img src={giphy} alt="" style={{margin:"20px auto"}}/>
    </div>
  )
}

export default Loader