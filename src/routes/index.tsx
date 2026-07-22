import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
  Quote,
  Play,
} from "lucide-react";

import { caseStudies } from "@/lib/work";

const QUESTIONNAIRE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRcec-Gcn2ZdkDfO6dTEtdjNN54-_ePwjadFpEeZJGQE8Fvw/viewform?usp=publish-editor";

const services = [
  {
    title: "Website Design & Development",
    body: "Custom-built sites that read like a magazine and run like a machine, designed and coded end-to-end.",
  },
  {
    title: "Website Refresh",
    body: "For brands whose site no longer matches how far they've come. New life, same story, sharper.",
  },
  {
    title: "Logo & Brand Design",
    body: "Wordmarks, palettes, and identity systems with a warm, editorial, considered feel.",
  },
];

const steps = [
  { n: "01", title: "Tell Us Your Vision", body: "Share your idea, your brand, and where you'd like to go. Every detail matters." },
  { n: "02", title: "Let's Talk", body: "A conversation to align on tone, scope, and the feeling your project should carry." },
  { n: "03", title: "We Create", body: "Design and build, hand in hand. Considered, editorial, and made just for you." },
  { n: "04", title: "You Launch", body: "We hand over the finished piece and support you as it steps into the world." },
];

const testimonials = [
  {
    name: "Tobias",
    role: "Tech Support For Everyone",
    quote:
      "Amazing all around. Very quick to respond to requests and coordinate with me, very accurate interpretation of my wants, clearly a result of thorough planning. Very receptive to my major and minor changes, and delivered an amazing final product. Would work with again!",
    rating: 5,
  },
  {
    name: "Keith",
    role: "Freelance client",
    quote:
      "Truly amazing work! Built me a website straight out of my vision and had it running within 2 days. Definitely would recommend.",
    rating: 5,
  },
  {
    name: "Mona",
    role: "Former client",
    quote:
      "Working with Muse was such a great experience. They really took the time to understand what I wanted and brought my vision to life better than I imagined. The website looks amazing, feels professional, and makes my business look so much more put together. I couldn't be happier with how it turned out.",
    rating: 5,
  },
];

const featured = caseStudies[0];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "#muse",
      name: "Muse",
      description:
        "A remote creative studio crafting editorial websites, brand identity, and custom digital experiences.",
      url: "/",
      areaServed: "Worldwide",
      sameAs: ["https://www.instagram.com/musewebstudio/", "https://www.facebook.com/profile.php?id=61592306638218"],
      founder: { "@type": "Person", name: "Muse Founder" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: testimonials.length.toString(),
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: { "@type": "Rating", ratingValue: t.rating.toString(), bestRating: "5" },
        reviewBody: t.quote,
      })),
    },
  ],
};

function track(event: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as { plausible?: (e: string) => void }).plausible === "function") {
    (window as unknown as { plausible: (e: string) => void }).plausible(event);
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muse — Your vision. Our muse." },
      {
        name: "description",
        content:
          "Muse is a remote creative studio crafting editorial websites, brand identity, and custom digital experiences with warmth and intention.",
      },
      { property: "og:title", content: "Muse — Your vision. Our muse." },
      {
        property: "og:description",
        content:
          "A remote creative studio for websites, brand identity, and custom digital experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "REPLACE_WITH_GOOGLE_TOKEN" },
      { name: "msvalidate.01", content: "REPLACE_WITH_BING_TOKEN" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  const beforeImage = featured.gallery.find((g) => g.label === "Before");
  const afterImage = featured.gallery.find((g) => g.label === "After");

  return (
    <div className="min-h-screen bg-cream text-coffee">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--cream)]/90 border-b border-[color:var(--maroon)]/15">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="muse-wordmark text-5xl animate-slide-in-left leading-none pb-1" aria-label="Muse — home">
            Muse
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-coffee">
            <a href="#work" className="hover:text-maroon transition-colors">Work</a>
            <a href="#services" className="hover:text-maroon transition-colors">Services</a>
            <a href="#about" className="hover:text-maroon transition-colors">About</a>
            <a href="#contact" className="hover:text-maroon transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            onClick={() => track("cta_start_your_vision")}
            className="rounded-full border border-coffee px-5 py-2 text-xs uppercase tracking-widest text-coffee hover:bg-coffee hover:text-cream transition-colors"
          >
            Start your vision
          </a>
        </div>
      </header>

      <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3 animate-fade-in">
            a remote creative studio
          </p>
          <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] text-chocolate animate-fade-in-slow">
            Your vision.<br />Our <em className="italic">muse</em>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-coffee/80 max-w-md leading-relaxed">
            We craft websites, brands, and digital experiences with warmth, care, and a considered editorial hand — made to feel like you, not a template.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={() => track("cta_lets_work_together")}
              className="rounded-full bg-coffee text-cream px-6 py-3 text-sm hover:bg-chocolate transition-colors inline-flex items-center gap-2"
            >
              Let's work together <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              onClick={() => track("cta_view_our_work")}
              className="rounded-full border border-coffee text-coffee px-6 py-3 text-sm hover:bg-coffee hover:text-cream transition-colors"
            >
              View our work
            </a>
          </div>
        </div>
        <div className="justify-self-end w-full max-w-sm">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-beige border border-[color:var(--maroon)]/30">
            <video
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/hero%20(2).mp4" type="video/mp4" />
</video>
           
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14 animate-fade-in">
        <h2 className="font-serif text-4xl md:text-5xl mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-beige rounded-xl p-8 border-l-4"
              style={{ borderLeftColor: "var(--maroon)" }}
            >
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-coffee/80 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-coffee/80">
          Have something else in mind?{" "}
          <a href="#contact" className="text-maroon hover:underline underline-offset-4">
            Let's talk about custom work →
          </a>
        </p>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3">Featured project</p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 className="font-serif text-4xl md:text-5xl">{featured.title}</h2>
          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-maroon text-maroon px-5 py-2 text-xs uppercase tracking-widest hover:bg-maroon hover:text-cream transition-colors inline-flex items-center gap-2"
          >
            View live project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="max-w-2xl text-coffee/80 mb-10 leading-relaxed">
          A complete digital refresh for Tech Support For Everyone, creating a modern online presence that better reflects their brand, showcases their services, and makes connecting with customers effortless.
        </p>
        {beforeImage && afterImage && (
  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <div className="bg-cream rounded-lg p-4 border border-[color:var(--maroon)]/20">
        <img
          src={beforeImage.src}
          alt={beforeImage.alt}
          loading="lazy"
          width={1600}
          height={1200}
       className="w-full h-[520px] object-contain object-top rounded-md p-6 bg-white"
        />
      </div>

      <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium text-center">
        Before
      </p>
    </div>


    <div>
      <div className="bg-cream rounded-lg p-4 border border-[color:var(--maroon)]/20">
        <img
          src={afterImage.src}
          alt={afterImage.alt}
          loading="lazy"
          width={1600}
          height={1200}
          className="w-full h-[520px] object-contain object-top rounded-md p-6 bg-white"
        />
      </div>

      <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium text-center">
        After
      </p>
    </div>

  </div>
)}
          </div>
        )}
      </section>

     
     {/* EXPLORE WORK */}
<section id="work" className="mx-auto max-w-6xl px-6 py-14">

  <h2 className="font-serif text-4xl md:text-5xl mb-10">
    Explore our work
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {caseStudies.map((w) => (
      <div
        key={w.slug}
        className="group bg-beige rounded-xl overflow-hidden flex flex-col"
      >

        {/* Website Preview */}
        <div className="aspect-[4/3] overflow-hidden bg-cream p-5 flex items-center justify-center">

          <img
            src={w.cover}
            alt={`${w.title} website preview`}
            loading="lazy"
            width={1200}
            height={1500}
            className="
              w-full
              h-full
              object-contain
              object-top
              rounded-lg
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />

        </div>


        {/* Project Info */}
        <div className="p-6 flex items-start justify-between gap-4">

          <div>

            <span className="maroon-tag mb-3">
              {w.tag}
            </span>

            <h3 className="font-serif text-xl mt-3">
              {w.title}
            </h3>

          </div>

        </div>


        {/* Link */}
        <div className="px-6 pb-6">

          <a
            href={w.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-maroon hover:underline underline-offset-4 inline-flex items-center gap-2"
          >
            View live project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>


      </div>
    ))}

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">About Us</h2>
          <p className="text-coffee/80 leading-relaxed max-w-md">
            Muse is a one-woman studio built on the belief that every vision deserves to be brought to life with care. I work closely with you to create something that feels true to you and your brand.
          </p>
          <p className="muse-wordmark text-3xl mt-3 block">Your vision, my mission.</p>
          <a
            href={QUESTIONNAIRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_submit_your_vision")}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-cream transition-colors hover:opacity-90"
            style={{ background: "var(--coffee)" }}
          >
            Submit your vision <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-lg aspect-square rounded-xl overflow-hidden bg-beige border border-[color:var(--maroon)]/20">
            <img
              src="/aboutus.jpg"
              alt="Designer reviewing brand work on a phone beside an iMac showing a color-system layout"
              loading="lazy"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-4xl md:text-5xl mb-10">How it works</h2>
        <div className="grid md:grid-cols-4 md:divide-x md:divide-[color:var(--maroon)]/40">
          {steps.map((s, i) => (
            <div key={s.n} className={`px-0 md:px-6 py-4 ${i === 0 ? "md:pl-0" : ""}`}>
              <p className="text-xs uppercase tracking-[0.2em] text-maroon mb-3">Step {s.n}</p>
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-coffee/80 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-14">Client testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative bg-beige rounded-2xl p-8 pt-10 shadow-sm border border-[color:var(--maroon)]/20 animate-testimonial-slide"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="absolute -top-4 left-6 bg-cream rounded-full p-2 border border-[color:var(--maroon)]/20">
                <Quote className="w-4 h-4 text-maroon" />
              </div>
              <blockquote className="font-serif text-chocolate text-lg leading-snug italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-[color:var(--maroon)]/15">
                <p className="text-sm font-medium text-coffee">{t.name}</p>
                <p className="text-xs text-coffee/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GLOBAL */}
      <section className="mx-auto max-w-6xl px-6 py-14 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">From anywhere, to everywhere</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="maroon-tag">Working globally</span>
          <span className="maroon-tag">100% remote</span>
          <span className="maroon-tag">Available worldwide</span>
        </div>
      </section>

      {/* DUAL CTA */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-[color:var(--maroon)]/20" />
      </div>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-6">
        <div
          className="rounded-xl p-10 border-l-4 flex flex-col justify-between"
          style={{ background: "var(--chocolate)", borderLeftColor: "var(--maroon)", color: "var(--cream)" }}
        >
          <div>
            <h3 className="font-serif text-3xl mb-4" style={{ color: "var(--cream)" }}>Have a vision in mind?</h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm">
              Tell us about your project through our short questionnaire. It's the fastest way to start bringing your vision to life.
            </p>
          </div>
          <a
            href={QUESTIONNAIRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_fill_questionnaire")}
            className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
            style={{ color: "var(--cream)" }}
          >
            Fill the questionnaire <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div
          className="rounded-xl p-10 border-l-4 bg-beige"
          style={{ borderLeftColor: "var(--maroon)" }}
        >
          <h3 className="font-serif text-3xl mb-6">Connect with us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/musewebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("contact_instagram_click")}
                className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61592306638218"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("contact_facebook_click")}
                className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="mailto:musewebsitestudio@gmail.com"
                onClick={() => track("contact_email_click")}
                className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
              >
                <Mail className="w-4 h-4" /> musewebsitestudio@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-10" style={{ borderTop: "2px solid var(--maroon)" }}>
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="muse-wordmark text-6xl leading-none pb-1">Muse</p>
            <p className="mt-3 text-sm text-coffee/70 max-w-xs">
              A remote creative studio for editorial websites, brand identity, and custom digital experiences.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-maroon mb-3">Connect with us</p>
            <ul className="space-y-2 text-sm md:flex md:flex-col md:items-end">
              <li><a href="https://www.instagram.com/musewebstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61592306638218" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="mailto:musewebsitestudio@gmail.com" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Mail className="w-4 h-4" /> musewebsitestudio@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-coffee/60">© 2026 Muse.</div>
      </footer>
    </div>
  );
}
