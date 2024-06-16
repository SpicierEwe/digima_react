import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer: "+",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer: "+",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer: "+",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-evenly p-5  gap-5">
      <div className="text-start">
        <h1 className="text-3xl font-bold mb-4">Digital Marketing FAQs</h1>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings
        </p>
      </div>
      <ul className="list-none mb-4">
        {data.map((item, index) => (
          <li
            key={index}
            className={`py-2 ${activeIndex === index ? "bg-gray-100" : ""}`}
          >
            <div
              onClick={() => setActiveIndex(index)}
              className="w-full text-left font-semibold"
            >
              <h2 className="w-full text-left font-semibold">
                {item.question}
              </h2>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
