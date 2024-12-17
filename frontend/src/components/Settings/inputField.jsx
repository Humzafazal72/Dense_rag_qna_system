const InputField = ({ labelText, placeholder, type, name }) => {
  return (
    <div className="w-full flex flex-col gap-2 text-sm">
      <label htmlFor="">{labelText}</label>
      <input
        name={name}
        className="w-full pl-[14px] py-3 bg-[#25262D] text-[#676871] rounded-lg focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
