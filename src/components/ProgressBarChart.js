import React from 'react'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const ProgressBarChart = ({color, progressPer, progressValue}) => {
    // console.log(color);

  return (
   <div className='w-[120px] h-[120px] mx-auto my-3'>
    <CircularProgressbar
    color={`${color}`}
    strokeWidth={20}
      value={progressPer}
      text={progressValue}
      
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "butt",
        pathColor: color,
        // trailColor:color,
        textSize:10
      })}
    />
   </div>
  )
}

export default ProgressBarChart