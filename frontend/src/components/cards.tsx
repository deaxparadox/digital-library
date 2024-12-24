import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
{
    title: "Fiction & Literature",
    description:
        "Explore a world of stories through books, novels, and literary content tailored for readers of all genres.",
    link: "bookshelf/fiction",
    },
    {
        title: "Non-Fiction",
        description:
          "Dive into factual content, documentaries, and resources that expand knowledge and insight.",
        link: "bookshelf/nonfiction",
      },
  {
    title: "Academic",
    description:
     "A platform providing educational resources and tools for learners and educators.",
    link: "bookshelf/academic",
  },
  

];
