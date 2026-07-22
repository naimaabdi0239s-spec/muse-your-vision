import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, findCaseStudy } from "@/lib/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = findCaseStudy(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return { meta: [{ title: "Project not found — Muse" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${p.title} — Muse case study`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/work/${p.slug}` }],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <main className="min-h-screen bg-cream text-coffee flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-4xl">Project not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-maroon">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </main>
  ),
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== project.slug);

  return (
    <div className="min-h-screen bg-cream text-coffee">
      <header className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
        <Link to="/" className="muse-wordmark text-5xl leading-none pb-1">
          Muse
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-coffee hover:text-maroon">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3">{project.tag}</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-chocolate">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-coffee/80 leading-relaxed">{project.description}</p>

        <div className="mt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-maroon text-maroon px-5 py-2 text-xs uppercase tracking-widest hover:bg-maroon hover:text-cream transition-colors inline-flex items-center gap-2"
          >
            View live project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {project.gallery.map((img: (typeof project.gallery)[number], i: number) => (
            <figure key={i}>
              {img.label && <span className="maroon-tag mb-3">{img.label}</span>}
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                width={1600}
                height={1000}
                className="mt-3 w-full aspect-[4/3] object-cover rounded-lg border border-[color:var(--maroon)]/20"
              />
            </figure>
          ))}
        </div>

        <section className="mt-20 pt-10 border-t border-[color:var(--maroon)]/20">
          <h2 className="font-serif text-3xl mb-6">More work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className="group bg-beige rounded-xl overflow-hidden border-l-4 flex"
                style={{ borderLeftColor: "var(--maroon)" }}
              >
                <img
                  src={o.cover}
                  alt={`${o.title} preview`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-40 h-32 object-cover"
                />
                <div className="p-4 flex items-start justify-between gap-3 flex-1">
                  <div>
                    <span className="maroon-tag mb-2">{o.tag}</span>
                    <h3 className="font-serif text-lg mt-2">{o.title}</h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-maroon mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
