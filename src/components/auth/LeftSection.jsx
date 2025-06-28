import React from 'react'
import eng from '../../assets/english.svg'


const LeftSection = ({ type, }) => {
  return (
    <div className=' w-full flex flex-col  rounded-[8px] flex flex-col px-[38px] py-[24px]'>
      <div
        className="w-[132px] h-[56px] rounded-[8px] bg-[#E5EDF5] flex-shrink-0 flex items-center justify-center gap-[11px]"
      >

        <img src={eng} alt="" />


        <p className=' font-inter text-[16px] font-[400] text-[#4575A1] leading-[24px]'>English</p>
      </div>
    </div>
  )
}

export default LeftSection