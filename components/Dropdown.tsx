import { useState, useEffect } from "react";

interface DropdownProps {
  options: string[];
  value: any;
  set: any;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, set }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionClicked = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    value(option);
  };

  useEffect(() => {
    if (set !== Object) {
      console.log("set", set);
      setSelectedOption(set);
    }
  }, [set]);

  return (
    <div className="relative inline-block text-left w-full mt-3 mb-4">
      <div>
        <div
          className="flex flex-row justify-between align-middle w-full h-[35px] bg-input pl-4 pr-4 pt-2"
          onClick={() => setIsOpen(!isOpen)}>
          {selectedOption || "Select"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full z-10 rounded-md shadow-lg bg-input ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            {options.map((option, index) => (
              <div
                key={index}
                className="block px-4 py-2 cursor-pointer text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={onOptionClicked.bind(this, option)}>
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
