// components/Accordion.tsx
"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

interface AccordionItem {
  title: string;
  content: string;
  imageUrl: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Secure',
    content: 'We employ the securest protocols to safeguard your funds.',
    imageUrl: '/images/secure.svg', // Replace with your image path
  },
  {
    title: 'Simple Risk-Management',
    content: 'Details about risk management.',
    imageUrl: '/images/secure.svg', // Replace with your image path
  },
  {
    title: 'Easy to use',
    content: 'Details about ease of use.',
    imageUrl: '/images/secure.svg', // Replace with your image path
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion bg-black">
      {accordionItems.map((item, index) => (
        <div key={index} className="accordion-item border-b border-gray-200 py-4 md:py-8 ">
          <button
            className="accordion-header w-full text-left px-4 py-2 bg-black text-white flex justify-between items-center cursor-pointer text-3xl"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span className={`ml-2 transition-transform duration-1000 ease-in-out ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
              {activeIndex === index ? <FaMinus size={24} /> : <FaPlus size={24} />}
            </span>
          </button>
          <div className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-[0.1px]'}`}>
            <div className="p-4 text-white flex justify-between ">
              <p className="text-gray-400 w-1/3">{item.content}</p>
              <div className="w-2/3 md:w-3/4">
                <Image src={item.imageUrl} alt={item.title} width={900} height={300}  />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
