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
  FaInfoCircle
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
      hasNewMessage: true
    },
    {
      id: 'kawaljeet',
      name: 'Kawaljeet Singh',
      lastMessage: 'Task added, but not visible over my screen so it\'s showing some sort check once.',
      time: '10:30 AM',
      avatar: 'KS',
      isOnline: false,
      hasNewMessage: true
    },
    {
      id: 'kavita',
      name: 'Kavita Thakur',
      lastMessage: 'Kavita task assigned to Bot',
      time: 'Yesterday',
      avatar: 'KT',
      isOnline: false,
      hasNewMessage: false
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

  const currentChat = chats.find(chat => chat.id === selectedChat);

  return (
    <div className='flex w-full bg-red p-4'>
      hi
    </div>  
  );
};

export default Chat;