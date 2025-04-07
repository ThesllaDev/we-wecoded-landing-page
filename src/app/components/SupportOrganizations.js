import Link from "next/link";

const organizations = [
  {
    name: "Women Techmakers",
    url: "https://developers.google.com/womentechmakers",
  },
  {
    name: "Girls Who Code",
    url: "https://girlswhocode.com/",
  },
  {
    name: "WoMakersCode",
    url: "https://womakerscode.org/",
  },
  {
    name: "The Anita B Organization",
    url: "https://anitab.org/",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/",
  },
  {
    name: "The Astraea Lesbian Foundation for Justice, which funds Lesbians Who Tech",
    url: "https://astraeafoundation.org/home/",
  },
  {
    name: "LGBTQ in Technology Slack",
    url: "https://lgbtq.technology/",
  },
  {
    name: "Pride in STEM",
    url: "https://prideinstem.org/",
  },
  {
    name: "Lesbians Who Tech",
    url: "https://lwtsquad.com/techfutures2025/",
  },
  {
    name: "O4U Out for Undergrad",
    url: "https://www.outforundergrad.org/",
  },
  {
    name: "Out in Tech",
    url: "https://outintech.com/",
  },
  {
    name: "Trans Tech Social",
    url: "https://transtechsocial.org/",
  },
  {
    name: "Maven Youth",
    url: "https://www.mavenyouth.org/",
  },
  {
    name: "oSTEM",
    url: "https://ostem.org/",
  },
  {
    name: "NOGLSTP",
    url: "https://noglstp.org/",
  },
  {
    name: "Women Who Code",
    url: "https://womenwhocode.com/",
  },
];

export default function SupportOrganizations() {
  return (
    <section
      id="support"
      className="flex flex-col items-center gap-8 p-4 text-center"
    >
      <h2 className="text-purple font-[family-name:var(--font-press-start-2p)] text-2xl font-bold">
        Support Organizations That Support Gender Diversity in Tech
      </h2>
      <p className="max-w-[70ch] font-[family-name:var(--font-fira-code)]">
        To foster awareness and connections within the DEV community, we aim to
        spotlight organizations championing the inclusion and support of women,
        transgender, nonbinary, gender-nonconforming, and two-spirit tech
        professionals. Below is a curated list of 501(c)(3) non-profit
        organizations dedicated to advancing LGBTQ+ representation in the tech
        sphere, deserving of greater recognition and support:
      </p>
      <ul className="flex flex-wrap justify-center gap-4 font-bold">
        {organizations.map((org, index) => (
          <li
            key={index}
            className="hover:text-blue hover:border-green p-2 underline hover:border"
          >
            <Link href={org.url} target="_blank" rel="noopener noreferrer">
              {org.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
