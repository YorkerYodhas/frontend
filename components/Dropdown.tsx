import { useState } from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

// Usage:
// <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
