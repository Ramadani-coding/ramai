import { Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = () => {
    console.log(inputValue);
    setInputValue("");
  };

  const handleChange = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action of the enter key
      handleInput();
    }
    setInputValue(event.target.value);
  };

  return (
    <div className="h-[80vh] flex justify-center items-end w-full">
      <div className="flex w-full gap-2 py-2 mx-5 md:py-2 md:w-1/2">
        <Textarea
          className="bg-[#F4F4F4] text-lg py-3 px-5 md:px-10 rounded-lg md:rounded-md outline-none w-full text-[#000000] resize-none"
          placeholder="Mau cari apa?"
          id="content"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          onClick={handleInput}
          type="button"
          disabled={!inputValue.trim()}
          className={`bg-[#D7D7D7] flex justify-center items-center w-20 p-2 rounded-lg text-[#F4F4F4] ${
            inputValue.trim() ? "bg-black text-white hover:bg-[#272727]" : ""
          } transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Input;
