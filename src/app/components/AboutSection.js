import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="flex w-full flex-col items-center gap-8 p-7">
      <h2 className="text-blue font-[family-name:var(--font-press-start-2p)] text-4xl font-bold">
        About We
      </h2>
      <p className="max-w-[70ch] text-center font-[family-name:var(--font-fira-code)]">
        WeCoded is an annual event that celebrates diversity, inclusion, and
        empowerment in the tech industry. The event is an opportunity to share
        experiences, stories, knowledge, and connect with the community.
      </p>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full justify-around">
          <span className="font-[family-name:var(--font-fira-code)]">
            SheCoded
          </span>
          <span className="font-[family-name:var(--font-press-start-2p)]">
            WeCoded
          </span>
        </div>
        <div className="bg-blue border-purple h-2 w-1/2 overflow-hidden rounded-full border">
          <div className="progress-bar bg-green h-full"></div>
        </div>
      </div>
      <article className="bg-purple/50 flex max-w-[70ch] flex-col items-center gap-4 border-8 border-double p-4">
        <h3 className="text-green text-center font-[family-name:var(--font-press-start-2p)]">
          We Evolution
        </h3>
        <div className="font-[family-name:var(--font-fira-code)]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            optio nemo aliquid aperiam aut sunt vel in, molestias ab voluptates,
            dignissimos minima asperiores fuga hic quod maxime unde provident
            molestiae.S
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste
            maxime ducimus laboriosam at ad sapiente recusandae, explicabo,
            dolores nisi sint labore excepturi sunt facere, nam quis iure
            pariatur laudantium.
          </p>
        </div>
        <Link
          href="#stories"
          className="bg-blue hover:border-2 hover:text-green hover:border-green p-2"
        >
          See We Stories
        </Link>
      </article>
    </section>
  );
}
