import "react-international-phone/style.css";
import "./overrides.css";

import { PhoneInput } from "react-international-phone";

import { cn } from "@/util";

/**
 * @typedef {Object} PhoneInputWithCountryCodeProps
 * @property {string} label
 * @property {string} error
 */
/**
 *
 * @param {PhoneInputWithCountryCodeProps & import("react-international-phone").PhoneInputProps} props
 * @returns {React.ReactNode}
 */
export function PhoneInputWithCountryCode({
  id,
  label,
  className,
  error,
  ...rest
}) {
  return (
    <div className="mb-4 w-full relative">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
        {label}
      </label>
      <PhoneInput
        className={cn(
          "mle_phone_input mt-3 rounded-md font-poppins",
          className
        )}
        {...rest}
      />
      {error && <p className="absolute text-sm text-red-400 pt-1">{error}</p>}
    </div>
  );
}
