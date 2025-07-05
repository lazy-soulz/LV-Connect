import React, { useState } from 'react';
import {
  FaPlus,
  FaEllipsisH,
  FaSearch,
  FaUserCircle,
  FaPaperPlane,
  FaInstagram,
  FaFacebookMessenger,
  FaChevronDown,
  FaTimes,
  FaPhone,
  FaVideo,
  FaInfoCircle,
  FaAngleDown,
  FaInstagramSquare,
  FaTelegramPlane
} from 'react-icons/fa';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('himanshu');
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 'himanshu',
      name: 'Himanshu Mehra',
      lastMessage: 'Hi, I\'m interested in learning more about your product',
      time: '12:34 PM',
      avatar: 'HM',
      isOnline: true,
      hasNewMessage: true,
      unreadCount: 2
    },
    {
      id: 'kawaljeet',
      name: 'Kawaljeet Singh',
      lastMessage: 'Task added, but not visible over my screen so it\'s showing some sort check once.',
      time: '10:30 AM',
      avatar: 'KS',
      isOnline: false,
      hasNewMessage: true,
      unreadCount: 1
    },
    {
      id: 'kavita',
      name: 'Kavita Thakur',
      lastMessage: 'Kavita task assigned to Bot',
      time: 'Yesterday',
      avatar: 'KT',
      isOnline: false,
      hasNewMessage: false,
      unreadCount: 0
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'himanshu',
      text: 'Hi, I\'m interested in learning more about your product',
      time: '12:34 PM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hello Himanshu 😊, thanks for reaching out! What specific features are you interested in?',
      time: '12:35 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'himanshu',
      text: 'I want to boost my Social Media Accounts',
      time: '12:36 PM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'himanshu',
      text: 'Specifically, Looking for Ads Campaign. Who can run ads across all portals.',
      time: '12:37 PM',
      isOwn: false
    },
    {
      id: 5,
      sender: 'me',
      text: 'Hello Himanshu! Yes we have the things which you have asked! Can you please tell what kinds of ads you want to run on your system?',
      time: '12:38 PM',
      isOwn: true
    }
  ];

  const buttons = [
    {
      text: 'Assign User',
      icon: <FaAngleDown />
    },
    {
      text: 'Status',
      icon: <FaAngleDown />
    },
    {
      text: 'Label',
    }
  ]

  const currentChat = chats.find(chat => chat.id === selectedChat);

  return (
    <div className='flex w-full gap-[16px]'>
      {/* sidebar */}

      <div className=' flex flex-col w-[303px] h-[90vh] bg-[#FFFFFF]'>
        {/* header */}
        <div className=' flex justify-between items-center pl-[34px] py-[20px] mr-[12px]'>
          <div className=' flex flex-col'>
            <p className=' text-[20px] font-inter font-[600] text-[#0D141C]'>All Chats</p>
            <p className=' text-[12px] font-inter font-[500] text-[#7A7E82]'>1 Chat | 0 Unread</p>
          </div>

          <div className=' bg-[#E5EDF5] flex justify-center items-center h-[45px] w-[45px] rounded-[50px]'>
            <FaPlus color='#4575A1' size={20} />
          </div>

        </div>

        {/* seprator */}

        <div className=' h-[1px] w-full border-[1px] border-[#B3B3B333]'></div>

        {/* chat section */}
        <div className="flex-1 overflow-y-auto mt-[24px]">
          <div className=' flex flex-col gap-[6px] '>
            {chats.map((chat) => (
              <>
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`${selectedChat === chat.id ? "bg-[#E5EDF5] border-l-[1px] border-[#0057A3]" : "bg-[#FFFFFF]"} h-[117px] pl-[34px] pr-[25px] py-[18px] cursor-pointer`}

                >
                  <div className=' flex justify-between items-center'>
                    <div className=' flex flex-col '>
                      <p className=' text-[16px] font-inter font-[600] text-[#0D141C]'>{chat.name}</p>
                      <p className=' text-[14px] leading-[20px] font-inter font-[500] text-[#0D141C]'>{chat.lastMessage}</p>

                    </div>
                    {chat.hasNewMessage && chat.unreadCount > 0 && (
                      <span className=" bg-[#AB131D] font-bold rounded-[50px] w-[21px] h-[18px]  text-[#FFFFFF] font-[700] text-[10px] font-inter  flex items-center justify-center shrink-0">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </>

            ))}
          </div>

        </div>
      </div>

      {/* Messages Area */}
      <div className='flex flex-col flex-1  h-[90vh]  justify-between'>
        {/* Header */}
        <div style={{ backgroundColor: '#FFFFFF' }} className='flex items-center justify-between px-[19px] py-[16px] '>
          <div className='flex items-center gap-[8px]'>

            <div className='h-[45px] w-[45px] bg-[#E5EDF5] rounded-full flex items-center justify-center text-[16px] font-bold text-[#0057A3]'>
              {currentChat.avatar}
            </div>
            <div>
              <p className='text-[17px] font-inter font-[700] text-[#0D141C]'>{currentChat.name}</p>
              <p className='text-[13px] font-inter font-[500] text-[#7A7E82]'>
                {currentChat.isOnline ? 'Available' : 'Away'}
              </p>
            </div>
          </div>


          <div className='flex gap-[8px] items-center'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className='flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] bg-[#E5EDF5] text-[#4575A1] text-[14px] leading-[24px] font-inter font-[400] border-none'
              >
                {button.text}
                <FaChevronDown size={12} />
              </button>
            ))}
            <FaEllipsisH className='text-[#4575A1]' />
          </div>

        </div>

        {/* Seprator */}

        <div className='flex items-center justify-center w-full gap-[12px] mt-[16px]'>
          <div className='flex-1 h-[1px] bg-[#7A7E82]'></div>
          <p className='text-[14px] font-[600] text-[#737373] whitespace-nowrap'>
            A chat initiated with {currentChat.name}
          </p>
          <div className='flex-1 h-[1px] bg-[#7A7E82]'></div>
        </div>


        {/* Chat Messages */}
        <div className='flex-1 mt-[10px] overflow-y-auto px-4 py-2 space-y-[16px]'>
          {messages.map((msg, index) => {
            const isOwn = msg.isOwn;
            const senderName = isOwn ? 'Team Member' : 'Himanshi Mehra';
            const avatarUrl = isOwn
              ? '/src/assets/user.png' // Replace with team member avatar
              : '/src/assets/user.png'; // Replace with Himanshi avatar

            return (
              <div
                key={msg.id}
                className={`flex ${isOwn ? 'justify-end' : 'justify-start'} items-end gap-[10px]`}
              >
                {!isOwn && (
                  <img
                    src={avatarUrl}
                    alt='avatar'
                    className='w-[32px] h-[32px] rounded-full object-cover'
                  />
                )}

                <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} mt-[17px]`}>
                  <p className='text-[#737373] text-[12px] font-medium mb-[4px] font-inter'>
                    {senderName}
                  </p>
                  <div
                    className={`max-w-[400px] text-[16px] leading-[24px] font-[400] px-[24px] py-[12px] rounded-[12px] font-inter ${isOwn
                        ? 'bg-[#0057A3] text-[#FFFFFF] rounded-[12px]'
                        : 'bg-[#EDEDED] text-[#141414] rounded-[12px]'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {isOwn && (
                  <img
                    src={avatarUrl}
                    alt='avatar'
                    className='w-[32px] h-[32px] rounded-full object-cover'
                  />
                )}
              </div>
            );
          })}
        </div>


        {/* Input Box */}
        <div className=' w-full flex items-center gap-[12px] bg-[#F4F7FB] py-[12px] px-[16px] rounded-b-[16px] border-t border-[#E0E0E0]'>
          {/* Avatar */}
          <img
            src='/src/assets/user.png'
            alt='avatar'
            className='w-[32px] h-[32px] rounded-full object-cover'
          />
           <div className=' w-full flex justify-between items-center  bg-[#EDEDED] px-[26px] py-[14px]'>
                {/* Input Box */}
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type a message...'
            className='flex-1 border-none outline-none bg-[#EDEDED] text-[14px] font-inter placeholder-[#737373]'
          />

            {/* Send Button */}
            <button
            onClick={() => {
              // handle send here
            }}
            className='bg-[#0057A3] border-none text-[#FFFFFF] px-[16px] py-[6px] rounded-[6px] text-[14px] font-semibold'
          >
            Send
          </button>
           </div>
       

        
        </div>

      </div>

      {/* Right Info Bar */}
      <div className='w-[290px] bg-[#FFFFFF] rounded-[16px] h-[90vh] pl-[24px] pr-[16px] pt-[24px] flex flex-col gap-4'>
      
      {/* Avatar and Name Section */}
      <div className='flex  items-center gap-[7px]'>
        <div className='h-[80px] w-[80px] bg-[#E5EDF5] rounded-full flex items-center justify-center text-[24px] font-bold text-[#0057A3]'>
          {currentChat.avatar}
        </div>
        <div className=' flex flex-col'>
        <p className='text-[16px] font-semibold mt-2'>{currentChat.name}</p>
        <p className='text-[12px] text-[#2E2E2E]'>{currentChat.isOnline ? 'Online' : 'Offline'}</p>
        </div>
        
      </div>

      {/* Seprator */}
      <div className=' h-[1px] w-full border-[1px] border-[#B3B3B333] mt-[21px]'></div>

      {/* Basic Info Heading */}
      <div className='text-[14px] font-medium text-[#0D141C] mt-[22px]'>
        Basic Information
      </div>

      {/* Basic Info Text */}
      <div className='text-[13px] text-[#2E2E2E] leading-[22px]'>
        +91-99999-99999<br />
        Trynet Solutions<br />
        himanshi@trynet.com
      </div>

      {/* Communication Channels */}
      <div className='text-[14px] font-medium text-[#0D141C] mt-[12px]'>
        Communication Channels
      </div>

      <div className='flex gap-[12px] mt-[16px]'>
        <div className='px-[10px] py-[7px] bg-[#E5EDF5] rounded-[8px] flex items-center justify-center'>
          <FaInstagramSquare size={20} className='text-[#E1306C]' />
        </div>
        <div className='px-[10px] py-[7px] bg-[#E5EDF5] rounded-[8px] flex items-center justify-center'>
          <FaTelegramPlane size={20} className='text-[#0088cc]' />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Chat;