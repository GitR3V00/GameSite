import React from "react";
import { gameArray, Game } from "../GameArrays";
import { notFound } from "next/navigation";

import ClientGame from "./clientgame";

type Props = {
  params: {
    game: string;
  };
};

const GamesPage = async ({ params }: Props) => {
  const { game: slug } = await params;

  const gameData = gameArray.find((game): game is Game => game.slug === slug);

  if (!gameData) {
    return notFound();
  }

  return (
    <div className="mt-32">
      <div className="border-b mx-auto px-4 max-w-screen-xl mb-10">
        <h1 className="text-black font-bold text-4xl">{gameData.name}</h1>
      </div>
      <div className=" border-b">
        <ClientGame gameData={gameData} />
      </div>
      <div className="mx-135">
        <h1 className="text-black font-bold text-3xl mb-2 mt-2"></h1>
      </div>
    </div>
  );
};

export default GamesPage;
