import React, { useState } from 'react'

export default function SpotCheck2() {
  // your code here
  const [isLoading,setLoading] = useState(true)
  const [lesson,setLesson] = useState({ name: 'React Hooks', completed: false, started: false })

  const updateLesson = (key) => {
    setLesson({...lesson,[key]:true})
  }
  const lessonStatus = () => {
    let msg = "Lesson status: "
    if(lesson.completed)
     return msg+="Completed"
    if(lesson.started)
      msg += "In progress"
    if(!lesson.completed && !lesson.started)
      msg += "Not started"
    return msg 
  }
  const updateLoading = () => setLoading(false)
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
       {isLoading ? 
       <div>Page is Loading</div> : 
        <div>
          <p>{lesson.name}</p>
          <p>{lessonStatus()}</p>
        </div>}
        <button onClick={updateLoading}>unLoad</button>
        <button onClick={() => updateLesson("started")}>start Lesson</button>
        <button onClick={() => updateLesson("completed")}>Complete Lesson</button>

      </div>
    </div>
  )
}