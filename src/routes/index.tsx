import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Github, MapPin, ExternalLink, Quote, ImageIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Larence Arroz — Web & WordPress Developer, SEO Specialist" },
      {
        name: "description",
        content:
          "Larence Arroz is a web and WordPress developer with 4+ years building responsive sites, WooCommerce stores and custom plugins for clients in the UK, Canada, Australia and the Philippines.",
      },
      { property: "og:title", content: "Larence Arroz — Web & WordPress Developer" },
      {
        property: "og:description",
        content:
          "Web developer, WordPress specialist and SEO practitioner helping businesses ship fast, functional websites that convert.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { label: "Languages & Tools", items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"] },
  { label: "CMS & Frameworks", items: ["WordPress", "WooCommerce", "Ionic", "React"] },
  { label: "Dev Tools", items: ["Git", "cPanel", "phpMyAdmin"] },
  {
    label: "Plugins & APIs",
    items: ["Elementor", "WooCommerce", "AIOSEO", "Zapier", "SMTP", "Google Analytics"],
  },
  {
    label: "SEO & CRO",
    items: ["On-Page SEO", "Technical SEO", "Google Search Console", "Microsoft Clarity"],
  },
  {
    label: "Other",
    items: [
      "DNS & Cloudflare",
      "Site Migrations",
      "Speed Optimization",
      "Custom Plugin/Theme Dev",
    ],
  },
];

const highlights = [
  "Led a group of developers, delegating tasks according to their strengths.",
  "Optimised a website that finally brought in sales after months of failing to sell due to being non-functional.",
  "Saved a company from a monthly PDF flipbook hosting subscription with a one-time payment alternative.",
  "Developed a custom Appointment Booking plugin using PHP and a Calendar JS library.",
  "Became the lead for the technical side of a company's websites.",
];

const projects = [
  {
    url: "https://evolve-studio.co.uk/",
    name: "Evolve Studio",
    note: "Podcast studio and marketing agency I worked for.",
    image: '/images/evolve-screenshot.jpg',
  },
  {
    url: "https://igniteservice.co.uk/",
    name: "Ignite Service",
    note: "WordPress build — technical side, in collaboration with Evolve Studio.",
    image: '/images/ignite-screenshot.jpg',
  },
  {
    url: "https://premierserviceltd.co.uk/",
    name: "Premier Service Ltd",
    note: "WordPress build — technical side, in collaboration with Evolve Studio.",
    image: null,
  },
  {
    url: "https://www.mmslimited.co.uk/",
    name: "MMS Limited",
    note: "Squarespace site — layout and content overhaul.",
    image: null,
  },
  {
    url: "https://birdiebreaks.com/",
    name: "Birdie Breaks",
    note: "Upcoming WordPress site with WP Travel Engine — all functionality and design implementation.",
    image: null,
  },
  {
    url: "https://evbays.co.uk/",
    name: "EV Bays",
    note: "Evolve Studio website I currently manage.",
    image: null,
  },
  {
    url: "https://fun-play.co.uk/",
    name: "Fun Play",
    note: "Evolve Studio website I currently manage.",
    image: null,
  },
  {
    url: "https://sopm.co.uk/",
    name: "SOPM",
    note: "Evolve Studio website I currently manage.",
    image: null,
  },
];

const pastWork = [
  { name: "chocdfull.com.au", note: "Startup chocolate business WordPress website." },
  { name: "AIS Elevate AU", note: "Product data import, WooCommerce setup." },
  { name: "Premium Clean NZ", note: "SEO and site maintenance." },
  { name: "Effly", note: "SEO, site updates and maintenance." },
  {
    name: "Kids Eat Free (staging)",
    note: "Site-wide style overhaul and rework of single listing pages in the backend.",
  },
  { name: "bespokewebdesign.ca", note: "Vanilla HTML/CSS updates and SEO blog integration." },
  { name: "MPC", note: "Major website updates." },
  { name: "KMS", note: "Overall website setup — vanilla HTML, CSS and JS." },
];

const testimonials = [
  {
    quote:
      "I've had the pleasure of working with Larence on several website projects over the past year and wouldn't hesitate to recommend him. Larence is a highly capable web developer who consistently delivers excellent work. His communication is outstanding, keeping you updated throughout every project and proactively identifying potential issues with practical solutions before they become problems. He's professional, reliable and always delivers what he says he will. More importantly, he takes the time to understand the objectives behind the brief rather than simply building what's been asked. Larence is an absolute pleasure to work with and I'd happily recommend him to anyone looking for a talented, dependable web developer. I'd also work with him again without hesitation.",
    author: "Jess",
    role: "Evolve Studio",
    initials: "JE",
  },
  {
    quote:
      "I highly recommend Larence as an expert web developer. He's worked with me on multiple projects for my web agency and continues to deliver quality results. He's reliable, communicates well, and consistently meets deadlines. Larence is skilled in HTML, CSS, JavaScript, responsive design, and version control with Git. I trust him completely with client work and look forward to working with him long-term.",
    author: "Charles",
    role: "Client",
    initials: "CH",
  },
];

const experience = [
  {
    role: "Freelancer",
    company: "Self-employed",
    period: "October 2024 – Present",
    points: [
      "Developed a custom Caregiver Appointment System with scheduling and availability management (WordPress + PHP, under NDA).",
      "Built and maintained static websites and additional WordPress websites.",
      "Converted visitors into customers for a site that had no sales since launch.",
      "Currently maintaining live client websites.",
    ],
  },
  {
    role: "Web Developer / Junior Web Programmer, Project Manager",
    company: "Project Zealous — Mandurriao, Iloilo City",
    period: "July 2023 – October 2024",
    points: [
      "Designed and developed responsive landing pages (WordPress, HTML/CSS/JS/PHP).",
      "Customized WooCommerce templates and implemented grouped product checkouts by brand.",
      "Collaborated on AIS National and AIS Elevate — forms, debugging, content, product imports.",
      "Conducted manual and plugin-based site migrations.",
      "Implemented Cloudflare, SMTP and Analytics integrations.",
      "Optimized page load speeds and ensured mobile responsiveness.",
      "Managed databases via phpMyAdmin and enforced WordPress security best practices.",
      "Handled project planning, task delegation and client communication with UK-based clients.",
    ],
  },
  {
    role: "Marketing Assistant",
    company: "Hustle Partner — La Paz, Iloilo City",
    period: "January 2023 – June 2023",
    points: [
      "Built mobile-friendly landing pages with WordPress page builders and custom CSS.",
      "Designed logos and edited visual content for campaigns.",
      "Implemented form-to-CRM integrations using Zapier and SendInBlue.",
      "Launched email marketing campaigns and managed analytics via Google and UberSuggest.",
      "Resolved CRM spam/errors and ran conversion tests with Microsoft Clarity.",
      "Delivered SEO performance reports and tracked keyword rankings.",
    ],
  },
  {
    role: "Web Developer",
    company: "Virtuosomaster Web Design and Development — Mandurriao, Iloilo City",
    period: "March 2022 – January 2023",
    points: [
      "Designed and maintained landing pages for local and international clients.",
      "Handled site migrations, plugin customizations and performance tweaks.",
      "Managed a team of developers to meet project deadlines and quality goals.",
      "Edited and optimized images for web use.",
      "Implemented page layout and functional updates based on client feedback.",
    ],
  },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  );
}

function ProjectPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/70">
        <ImageIcon className="size-7" />
        <span className="text-xs font-medium">Screenshot coming soon</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
      <span className="absolute left-3 top-3 rounded bg-background/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {name}
      </span>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Larence Arroz
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#reviews" className="transition-colors hover:text-primary">
              Reviews
            </a>
            <a href="#experience" className="transition-colors hover:text-primary">
              Experience
            </a>
          </div>
          <a
            href="mailto:larencearroz@gmail.com"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="border-b border-border py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Web Developer · WordPress Developer · SEO Specialist
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Larence Arroz
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Versatile and technical web developer with 4+ years of hands-on experience building
            responsive websites, web apps and WordPress solutions for clients across Canada,
            Australia, the UK and the Philippines — helping businesses save and make money with
            practical solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:larencearroz@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" /> larencearroz@gmail.com
            </a>
            <a
              href="tel:+639158189236"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" /> +63 915 818 9236
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Cabatuan, Iloilo, Philippines
            </span>
            <a
              href="https://github.com/Larss30"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Github className="size-4" /> github.com/Larss30
            </a>
            <a
              href="https://github.com/Larss830"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Github className="size-4" /> github.com/Larss830
            </a>
          </div>
        </section>

        {/* Highlights */}
        <section id="about" className="border-b border-border py-16 sm:py-20">
          <SectionTitle eyebrow="Career highlights" title="Work that moved the needle" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mb-2 block h-1 w-8 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-border py-16 sm:py-20">
          <SectionTitle eyebrow="Tech stack" title="Skills & tooling" />
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border py-16 sm:py-20">
          <SectionTitle eyebrow="Featured projects" title="Selected client websites" />
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-border p-5 transition-all hover:border-primary hover:shadow-card"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} website screenshot`}
                    className="mb-4 aspect-[16/10] w-full rounded-md object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ProjectPlaceholder name={p.name} />
                )}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold group-hover:text-primary">{p.name}</h3>
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-1 text-xs text-primary">{p.url.replace(/^https?:\/\//, "")}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
              </a>
            ))}
          </div>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Earlier work
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            These may look different today compared to when I worked on them.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {pastWork.map((p) => (
              <li key={p.name} className="border-l-2 border-primary/40 pl-4 text-sm">
                <span className="font-medium">{p.name}</span>
                <span className="block text-muted-foreground">{p.note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="border-b border-border bg-surface py-16 sm:p-20">
          <SectionTitle eyebrow="What clients say" title="Reviews & testimonials" />
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="flex flex-col rounded-lg border border-border bg-background p-6 shadow-card transition-all hover:border-primary/40"
              >
                <Quote className="size-6 text-primary/60" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border py-16 sm:py-20">
          <SectionTitle eyebrow="Work experience" title="Where I've worked" />
          <div className="space-y-10">
            {experience.map((job) => (
              <article key={job.role + job.period} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <p className="text-sm font-medium text-primary">{job.period}</p>
                <div className="mt-2 sm:mt-0">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-border py-16 sm:py-20">
          <SectionTitle eyebrow="Education" title="Academic background" />
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">BS in Computer Engineering</h3>
            <p className="text-sm text-muted-foreground">
              Western Institute of Technology — La Paz, Iloilo City · 2015 – 2021
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Dean's Lister", "Member, Student Government"].map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 sm:py-24">
          <SectionTitle eyebrow="Contact" title="Let's build something that works" />
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:larencearroz@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" /> Email me
            </a>
            <a
              href="tel:+639158189236"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" /> Call me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Larence Arroz. All rights reserved.</p>
          <p>Web Developer · WordPress Developer · SEO Specialist</p>
        </div>
      </footer>
    </div>
  );
}
