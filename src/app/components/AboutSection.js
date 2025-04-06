import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="flex w-full flex-col items-center gap-8 p-7">
      <h2 className="text-blue font-[family-name:var(--font-press-start-2p)] text-4xl font-bold">
        About We
      </h2>
      <p className="max-w-[70ch] text-center font-[family-name:var(--font-fira-code)]">
        <span className="font-bold">WeCoded</span> is an annual event that
        celebrates{" "}
        <span className="font-bold italic">
          diversity, inclusion, and empowerment
        </span>{" "}
        in the tech industry. The event is an opportunity to share{" "}
        <span className="font-bold italic">
          experiences, stories, knowledge
        </span>
        , and connect with the community.{" "}
        <span className="font-bold">we_coded</span> is our little love letter to
        the community, one that hopes for a more diverse, equitable, and
        inclusive future for the tech world. In year’s past, we have used this
        time to look at accomplishments from our community, ask questions, share
        space, and celebrate the achievements of others.
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
            Since 2018, DEV has celebrated International Women's Day with{" "}
            <Link
              href="https://dev.to/jess/everyone-please-join-us-for-shecoded-2018--56l2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:text-blue font-bold underline"
            >
              SheCoded
            </Link>
            , a call to action for the community to share powerful stories from
            women in tech about their journeys, challenges, and triumphs. What
            began as a platform for women's voices naturally evolved into{" "}
            <Link
              href="https://dev.to/devteam/join-us-for-wecoded-2023-9cj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:text-blue font-bold underline"
            >
              WeCoded
            </Link>{" "}
            in 2023 — an inclusive space that amplifies all underrepresented and
            marginalized voices in our industry.
          </p>
          <p className="my-4">
            This evolution reflects our commitment to creating a community where
            everyone can see themselves represented, share their experiences,
            and find inspiration. WeCoded builds on the foundation of SheCoded
            while expanding our celebration to embrace the rich diversity of
            perspectives that make our community stronger.
          </p>
          <p>
            <span className="font-bold">
              For 2025, we're taking WeCoded to the next level by transforming
              it into a DEV Challenge format for the first time.
            </span>{" "}
            We hope this allows even more community members to participate,
            whether by sharing personal stories or showcasing technical
            skills—creating more opportunities for voices to be heard and the
            overall importance of diversity and inclusion to be recognized.
          </p>
        </div>
        <Link
          href="#stories"
          className="bg-blue hover:text-green hover:border-green p-2 font-bold hover:border-2"
        >
          See We Stories
        </Link>
      </article>
    </section>
  );
}
