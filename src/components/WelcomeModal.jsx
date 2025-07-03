import React from "react";

const WelcomeModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <h2 className="text-lg font-bold mb-2">
          Nice to meet you, Ranjeet <span role="img" aria-label="wave">👋</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Few more details to personalize your experience
        </p>
        <select className="w-full border rounded p-2 mb-3">
          <option>Which sector does your business operate in?</option>
          {/* Add more options here */}
        </select>
        <input
          className="w-full border rounded p-2 mb-3"
          placeholder="Please share your website URL?"
        />
        <button
          className="w-full bg-blue-800 text-white py-2 rounded font-semibold"
          onClick={onClose}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal; 