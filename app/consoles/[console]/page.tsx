import React from "react";
import { consoles, Console } from "../consoleArrays";
import { notFound } from "next/navigation";

import ClientConsole from "./Clientconsole";

type Props = {
  params: {
    console: string;
  };
};

const ConsolePage = async ({ params }: Props) => {
  const { console: slug } = await params;

  const consoleData = consoles.find(
    (console): console is Console => console.slug === slug
  );

  if (!consoleData) {
    return notFound();
  }

  return (
    <div className="mt-32">
      <div className="border-b mx-auto px-4 max-w-screen-xl mb-10">
        <h1 className="text-black font-bold text-4xl">{consoleData.name}</h1>
      </div>
      <div className=" border-b">
        <ClientConsole consoleData={consoleData} />
      </div>
      <div className="mx-135">
        <h1 className="text-black font-bold text-3xl mb-2 mt-2">
          Console Specifications
        </h1>
        <p className="text-black">{consoleData.spec}</p>
      </div>
    </div>
  );
};

export default ConsolePage;
