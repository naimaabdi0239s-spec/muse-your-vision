import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import tsfe1 from "@/assets/project-tsfe-1.jpg";
import tsfe2 from "@/assets/project-tsfe-2.jpg";
import tsfeBefore1 from "@/assets/project-tsfe-before-1.jpg";
import tsfeBefore2 from "@/assets/project-tsfe-before-2.jpg";
import projectJana from "@/assets/project-jana.jpg";
import projectMedi from "@/assets/project-medi.jpg";
import avatarTobias from "@/assets/avatar-tobias.jpg";
import avatarKeith from "@/assets/avatar-keith.jpg";
import avatarMona from "@/assets/avatar-mona.jpg";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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

const works = [
  { tag: "Client Work", title: "Tech Support For Everyone", img: tsfe2 },
  { tag: "Demo Project", title: "Jańa", img: projectJana },
  { tag: "Demo Project", title: "Medi Estate", img: projectMedi },
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
    avatar: avatarTobias,
  },
  {
    name: "Keith",
    role: "Freelance client",
    quote:
      "Truly amazing work! Built me a website straight out of my vision and had it running within 2 days. Definitely would recommend.",
    avatar: avatarKeith,
  },
  {
    name: "Mona",
    role: "Former client",
    quote:
      "Working with Muse was such a great experience. They really took the time to understand what I wanted and brought my vision to life better than I imagined. The website looks amazing, feels professional, and makes my business look so much more put together. I couldn't be happier with how it turned out.",
    avatar: avatarMona,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream text-coffee">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--cream)]/90 border-b border-[color:var(--maroon)]/15">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="muse-wordmark text-5xl animate-slide-in-left leading-none pb-1">
            Muse
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-coffee">
            <a href="#work" className="hover:text-maroon transition-colors">Work</a>
            <a href="#services" className="hover:text-maroon transition-colors">Services</a>
            <a href="#about" className="hover:text-maroon transition-colors">About</a>
            <a href="#contact" className="hover:text-maroon transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-coffee px-5 py-2 text-xs uppercase tracking-widest text-coffee hover:bg-coffee hover:text-cream transition-colors"
          >
            Start your vision
          </a>
        </div>
      </header>

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
              className="rounded-full bg-coffee text-cream px-6 py-3 text-sm hover:bg-chocolate transition-colors inline-flex items-center gap-2"
            >
              Let's work together <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="rounded-full border border-coffee text-coffee px-6 py-3 text-sm hover:bg-coffee hover:text-cream transition-colors"
            >
              View our work
            </a>
          </div>
        </div>
        <div className="justify-self-end w-full max-w-sm">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-beige border border-[color:var(--maroon)]/30">
            <img src={heroImg} alt="Studio workspace" className="w-full h-full object-cover" width={800} height={1000} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14 animate-fade-in">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-4xl md:text-5xl">Services</h2>
          <span className="handnote text-3xl">what we do</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-beige rounded-xl p-8 border-l-4 border-l-maroon"
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
          <h2 className="font-serif text-4xl md:text-5xl">Tech Support For Everyone</h2>
          <a
            href="#"
            className="rounded-full border border-maroon text-maroon px-5 py-2 text-xs uppercase tracking-widest hover:bg-maroon hover:text-cream transition-colors inline-flex items-center gap-2"
          >
            View live project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="max-w-2xl text-coffee/80 mb-10 leading-relaxed">
          A complete digital refresh for Tech Support For Everyone, creating a modern online presence that better reflects their brand, showcases their services, and makes connecting with customers effortless.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <span className="maroon-tag mb-4">Before</span>
            <div className="mt-4 grid gap-4">
              <img src={tsfeBefore1} alt="Before 1" className="w-full aspect-[4/3] object-cover rounded-lg border border-[color:var(--maroon)]/20" loading="lazy" />
              <img src={tsfeBefore2} alt="Before 2" className="w-full aspect-[4/3] object-cover rounded-lg border border-[color:var(--maroon)]/20" loading="lazy" />
            </div>
          </div>
          <div>
            <span className="maroon-tag mb-4">After</span>
            <div className="mt-4 grid gap-4">
              <img src={tsfe1} alt="After 1" className="w-full aspect-[4/3] object-cover rounded-lg border border-[color:var(--maroon)]/20" loading="lazy" />
              <img src={tsfe2} alt="After 2" className="w-full aspect-[4/3] object-cover rounded-lg border border-[color:var(--maroon)]/20" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-4xl md:text-5xl">Explore our work</h2>
          <span className="handnote text-3xl">a few favorites</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <a
              key={w.title}
              href="#"
              className="group bg-beige rounded-xl overflow-hidden border-l-4 flex flex-col"
              style={{ borderLeftColor: "var(--maroon)" }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <span className="maroon-tag mb-3">{w.tag}</span>
                  <h3 className="font-serif text-xl mt-3">{w.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-maroon mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">About Us</h2>
          <p className="text-coffee/80 leading-relaxed max-w-md">
            Muse is a one-woman studio built on the belief that every vision deserves to be brought to life with care. I work closely with you to create something that feels true to you and your brand.
          </p>
          <p className="mt-4 handnote text-3xl">Your vision, my mission.</p>
        </div>
        <div className="ml-auto w-full max-w-xs">
          <div className="aspect-square rounded-xl overflow-hidden bg-beige border border-[color:var(--maroon)]/20">
            <img src={aboutImg} alt="Founder at work" className="w-full h-full object-cover" loading="lazy" />
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
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-14">Kind words</h2>
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-slow">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-beige rounded-2xl p-8 pt-10 shadow-sm border border-[color:var(--maroon)]/20"
            >
              <div className="absolute -top-4 left-6 bg-cream rounded-full p-2 border border-[color:var(--maroon)]/20">
                <Quote className="w-4 h-4 text-maroon" />
              </div>
              <p className="font-serif text-chocolate text-lg leading-snug italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[color:var(--maroon)]/15">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-medium text-coffee">{t.name}</p>
                  <p className="text-xs text-coffee/60">{t.role}</p>
                </div>
              </div>
            </div>
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
            href="#"
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
              <a href="#" className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors">
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </li>
            <li>
              <a href="mailto:hello@muse.studio" className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors">
                <Mail className="w-4 h-4" /> hello@muse.studio
              </a>
            </li>
          </ul>
        </div>
      </section>

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
              <li><a href="#" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="mailto:hello@muse.studio" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Mail className="w-4 h-4" /> hello@muse.studio</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-coffee/60">© 2026 Muse.</div>
      </footer>
    </div>
  );
}
