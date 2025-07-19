import React, { useState } from 'react'
import { useFormik } from 'formik'
import DashboardInputs from '../../components/micros/DashboardInputs'
// import Toggle from 'react-toggle';
// import "react-toggle/style.css";

const Profile = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            jobTitle: '',
            department: '',
            password: '',
        },
    })

    const [leadNotify, setLeadNotify] = useState(true);
    const [taskNotify, setTaskNotify] = useState(false);


    const Toggle = ({ checked, onChange, disabled = false }) => {
        return (
            <label
                className={`
              relative inline-block w-[42px] h-[24px] rounded-full transition-colors duration-200
              ${checked ? 'bg-[#2B6CB0]' : 'bg-[#E5EDF5]'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className="sr-only"
                />
                <span
                    className={`
                absolute top-[2px] left-[2px] w-[20px] h-[20px] rounded-full bg-white shadow-md
                transform transition-transform duration-200
                ${checked ? 'translate-x-[18px]' : 'translate-x-0'}
              `}
                />
            </label>
        );
    };


    return (
        <div className=' bg-[#FFFFFF] w-full h-[100%] rounded-[8px] px-[55px] py-[18px]'>
            <p className=' text-[#0D141C] text-[20px] font-inter font-[700] leading-[40px]'>Profile</p>
            {/* Profile Image and Name */}
            <div className=' w-full flex gap-[16px]'>
                <div className=' w-[128px] h-[128px] rounded-full'>
                    <img src="/src/assets/profile.png" alt="profile" className='w-full h-full rounded-full object-cover' />
                </div>
                <div className=' w-[373px} h-[128px] flex flex-col justify-center items-start'>
                    <p className=' text-[#0D141C] text-[22px] font-inter font-[700] leading-[28px]'>Sophia Bennett</p>
                    <p className=' text-[16px] leading-[24px] font-[400] font-inter text-[#4575A1]'>sophia.bennett@example.com</p>

                </div>
            </div>
            {/* Input Fields */}
            <div className=' w-full  flex  mt-[48px] gap-[80px]'>
                <DashboardInputs
                    label="Name"
                    type="text"
                    placeholder="Type name..."
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    minWidth="308px"

                />

                <DashboardInputs
                    label="Email"
                    type="text"
                    placeholder="Type email..."
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    minWidth="308px"

                />

                <DashboardInputs
                    label="Phone"
                    type="text"
                    placeholder="Type phone..."
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    minWidth="308px"
                />

            </div>

            <div className=' w-[70%] flex  mt-[48px] gap-[80px]'>
                <DashboardInputs
                    label="Job Title"
                    type="text"
                    placeholder="Type title..."
                    value={formik.values.jobTitle}
                    onChange={formik.handleChange}
                    name="jobTitle"
                    minWidth="308px"
                />

                <DashboardInputs
                    label="Department"
                    type="text"
                    placeholder="Type department..."
                    value={formik.values.department}
                    onChange={formik.handleChange}
                    name="department"
                    minWidth="308px"
                />
            </div>

            <div className='mt-[40px] flex flex-col gap-[7px] w-[308px]'>
                <p className=' text-[#0D141C] text-[20px] font-inter font-[700] leading-[40px]'>Security</p>

                <DashboardInputs
                    label="Password"
                    type="password"
                    placeholder="Type password..."
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    minWidth="308px"
                />

            </div>

            {/* Notifications */}

            <div className='mt-[40px] flex flex-col gap-[16px] w-full'>
                <p className='text-[#0D141C] text-[20px] font-inter font-[700] leading-[40px]'>
                    Notification
                </p>

                <div className='flex flex-col gap-[16px] px-[16px] py-[12px] rounded-tl-[8px] rounded-tr-[8px] bg-[#F7FAFC] w-full'>
                    {/* Toggle 1 */}
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col'>
                            <p className='text-[#0D141C] text-[16px] font-[500] font-inter leading-[24px]'>
                                New Lead Notifications
                            </p>
                            <p className='text-[#4575A1] text-[14px] font-[400] font-inter leading-[21px]'>
                                Receive email notifications for new leads assigned to you.
                            </p>
                        </div>

                        <Toggle
                            checked={leadNotify}
                            onChange={() => setLeadNotify(!leadNotify)}
                        />
                    </div>

                    {/* Toggle 2 */}
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col'>
                            <p className='text-[#0D141C] text-[16px] font-[500] font-inter leading-[24px]'>
                                New Task Notifications
                            </p>
                            <p className='text-[#4575A1] text-[14px] font-[400] font-inter leading-[21px]'>
                                Receive email notifications for new tasks assigned to you.
                            </p>
                        </div>

                        <Toggle
                            checked={taskNotify}
                            onChange={() => setTaskNotify(!taskNotify)}
                        />
                    </div>
                </div>


            </div>

            <button
                className='bg-[#2B6CB0] text-[#FFFFFF] text-[14px] font-inter font-[600] border-none font-inter font-[500] px-[16px] py-[8px] rounded-[4px] w-fit mt-[31px]'
            // onClick={handleSaveChanges}
            >
                Save Changes
            </button>
        </div>
    )
}

export default Profile