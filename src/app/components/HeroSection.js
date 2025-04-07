import Link from "next/link";
import Iridescence from "./Iridiscence";

export default function MenuNavBar() {
  return (
    <header className="text-center">
      <Iridescence>
        <h1 className="text-purple absolute top-[30%] bg-white/50 p-4 font-[family-name:var(--font-press-start-2p)] text-3xl md:max-w-[30ch]">
          We Celebration of Gender Equity in Software Development
        </h1>
        <p className="absolute top-[70%] bg-black/50 p-2 text-center font-[family-name:var(--font-fira-code)] text-2xl text-white md:max-w-[60ch]">
          Join our annual community celebration and amplify the diverse voices
          shaping the future of technology.
        </p>
        <div className="absolute top-[99%] flex w-full justify-center gap-4">
          <Link
            className="bg-purple border-blue hover:text-green hover:border-green border-2 p-2 font-bold"
            href="#about"
          >
            About We
          </Link>
          <Link
            className="bg-purple border-blue hover:text-green hover:border-green border-2 p-2 font-bold"
            href="#stories"
          >
            We Stories
          </Link>
        </div>
      </Iridescence>
    </header>
  );
}
