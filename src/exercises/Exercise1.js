import React, { useState} from 'react'

export default function Exercise1() {
  
  const [states,setStates] = useState({name: "",city:"", country:""})

  const handleName = (event) => setStates({...states,name:event.target.value})
  const handleCity = (event) => setStates({...states,city:event.target.value})
  const handleCountry = (event) => setStates({...states,country:event.target.value})
  
  const countries = ['united states', 'china', 'united kingdom', 'australia']

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type='text' placeholder='name' value={states.name} onChange={handleName} />
        <input type='text' placeholder='city' value={states.city} onChange={handleCity} />
        <select onChange={handleCountry} value={states.country}>
        {countries.map(c =>
          <option value={c}>{c}</option>
        )}
        </select>
      </div>
    </div>
  )
}
