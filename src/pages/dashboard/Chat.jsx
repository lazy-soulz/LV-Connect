import React from 'react';

const Chat = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Chat & Support</h1>
      <p className="text-gray-600 mb-6">Manage customer conversations and support tickets</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Conversations</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">JD</div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">John Doe</p>
                <p className="text-sm text-gray-600">Need help with payment integration...</p>
              </div>
              <span className="text-xs text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">JS</div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Jane Smith</p>
                <p className="text-sm text-gray-600">Feature request for mobile app...</p>
              </div>
              <span className="text-xs text-gray-500">1 hour ago</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-blue-600">Active Chats</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">89%</p>
              <p className="text-sm text-green-600">Response Rate</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">2.3min</p>
              <p className="text-sm text-purple-600">Avg Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 