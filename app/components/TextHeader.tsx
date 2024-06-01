import React from "react";

interface HeaderTextProps {
  text: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
  const textParts = text.split("/");
  return (
    <h1 className="text-4xl md:text-[54px] leading-snug max-w-2xl my-16 ">
      {textParts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== textParts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default HeaderText;
