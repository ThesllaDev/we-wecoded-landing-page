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
        <h2 className="text-purple font-[family-name:var(--font-press-start-2p)] text-4xl">
          We Stories
        </h2>
        <p className="my-2.5 max-w-[70ch] font-[family-name:var(--font-fira-code)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          veritatis perferendis amet reprehenderit quo commodi cumque temporibus
          aut repellat voluptas, doloribus quidem sed tempora optio aliquam.
          Ipsa inventore et nisi!
        </p>
        <Link
          href="https://dev.to/t/wecoded"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green text-blue hover:border-blue p-2 hover:border-2"
        >
          See all stories
        </Link>
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
              className="bg-green text-blue hover:border-blue self-end p-2 hover:border-2"
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
          <li>Apoie, reaja e compartilhe os conteúdos</li>
          <li>Add pronous to your profile on dev.to</li>
          <li>Supp orgs and communitys</li>
        </ul>
        <a
          href="https://dev.to/new/wecoded"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue hover:text-green hover:border-green p-2"
        >
          Write a post
        </a>
      </SpotlightCard>
    </section>
  );
}
