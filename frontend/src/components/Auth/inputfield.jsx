const InputField = ({
  type,
  placeholder,
  label,
  name,
  hasError,
  className,
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label
        htmlFor=""
        className="mb-2 font-medium text-xs 2xl:text-base font-inter text-white"
      >
        {label}
      </label>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        required
        className={`w-full 2xl:text-base text-sm placeholder:text-[#98A2B3] rounded-lg bg-[#25262D] 
          py-3 2xl:py-4 px-[14px] 
          focus:outline-none focus:ring-[1px] focus:ring-orange
          ${hasError ? `border-[1px] border-[#F04438]` : `border-none`}`}
      />
    </div>
  );
};

export default InputField;
