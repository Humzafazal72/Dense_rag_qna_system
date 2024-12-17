const Searchbar = () => {
  return (
    <div className="w-full flex items-center sticky top-0 bg-lightDark pb-5">
      <div className="w-full relative flex items-center">
        <SearchbarIconSVG className="absolute left-[10px]" />
        <input
          placeholder="Search chat history"
          type="search"
          name="search"
          className="w-full pl-[34px] bg-transparent border-[#898A96] border focus:outline-none py-3
         placeholder:text-[#898A96] text-sm leading-[14.52px] font-inter
            rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Searchbar;

const SearchbarIconSVG = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="#898A96"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9996 14.0016L11.0996 11.1016"
      stroke="#898A96"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
