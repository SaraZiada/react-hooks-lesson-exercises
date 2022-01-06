import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  
  const [likes,setLikes] = useState(0)
  const like = () =>  setLikes(likes+1)
  
  useEffect(()=>{
    document.title = `You have `+ likes+ ` likes`
  })
  
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>My shoobi doobi post</p>
        <button onClick={like}>Like</button>
        
      </div>
    </div>
  )
}