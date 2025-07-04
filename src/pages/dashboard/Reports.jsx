import React from 'react';

const Reports = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Reports & Analytics</h1>
      <p className="text-gray-600 mb-6">View detailed reports and analytics for your business</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Monthly Revenue</h3>
          <p className="text-3xl font-bold text-blue-600">$45.2K</p>
          <p className="text-sm text-blue-600">+15% from last month</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">User Growth</h3>
          <p className="text-3xl font-bold text-green-600">+23%</p>
          <p className="text-sm text-green-600">1,247 total users</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Conversion Rate</h3>
          <p className="text-3xl font-bold text-purple-600">8.5%</p>
          <p className="text-sm text-purple-600">+2.1% improvement</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Avg Session</h3>
          <p className="text-3xl font-bold text-orange-600">4.2min</p>
          <p className="text-sm text-orange-600">+0.8min increase</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Performing Pages</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Dashboard</span>
              <span className="text-gray-900 font-semibold">2,847 views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Projects</span>
              <span className="text-gray-900 font-semibold">1,923 views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Reports</span>
              <span className="text-gray-900 font-semibold">1,456 views</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Monthly Sales Report</p>
                <p className="text-sm text-gray-600">Generated 2 hours ago</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">User Activity Report</p>
                <p className="text-sm text-gray-600">Generated 1 day ago</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 