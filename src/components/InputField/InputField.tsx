import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  theme?: "light" | "dark";
}

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses: Record<string, string> = {
  filled: "bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-2",
  outlined: "bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2",
  ghost: "bg-transparent border-b border-gray-300 dark:border-gray-700 focus:ring-1 rounded-none",
};

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  theme = "light",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`flex flex-col w-full ${theme === "dark" ? "text-white" : "text-black"}`}>
      {label && (
        <label className="mb-1 text-sm font-medium" htmlFor={label}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={label}
          type={isPassword && showPassword ? "text" : type}
          value={onChange ? value : undefined}
          defaultValue={!onChange ? value : undefined}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full rounded-lg outline-none transition ${
            sizeClasses[size]
          } ${variantClasses[variant]} ${
            invalid ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />

        {/* Clear button */}
        {clearable && value && !disabled && onChange && (
          <button
            type="button"
            className="absolute right-2 text-gray-400 hover:text-gray-600"
            onClick={() => onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
          >
            <X size={16} />
          </button>
        )}

        {/* Password toggle */}
        {isPassword && !disabled && (
          <button
            type="button"
            className="absolute right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>

      {/* Helper & Error text */}
      {helperText && !invalid && (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
