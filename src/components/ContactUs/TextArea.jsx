import React from "react";
import "./overrides.css";

import { Input } from "antd";

import { cn } from "@/util";

const { TextArea: AntTextArea } = Input;

/**
 * @typedef {Object} LabelProps
 * @property {string} label
 */
/**
 *
 * @param {LabelProps & import("antd/es/input").TextAreaProps} props
 * @returns {React.ReactNode}
 */
export const TextArea = ({ label, id, className, ...rest }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
        {label}
      </label>
      <AntTextArea
        id={id}
        className={cn(
          "mle_text_area mt-3 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500",
          className
        )}
        {...rest}
      />
    </div>
  );
};
