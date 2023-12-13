import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className=" flex mb-2 gap-2 items-center">
        <label
          htmlFor={name}
          className=" font-medium block text-gray-900 text-sm"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className=" rounded-[5px] font-semibold  text-xs text-black bg-[#ECECF1] py-1 px-2"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className=" bg-gray-50 border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full border p-3"
      />
    </div>
  );
};

export default FormField;
