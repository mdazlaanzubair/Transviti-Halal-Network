"use client";

const PopularPlaces = () => {
  const places = [
    {
      title: "Canada",
      desc: "Canada is a country in North America that is known for its vast wilderness, friendly people, and maple syrup. The capital of Canada is Ottawa, and the largest city is Toronto.",
      img: "https://images.unsplash.com/photo-1617803672592-177dbdb3abfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbmFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
        listings: 45,
        events: 5,
      },
    },
    {
      title: "Australia",
      desc: "Australia is a country in Oceania that is known for its beaches, deserts, and unique wildlife. The capital of Australia is Canberra, and the largest city is Sydney.",
      img: "https://images.unsplash.com/photo-1610056352054-a68fe4f998e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      stats: {
        listings: 30,
        events: 15,
      },
    },
    {
      title: "America",
      desc: "America is a colloquial term for the United States of America, a country in North America that is known for its diversity, economic power, and cultural influence. The capital of the United States is Washington, D.C., and the largest city is New York City.",
      img: "https://images.unsplash.com/photo-1590233183882-85f1dee2fb83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
        listings: 50,
        events: 10,
      },
    },
    {
      title: "England",
      desc: "England is a country in Europe that is known for its history, culture, and literature. The capital of England is London, and the largest city is Birmingham.",
      img: "https://images.unsplash.com/photo-1587978191773-ae3cd9e26501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      stats: {
        listings: 10,
        events: 1,
      },
    },
  ];

  return (
    <div className="hero bg-base-100 rounded-box shadow-md">
      <div className="hero-content flex-col w-full">
        <h4 className="flex flex-row justify-start items-center gap-3 text-lg font-semibold text-primary mr-auto">
          <span className="w-10 h-0.5 bg-base-content"></span> Popular Places
        </h4>
        <ul className="w-full">
          {places.map((place, index) => (
            <li
              key={index}
              className="flex flex-row justify-start items-center gap-5 mb-5"
            >
              <div className="avatar">
                <div className="w-40 rounded">
                  <img src={place.img} />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">{place.title}</h1>
                <p className="font-light">{place.desc}</p>
                <br />
                <div className="flex flex-row justify-between items-center gap-3">
                  <div className="badge badge-ghost">
                    Listings {place.stats.listings}
                  </div>
                  <div className="badge badge-ghost">
                    Events {place.stats.events}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPlaces;
