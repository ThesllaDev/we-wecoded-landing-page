"use client";
import { useState } from "react";
import Link from "next/link";

export default function MenuNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-blue hover:text-green font-[family-name:var(--font-press-start-2p)] text-4xl font-bold"
        >
          WeCoded
        </Link>
        <button
          aria-label="Toggle navbar menu"
          className="border-red rounded-lg border-2 border-solid bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="hover:bg-red h-9 w-12 hover:stroke-white"
            fill="none"
            stroke="blue"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      <nav className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex w-full flex-col gap-4 text-end lg:flex-row">
          <li>
            <Link
              href="#about"
              className="text-blue border-green hover:bg-green border-2 px-2 py-4 font-[family-name:var(--font-press-start-2p)] font-bold"
            >
              About We
            </Link>
          </li>
          <li>
            <Link
              href="#stories"
              className="text-blue border-green hover:bg-green border-2 px-2 py-4 font-[family-name:var(--font-press-start-2p)] font-bold"
            >
              Stories
            </Link>
          </li>
          <li>
            <Link
              href="#history"
              className="text-blue border-green hover:bg-green border-2 px-2 py-4 font-[family-name:var(--font-press-start-2p)] font-bold"
            >
              Inspiring History
            </Link>
          </li>
          <li>
            <Link
              href="#support"
              className="text-blue border-green hover:bg-green border-2 px-2 py-4 font-[family-name:var(--font-press-start-2p)] font-bold"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
