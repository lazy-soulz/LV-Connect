import React from 'react';

const Integration = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Integrations</h1>
      <p className="text-gray-600 mb-6">Connect with third-party services and APIs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-semibold">S</div>
            <div>
              <h3 className="font-semibold text-gray-800">Slack</h3>
              <p className="text-sm text-gray-600">Team communication</p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Connected</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-semibold">G</div>
            <div>
              <h3 className="font-semibold text-gray-800">Google Drive</h3>
              <p className="text-sm text-gray-600">File storage</p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Connected</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">S</div>
            <div>
              <h3 className="font-semibold text-gray-800">Stripe</h3>
              <p className="text-sm text-gray-600">Payment processing</p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center text-white font-semibold">+</div>
            <div>
              <h3 className="font-semibold text-gray-800">Add Integration</h3>
              <p className="text-sm text-gray-600">Connect new service</p>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integration; 