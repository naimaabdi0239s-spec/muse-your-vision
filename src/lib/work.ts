import projectTsfeLive from "@/assets/project-tsfe-live.png.asset.json";
import projectJana from "@/assets/project-jana.png.asset.json";
import projectMedi from "@/assets/project-medi.png.asset.json";
import tsfeAfter1 from "@/assets/tsfe-after-1.png.asset.json";
import tsfeAfter2 from "@/assets/tsfe-after-2.png.asset.json";
import tsfeBefore1 from "@/assets/tsfe-before-1.png.asset.json";
import tsfeBefore2 from "@/assets/tsfe-before-2.png.asset.json";

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  cover: string;
  liveUrl: string;
  summary: string;
  description: string;
  gallery: { src: string; alt: string; label?: "Before" | "After" }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tech-support-for-everyone",
    tag: "Client Work",
    title: "Tech Support For Everyone",
    cover: projectTsfeLive.url,
    liveUrl: "https://techsupportforeveryone.com/",
    summary:
      "A full digital refresh — a modern, human site that finally matches the service behind it.",
    description:
      "Tech Support For Everyone needed a site that felt as approachable as their in-home help. We rebuilt the brand's presence with clearer messaging, a warmer visual language, and a booking flow that gets people from question to appointment in a few taps.",
    gallery: [
      { src: tsfeBefore1.url, alt: "Tech Support For Everyone — original hero, red on dark blue", label: "Before" },
      { src: tsfeBefore2.url, alt: "Tech Support For Everyone — original contact section", label: "Before" },
      { src: tsfeAfter1.url, alt: "Redesigned Tech Support For Everyone hero with friendly photography", label: "After" },
      { src: tsfeAfter2.url, alt: "Redesigned Tech Support For Everyone pricing and availability section", label: "After" },
    ],
  },
  {
    slug: "jana",
    tag: "Demo Project",
    title: "Jańa",
    cover: projectJana.url,
    liveUrl: "https://jana-parisian-elegance.lovable.app/",
    summary:
      "A candlelit corner of Paris — buttery pastries by day, velvet-dark jazz by night.",
    description:
      "Jańa is an editorial demo built to show how a hospitality brand can feel timeless without feeling stiff. Deep burgundy, a hand-drawn wordmark, and quiet interior photography combine into a site that reads like the menu.",
    gallery: [
      { src: projectJana.url, alt: "Jańa homepage hero with elegant script wordmark on a burgundy background" },
    ],
  },
  {
    slug: "medi-estate",
    tag: "Demo Project",
    title: "Medi Estate",
    cover: projectMedi.url,
    liveUrl: "https://medi-estate.lovable.app",
    summary:
      "Where the Mediterranean meets the Gulf — a real-estate concept for beachfront villas across the UAE.",
    description:
      "Medi Estate is a demo for a modern real-estate brand. We paired oceanfront imagery with a serif display face and quiet UI so the listings do the talking.",
    gallery: [
      { src: projectMedi.url, alt: "Medi Estate homepage with a beachfront villa at golden hour" },
    ],
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
