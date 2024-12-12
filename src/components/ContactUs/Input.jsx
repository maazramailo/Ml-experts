import React from "react";

import { Input as AntInput } from "antd";

import { cn } from "@/util";

/**
 * @typedef {Object} LabelProps
 * @property {string} label
 */
/**
 *
 * @param {LabelProps & import("antd").InputProps} props
 * @returns {React.ReactNode}
 */
const Input = ({ label, id, className, error, ...rest }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
        {label}
      </label>
      <AntInput
        id={id}
        className={cn(
          "mt-3 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 font-poppins",
          className
        )}
        {...rest}
      />
      {error && <p className="absolute text-sm text-red-400 pt-1">{error}</p>}
    </div>
  );
};

export default Input;
