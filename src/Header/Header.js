import React from 'react'
import {IoMdArrowBack} from "react-icons/io";
import {CiMenuKebab} from "react-icons/ci";
import {MdOutlineZoomOutMap} from "react-icons/md";
import {PiEyeglassesFill} from "react-icons/pi";
import {AiOutlineQuestionCircle} from "react-icons/ai";



const Header = () => {
  return (
    <div className='flex justify-between py-1 px-2 bg-white shadow-md items-center'>
        <div className='flex items-center'>
          <div className='mr-2 border-r p-1 border-r-gray-100'>
            <IoMdArrowBack/>
          </div>
            <div className='mr-2'>
            <h3>Finantial Manager</h3>
            </div>
          <div>
            <AiOutlineQuestionCircle/>
          </div>

        </div>
        <div className='flex items-center py-2 px-1'>
          <div  className='px-2 my-1'>
             <PiEyeglassesFill/>
          </div>
          <div className='px-2 my-1'>
              <MdOutlineZoomOutMap/>
          </div>
          <div className='px-2 my-1'>
              <CiMenuKebab/>
          </div>
        </div>

    </div>
  )
}

export default Header