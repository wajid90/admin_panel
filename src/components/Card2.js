import React from 'react'
import DoubleBarChart from './DoubleBarChart'

const Card2 = ({title}) => {
  return (
    <div className='shadow-lg mx-2 mt-1'>
        <div className='bg-white p-4'>
           <h6 className='text-[12px] text-gray-500 font-semibold'>{title}</h6>
          
          <DoubleBarChart/>
        </div>
      
    </div>
  )
}

export default Card2