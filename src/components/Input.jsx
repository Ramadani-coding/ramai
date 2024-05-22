import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    // Insert newline character after 88 characters
    if (value.length > 88) {
      const lastSpaceIndex = value.lastIndexOf(" ", 88);
      value =
        value.substring(0, lastSpaceIndex) +
        "\n" +
        value.substring(lastSpaceIndex + 1);
    }
    setText(value);
  };

  return (
    <div className="h-[80vh] flex justify-center items-end w-full">
      <div className="relative w-full py-2 mx-5 md:py-2 md:w-1/2">
        <textarea
          className="bg-[#F4F4F4] text-lg py-3 px-5 md:px-10 rounded-lg md:rounded-md outline-none w-full text-[#000000] resize-none overflow-y-auto max-h-40"
          id="content"
          placeholder="Mau tau apa?"
          value={text}
          onChange={handleChange}
          rows={1}
          style={{ height: "auto" }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
        <button className="absolute right-3 top-[45%] transform -translate-y-1/2 bg-[#D7D7D7] p-2 rounded-full hover:bg-black hover:text-white transition-all">
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
