import { useState } from "react";

function Footer() {
  const data = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer: "",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer: "",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Digital Marketing FAQs</h1>
      <ul className="list-none mb-4">
        {data.map((item, index) => (
          <li
            key={index}
            className={`py-2 ${activeIndex === index ? "bg-gray-100" : ""}`}
          >
            <button
              onClick={() => setActiveIndex(index)}
              className="w-full text-left"
            >
              {item.question}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-white p-4 rounded shadow">
        <p>{data[activeIndex].answer}</p>
      </div>
      <button

        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Question
      </button>
      {data.map((item, index) => (
        <div key={index} className="flex flex-wrap mb-4">
          <input
            type="text"
            value={item.question}
        
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter question"
          />
          <textarea
            value={item.answer}
            )}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter answer"
          />
        </div>
      ))}
    </div>
  );
}

export default App;
