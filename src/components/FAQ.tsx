'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including custom website development, mobile app development, AI-powered automation solutions, branding and design, and ongoing maintenance and support. Our team specializes in creating tailored solutions that drive business growth."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support and maintenance packages to ensure your digital products remain secure, up-to-date, and performing optimally. This includes regular updates, security patches, performance monitoring, and technical support."
  },
  {
    question: "Can you integrate AI and automation into my project?",
    answer: "Absolutely! We specialize in integrating AI and automation solutions including chatbots, workflow automation, data analytics, personalized recommendations, and more. We'll help identify opportunities where AI can streamline your operations and enhance user experience."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. After understanding your requirements, we provide a detailed proposal with transparent pricing. We believe in delivering value and work within various budget ranges."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[768px] mx-auto space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] rounded-[12px] overflow-hidden transition-all cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="p-6 flex items-center gap-4 hover:bg-[#222222] transition-all">
            <div className={`w-6 h-6 rounded-full bg-[#7370FF] flex items-center justify-center text-white text-[20px] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </div>
            <p className="text-white text-[16px] md:text-[18px] font-normal">
              {item.question}
            </p>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-6 pt-0 text-[#999999] text-[14px] md:text-[16px] leading-relaxed ml-10">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
