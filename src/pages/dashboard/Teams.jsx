import React from 'react';
import InputBox from '../../components/micros/InputBox';
import { useFormik } from 'formik';
import { projects, teams } from '../../utils/Veriables';
import { SlGraph } from "react-icons/sl";


const Teams = () => {

  const [selectedProjectId, setSelectedProjectId] = React.useState(1);

  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectEmail: "",
    },
  });
  return (
    <div className=' bg-[#FFFFFF] h-[100%] rounded-[8px] px-[60px] py-[17px] flex flex-col gap-[12px]'>
      <p className=' font-inter font-[700] text-[#0D141C] leading-[40px] text-[20px]'>Teams</p>
      <div className=' border border-[#E5EDF5] rounded-[8px] w-[912px] h-[231px]'>
        <div className=' flex justify-between items-center'>
          <div className=' flex pl-[35px] py-[41px] flex flex-col gap-[12px]'>
            <p className='text-[20px] font-[700] font-inter text-[#000000]'>Create New Team</p>
            <p className=' text-[14px] font-[500] font-inter text-[#000000] '>Let’s create a new Team</p>

            <div className=' w-full  flex  gap-[40px]'>


              <input
                type="text"
                placeholder="Enter Team Name"
                value={formik.values.projectName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="projectName"

                className=" w-[254px] h-[56px] bg-[#F7FAFC] border-[1px] border-[#CCDBEB] p-[15px] rounded-[8px]  outline-none placeholder:text-[#7A7E82] placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[24px] placeholder:font-inter  placeholder:text-[#4575A1]"
              />
            </div>

            <button className=' bg-[#0057A3] max-w-[118px] rounded-[8px] px-[16px] py-[12px] font-inter font-[600] text-[#FFFFFF] text-[14px] leading-[21px] '>Create</button>
          </div>


          <div>
            <img src="/src/assets/project_section_new.png" alt="plus" />
          </div>
        </div>
      </div>
      <p className=' font-inter font-[600] text-[#0D141C] leading-[40px] text-[20px] '>Our Teams</p>
      <div className="w-[912px] grid grid-cols-3 gap-y-[32px]">
        {teams.map((team) => (
          <div
            onClick={() => setSelectedProjectId(team.id)}
            key={team.id}
            className={` ${selectedProjectId === team.id ? "bg-[#0057A3]" : " bg-[#E5EDF5]"} w-[275px] h-[116px] rounded-[8px] px-[15px] py-[14px] cursor-pointer`}
          >
            <div className=' flex gap-[12px] items-center'>
              {/* icons */}
              <div className=' bg-[#FFFFFF] h-[30px] w-[33px] flex items-center justify-center rounded-[8px]'>
                <div className=' bg-[#0057A3] flex items-center justify-center'>
                <SlGraph color='#FFFFFF' size={18} /> 
                </div>
              </div>
              {/* project */}
                <div className=' flex flex-col '>
                   <p className={`${selectedProjectId === team.id ? "text-[#FFFFFF]" : "text-[#4575A1]"} font-inter font-[700]  text-[20px]`}>{team.team_name}</p>
                   <p className={`${selectedProjectId === team.id ? "text-[#FFFFFF]" : "text-[#4575A1]"} font-inter font-[400] text-[14px] leading-[20px]`}> Total Members: {team.total_member}</p>
                </div>
               
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams; 