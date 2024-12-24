"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type Data = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export function AppleCardsCarouselDemo({ title, data }: {
  title: string;
  data: Array<Data>;
}) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-5">
      <h2 className="max-w-7xl pl-4 mx-5 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {title}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
