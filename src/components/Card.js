import React from 'react'
import { MdOutlineDataExploration } from 'react-icons/md'

const Card = ({d,ProgressBarChart,ind}) => {
  return (
    <div className='shadow-lg mx-2 mt-2 bg-transparent sm:flex-col flex-row'>
        <div className='bg-white p-4 rounded'>
           <h6 className='text-[12px] font-semibold text-gray-500'>{d?.title}</h6>
            <h1 className={`text-[20px] font-bold   ${d?.color}`}>{d?.price}</h1>
        </div>
        <div className='bg-white my-2  h-[180px] px-2'>
           {ind!==0 ? <h3  className='text-[12px] font-semibold text-gray-500 pt-2'>{"DSO"}</h3> :""}
           <div className='flex items-center px-2 py-1'>
              <h2 className='text-[10px] text-gray-500 font-semibold -ml-2'>{d?.subtitle}</h2>
             {ind===0 ? <MdOutlineDataExploration size={12}/>:""}
           </div>


           <ProgressBarChart color={d?.progresscolor} progressPer={d?.progressPer} progressValue={d?.progressValue}/>
        </div>
    </div>
  )
}

export default Card