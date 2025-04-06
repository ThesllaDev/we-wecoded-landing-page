"use client";
import { useEffect, useState } from "react";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";

export default function WeStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?tag=wecoded&per_page=6",
        );
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Erro ao buscar stories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, []);

  return (
    <section
      id="stories"
      className="flex flex-wrap items-center justify-center gap-4 p-7"
    >
      <header className="mb-4 text-center">
        <h2 className="text-blue font-[family-name:var(--font-press-start-2p)] text-4xl">
          We Stories
        </h2>
        <p className="my-2.5 max-w-[70ch] font-[family-name:var(--font-fira-code)]">
          <span className="font-bold italic">WeCoded</span> is a celebration of
          the diverse voices in our community. We invite you to share your
          stories, experiences, and insights with us. Join us in amplifying the
          voices that shape the future of technology.
          <br />
          Explore our collection of stories and be inspired by the diverse
          community that is WeCoded.
        </p>
        <p className="mb-5">1200+ stories shared by the community</p>
        <Link
          href="https://dev.to/t/wecoded"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green text-blue hover:border-blue p-2 font-bold hover:border-2"
        >
          See all stories
        </Link>
        <p className="mt-4">
          See{" "}
          <Link
            href="https://dev.to/shecoded"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-blue font-bold underline"
          >
            SheCoded
          </Link>{" "}
          and{" "}
          <Link
            href="https://dev.to/wecoded"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-blue font-bold underline"
          >
            WeCoded
          </Link>{" "}
          on dev.to
        </p>
      </header>

      {loading ? (
        <p>Loading stories...</p>
      ) : (
        stories.map((story) => (
          <SpotlightCard key={story.id}>
            <h3 className="text-purple text-2xl font-bold">{story.title}</h3>
            <p className="text-white">{story.description}</p>
            <a
              href={story.canonical_url}
              className="bg-green text-blue hover:border-blue self-end p-2 font-bold hover:border-2"
            >
              Read more
            </a>
          </SpotlightCard>
        ))
      )}
      <SpotlightCard>
        <h3 className="text-blue font-[family-name:var(--font-press-start-2p)] text-2xl font-bold">
          Get Involved!
        </h3>
        <ul className="my-4 list-disc text-white">
          <li>Support, react and share the content</li>
          <li>
            Add pronous to{" "}
            <Link
              href="https://dev.to/settings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:text-blue font-bold underline"
            >
              your profile on dev.to
            </Link>{" "}
          </li>
          <li>Supp orgs and communitys</li>
        </ul>
        <a
          href="https://dev.to/new/wecoded"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue hover:text-green hover:border-green hover:border-2 p-2 font-bold"
        >
          Write a #wecoded post
        </a>
      </SpotlightCard>
    </section>
  );
}
