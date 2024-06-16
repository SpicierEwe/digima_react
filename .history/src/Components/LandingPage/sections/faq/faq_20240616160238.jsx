import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam temporibus, corporis explicabo dolores eligendi ipsa, nisi, omnis sapiente dignissimos neque nostrum voluptatibus tenetur quis quasi impedit quibusdam eveniet adipisci doloribus.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam temporibus, corporis explicabo dolores eligendi ipsa, nisi, omnis sapiente dignissimos neque nostrum voluptatibus tenetur quis quasi impedit quibusdam eveniet adipisci doloribus.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam temporibus, corporis explicabo dolores eligendi ipsa, nisi, omnis sapiente dignissimos neque nostrum voluptatibus tenetur quis quasi impedit quibusdam eveniet adipisci doloribus.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-evenly p-5 md:p-20 gap-5 gap-x-52 ">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Digital Marketing FAQs
        </h1>
        <p className="md:mt-7">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings
        </p>
      </div>
      <ul className="flex flex-col gap-y-14 list-none mb-4">
        {data.map((item, index) => {
          return (
            <li key={index} className="py-2 border-b-2 border-black pb-7">
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="w-full text-left"
              >
                {/* question */}
                <div className="flex items-center justify-between cursor-pointer hover:bg-secondary">
                  <h2 className="text-left font-semibold text-2xl w-[87%]">
                    {item.question}
                  </h2>
                  <div className="text-3xl">
                    {activeIndex === index ? "-" : "+"}
                  </div>
                </div>

                {/* answer */}
                <div
                  className={`${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  } overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <p className="mt-10">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
