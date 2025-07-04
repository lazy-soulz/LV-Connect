import React from 'react';

const MyProjects = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + New Project
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-800">E-commerce Platform</h3>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </div>
          <p className="text-gray-600 mb-4">Building a modern e-commerce platform with React and Node.js</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-500">75% Complete</span>
            </div>
            <span className="text-sm text-gray-500">Due: Dec 15</span>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Mobile App</h3>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
          </div>
          <p className="text-gray-600 mb-4">Cross-platform mobile application for task management</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-500">45% Complete</span>
            </div>
            <span className="text-sm text-gray-500">Due: Jan 20</span>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-800">API Documentation</h3>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Planning</span>
          </div>
          <p className="text-gray-600 mb-4">Comprehensive API documentation for the backend services</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-500">20% Complete</span>
            </div>
            <span className="text-sm text-gray-500">Due: Feb 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects; 