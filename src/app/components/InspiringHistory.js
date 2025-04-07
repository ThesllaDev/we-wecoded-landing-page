import Image from "next/image";

export default function InspiringHistory() {
  const figures = [
    {
      name: "Ada Lovelace",
      description:
        "Augusta Ada Byron King, Countess of Lovelace, now known as Ada Lovelace, was an English mathematician and writer. She is mainly recognized today for having written the first algorithm to be processed by a machine, Charles Babbage's Analytical Engine. She is considered the first computer programmer in history.",
      image: "/img/Ada_Lovelace.jpg",
    },
    {
      name: "Hidden Figures",
      description:
        "The movie Hidden Figures portrays the struggle, challenge, and success of three women (Dorothy Vaughan, Katherine Goble Johnson, and Mary Jackson), the African-American mathematicians who played a crucial role at NASA during the space race.",
      image: "/img/Hidden_Figures.png",
    },
    {
      name: "Grace Hopper",
      description:
        "Grace Murray Hopper was an admiral and systems analyst in the United States Navy during the 1940s and 1950s, the creator of the high-level programming language Flow-Matic — the foundation for the creation of COBOL — and one of the first programmers of the Harvard Mark I computer in 1944. The name of the Google app Grasshopper, which is free and focuses on teaching programming through gamified activities, is a tribute to her.",
      image: "/img/Grace_Murray_Hopper.jpg",
    },
  ];

  return (
    <section
      id="history"
      className="mx-auto max-w-6xl px-6 py-16 font-[family-name:var(--font-fira-code)]"
    >
      <h2 className="text-blue mb-2 text-center font-[family-name:var(--font-press-start-2p)] text-4xl font-bold md:text-4xl">
        Inspiring History
      </h2>

      <p className="mb-4 text-center font-bold">
        Honorable and important mentions of women in &quot;STEM&quot; from
        history who inspire!
      </p>

      <div className="grid grid-cols-1 gap-8 font-bold md:grid-cols-2 lg:grid-cols-3">
        {figures.map((figure, index) => (
          <div
            key={index}
            className="border-purple bg-blue/30 shadow-purple overflow-hidden rounded-2xl border-2 border-dotted shadow-lg/90 hover:border-solid"
          >
            <Image
              src={figure.image}
              alt={figure.name}
              width={500}
              height={350}
              className="h-[350px] w-full"
            />
            <div className="p-4">
              <h3 className="text-green mb-2 text-xl font-semibold">
                {figure.name}
              </h3>
              <p className="text-sm text-white">{figure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
