import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Dubai",
    },
  ];
  return (
    <div className="flex justify-center gap-6 flex-col items-center my-6 lg:flex-row  xl:my-6 xl:flex xl:items-center xl:justify-around">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
