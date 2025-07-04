import React from 'react';

const Automation = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Automation</h1>
      <p className="text-gray-600 mb-6">Manage your automated workflows and processes</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Workflows</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Email Marketing</p>
                <p className="text-sm text-gray-600">Sends welcome emails to new users</p>
              </div>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Data Backup</p>
                <p className="text-sm text-gray-600">Daily database backup at 2 AM</p>
              </div>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Active</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Create New Workflow</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              + Create Workflow
            </button>
            <div className="text-sm text-gray-600">
              <p>• Email automation</p>
              <p>• Data processing</p>
              <p>• Task scheduling</p>
              <p>• Report generation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation; 