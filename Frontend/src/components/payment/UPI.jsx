import React from "react";

export const UPI = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
      <div className="col-span-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name 
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2">
        <label
          htmlFor="ID"
          className="block text-sm font-medium text-gray-700"
        >
          UPI ID
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="ID"
            id="ID"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2">
        <label
          htmlFor="pin"
          className="block text-sm font-medium text-gray-700"
        >
          UPI PIN
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="pin"
            id="pin"
            className="block w-full p-1  border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
    </div>
  );
};
