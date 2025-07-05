import React from 'react';
import InputBox from '../../components/micros/InputBox';
import { useFormik } from 'formik';
import { projects } from '../../utils/Veriables';
import { SlGraph } from "react-icons/sl";


const MyProjects = () => {

  const [selectedProjectId, setSelectedProjectId] = React.useState(1);

  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectEmail: "",
    },
  });
  return (
    <div className=' bg-[#FFFFFF] h-[100%] rounded-[8px] px-[60px] py-[17px] flex flex-col gap-[12px]'>
      <p className=' font-inter font-[700] text-[#0D141C] leading-[40px] text-[20px]'>My Projects</p>
      <div className=' border border-[#E5EDF5] rounded-[8px] w-[912px] h-[231px]'>
        <div className=' flex justify-between items-center'>
          <div className=' flex pl-[35px] py-[41px] flex flex-col gap-[12px]'>
            <p className='text-[20px] font-[700] font-inter text-[#000000]'>Create New Project</p>
            <p className=' text-[14px] font-[500] font-inter text-[#000000] '>Let’s schedule your project.</p>

            <div className=' w-full  flex  gap-[40px]'>


              <input
                type="text"
                placeholder="Project Name"
                value={formik.values.projectName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="projectName"

                className=" w-[228px] h-[56px] bg-[#F7FAFC] border-[1px] border-[#CCDBEB] p-[15px] rounded-[8px]  outline-none placeholder:text-[#7A7E82] placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[24px] placeholder:font-inter  placeholder:text-[#4575A1]"
              />

              <input
                type="text"
                placeholder="Project email"
                value={formik.values.projectEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="projectEmail"

                className=" w-[228px] h-[56px] bg-[#F7FAFC] border-[1px] border-[#CCDBEB] p-[15px] rounded-[8px]  outline-none placeholder:text-[#7A7E82] placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[24px] placeholder:font-inter  placeholder:text-[#4575A1]"
              />

            </div>
          </div>


          <div>
            <img src="/src/assets/project_section_new.png" alt="plus" />
          </div>
        </div>
      </div>
      <p className=' font-inter font-[600] text-[#0D141C] leading-[40px] text-[20px] '>Ongoing Projects</p>
      <div className="w-[912px] grid grid-cols-3 gap-y-[32px]">
        {projects.map((project) => (
          <div
            onClick={() => setSelectedProjectId(project.id)}
            key={project.id}
            className={` ${selectedProjectId === project.id ? "bg-[#0057A3]" : " bg-[#E5EDF5]"} w-[275px] h-[116px] rounded-[8px] px-[15px] py-[14px] cursor-pointer`}
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
                   <p className={`${selectedProjectId === project.id ? "text-[#FFFFFF]" : "text-[#4575A1]"} font-inter font-[700]  text-[20px]`}>{project.projectName}</p>
                   <p className={`${selectedProjectId === project.id ? "text-[#FFFFFF]" : "text-[#4575A1]"} font-inter font-[500] text-[14px]`}> status: {project.status}</p>
                </div>
               
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects; 