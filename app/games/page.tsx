import React from "react";

const Games = () => {
  const platform = [
    { name: "Playstation" },
    { name: "Xbox" },
    { name: "PC" },
    { name: "Nintendo" },
  ];

  return (
    <div className="w-full h-full mt-24">
      <div className="items-center justify-center text-center bg-red-600 w-full h-[170px]">
        <div className="mx-[500px] text-left pt-4 ">
          <div className="border-b-1">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-bold text-gray-300  pb-2">
                Shop All Games By Platform
              </h1>
            </div>
          </div>
          <div className="flex gap-6 text-center justify-center p-1">
            {platform.map((platform) => (
              <div key={platform.name}>
                <div className="p-1">
                  <h1 className="text-2xl font-semibold cursor-pointer transition-all rounded-lg duration-150 hover:bg-red-400 px-2">
                    {platform.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
