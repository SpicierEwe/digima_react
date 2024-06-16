export default function ContentMarketing() {
  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl max-w-lg mx-auto">
        <span className="text-accent"> Content marketing </span> Fueling
        connections, igniting growth.
      </h2>
    </div>
  );
}


import { useState } from 'react';

const data = [
{
    id: 1,
    title: 'Item 1',
    description: 'This is the first item in the array'
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'This is the second item in the array'
  },
  // Add more data objects here
];

function Card() {
  const [dataArray, setDataArray] = useState(data);

  const addItem = () => {
    const newItem = {
      id: dataArray.length + 1,
      title: `New Item ${dataArray.length + 1}`,
      description: `This is the new item ${dataArray.length + 1} in the array`
    };
    setDataArray([...dataArray, newItem]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataArray.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={addItem}
      >
        Add New Item
      </button>
    </div>
  );
}

export default App;