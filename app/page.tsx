import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Camera,
  Code2,
  Dumbbell,
  Music2,
  Plane,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Interest = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: typeof AtSign;
};

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  eyebrow: string;
};

type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

type InstagramPost = {
  href: string;
  src: string;
  alt: string;
};

const interests: Interest[] = [
  {
    title: "Good trips",
    description:
      "Memorable getaways, new experiences, and stories worth bringing home.",
    icon: Plane,
  },
  {
    title: "Everyday frames",
    description:
      "Photography that holds onto the atmosphere of a place or moment.",
    icon: Camera,
  },
  {
    title: "Staying active",
    description:
      "Snowboarding, climbing, and weightlifting keep me moving year-round.",
    icon: Dumbbell,
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@nathanyuuu",
    href: "https://www.instagram.com/nathanyuuu/",
    icon: AtSign,
  },
  {
    label: "TikTok",
    handle: "@nathan_yuuu",
    href: "https://www.tiktok.com/@nathan_yuuu",
    icon: Music2,
  },
];

const instagramPosts: InstagramPost[] = [
  {
    href: "https://www.instagram.com/nathanyuuu/p/DVxJybFFNko/",
    src: "/instagram/post-1.jpg",
    alt: "Nathan Road street sign against a Hong Kong apartment building",
  },
  {
    href: "https://www.instagram.com/nathanyuuu/p/DNxBgVm3PIg/",
    src: "/instagram/post-2.jpg",
    alt: "Two travelers diving from a lakeside dock into turquoise water",
  },
  {
    href: "https://www.instagram.com/nathanyuuu/p/DNf33FqJyMJ/",
    src: "/instagram/post-3.jpg",
    alt: "A red panda resting on a leafy tree branch",
  },
];

const projects: Project[] = [
  {
    title: "Tichu Elo System",
    eyebrow: "Full-stack web app",
    description:
      "A full-stack web app for running a Tichu group, with live Elo standings, match history, balanced-team generation, and Discord-ready sharing. An authenticated admin console makes it easy to manage players and games while ratings recalculate automatically.",
    href: "https://github.com/yu-nathan/tichu-elo-system",
    tags: ["TypeScript", "React", "Drizzle"],
  },
  {
    title: "Personal Portfolio",
    eyebrow: "You’re here",
    description:
      "A modern, responsive home for my work, interests, and experience, rebuilt with Next.js, TypeScript, and accessible component primitives.",
    href: "https://github.com/yu-nathan/yu-nathan.github.io",
    tags: ["Next.js", "TypeScript", "shadcn/ui"],
  },
];

const experiences: Experience[] = [
  {
    company: "CloudTrucks",
    role: "Senior Software Engineer",
    dates: "2025 — 2026",
    summary:
      "Built scalable frontend systems and practical automation that shortened onboarding, reduced operating costs, and made complex support and invoicing workflows easier to manage.",
  },
  {
    company: "LinkedIn",
    role: "Software Engineer",
    dates: "2021 — 2024",
    summary:
      "Led frontend and mid-tier work across LinkedIn Learning, large-scale email experiences, developer tooling, experimentation, and responsible AI compliance products.",
  },
  {
    company: "PROS",
    role: "Software Engineer I",
    dates: "2020 — 2021",
    summary:
      "Built onboarding interfaces and dataset APIs while helping modernize the core application with TypeScript and modular service layers.",
  },
];

const ExternalIcon = () => (
  <ArrowUpRight aria-hidden="true" className="size-4" />
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero-section relative flex min-h-svh items-center overflow-hidden pt-18">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="max-w-5xl">
              <div className="text-muted-foreground mb-8 flex items-center gap-3 text-sm font-medium">
                <span className="bg-accent inline-flex size-2.5 rounded-full shadow-[0_0_0_5px_rgba(184,92,56,0.12)]" />
                San Francisco, California
              </div>
              <h1 className="max-w-5xl font-serif text-[clamp(4.25rem,11vw,9.5rem)] leading-[0.82] tracking-[-0.055em] text-balance">
                Nathan <span className="text-accent italic">Yu</span>
              </h1>
              <p className="text-muted-foreground mt-10 max-w-3xl text-xl leading-8 text-balance sm:text-2xl sm:leading-9">
                Building useful software—and making time for new places, good
                photos, and the occasional great drive.
              </p>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7 sm:text-lg">
                Outside work, I’m happiest when I’m exploring, making something,
                or learning my way into a new challenge!
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#life">
                    See what I’m into{" "}
                    <ArrowDown aria-hidden="true" className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">Explore my work</a>
                </Button>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground absolute right-8 bottom-8 hidden origin-bottom-right rotate-90 text-xs font-medium tracking-[0.2em] uppercase lg:block">
            Work · Life · Curiosity
          </p>
        </section>

        <section className="py-24 sm:py-32">
          <div
            id="life"
            className="mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8"
          >
            <div className="max-w-3xl">
              <p className="section-label">Away from the keyboard</p>
              <h2 className="section-title mt-5">
                Always finding something worth getting into.
              </h2>
            </div>
            <div className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border sm:grid-cols-3">
              {interests.map((interest) => {
                const Icon = interest.icon;
                return (
                  <article
                    key={interest.title}
                    className="group bg-background p-7 sm:p-8"
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-accent size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-12 font-serif text-2xl">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-6">
                      {interest.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              <Card className="bg-foreground text-background overflow-hidden">
                <CardHeader className="flex-row items-start justify-between gap-5 p-7 sm:p-9">
                  <div>
                    <div className="text-background/65 mb-5 flex items-center gap-2 text-sm">
                      <AtSign aria-hidden="true" className="size-4" />
                      Instagram · @nathanyuuu
                    </div>
                    <CardTitle className="max-w-lg text-3xl leading-tight text-balance sm:text-4xl">
                      Cars, trips, and favorite moments from wherever life takes
                      me.
                    </CardTitle>
                  </div>
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-background/20 hover:bg-background hover:text-foreground focus-visible:ring-background rounded-full border p-3 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    aria-label="Visit Nathan on Instagram"
                  >
                    <ExternalIcon />
                  </a>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2 px-2 pb-2 sm:gap-3 sm:px-3 sm:pb-3">
                  {instagramPosts.map((post, index) => (
                    <a
                      key={post.href}
                      href={post.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/image focus-visible:ring-background relative aspect-[4/5] overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
                      aria-label={`View Instagram post ${index + 1}`}
                    >
                      <Image
                        src={post.src}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 24vw"
                        className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover/image:opacity-100" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="relative min-h-[32rem] overflow-hidden border-black bg-black text-white">
                <Image
                  src="/tiktok-preview.jpg"
                  alt="White sports car with cherry blossom livery and purple lighting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
                <CardHeader className="relative p-7 sm:p-9">
                  <div className="mb-5 flex items-center gap-2 text-sm text-white/75">
                    <Music2 aria-hidden="true" className="size-4" />
                    TikTok · @nathan_yuuu
                  </div>
                </CardHeader>
                <CardFooter className="absolute inset-x-0 bottom-0 flex-col items-start gap-5 p-7 sm:p-9">
                  <CardTitle className="text-3xl leading-tight text-balance text-white sm:text-4xl">
                    Featured on TikTok.
                  </CardTitle>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/25 bg-white/90 text-black hover:bg-white"
                  >
                    <a
                      href="https://www.tiktok.com/t/ZP8cdJxkh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch this TikTok <ExternalIcon />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-border bg-card/55 border-y py-24 sm:py-32">
          <div
            id="projects"
            className="mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-3xl">
                <p className="section-label">Selected projects</p>
                <h2 className="section-title mt-5">
                  Things I’ve enjoyed building.
                </h2>
              </div>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/yu-nathan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 aria-hidden="true" className="size-4" /> All
                  repositories
                </a>
              </Button>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group flex min-h-[28rem] flex-col p-2 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className={
                      index === 0
                        ? "project-visual project-visual-elo"
                        : "project-visual project-visual-site"
                    }
                  >
                    <span className="text-foreground/50 font-mono text-xs">
                      {project.eyebrow}
                    </span>
                    {index === 0 ? (
                      <div className="border-foreground/10 bg-background/65 mt-auto w-full max-w-sm rounded-2xl border p-4 shadow-sm backdrop-blur-sm">
                        <div className="text-muted-foreground mb-3 flex items-center justify-between text-xs">
                          <span>Leaderboard</span>
                          <span>Rating</span>
                        </div>
                        {["NY", "SC", "CY"].map((initials, rank) => (
                          <div
                            key={initials}
                            className="border-border flex items-center border-t py-2.5 text-sm"
                          >
                            <span className="text-muted-foreground mr-3">
                              0{rank + 1}
                            </span>
                            <span className="font-medium">{initials}</span>
                            <span className="ml-auto font-mono">
                              {[1128, 1084, 1036][rank]}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-foreground/80 mt-auto font-serif text-6xl leading-none tracking-tight sm:text-7xl">
                        NY<span className="text-accent">.</span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="px-5 pt-6 sm:px-7">
                    <CardTitle className="text-3xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2 text-base leading-7">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex-wrap justify-between gap-4 px-5 pb-5 sm:px-7 sm:pb-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-visible:ring-ring inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:outline-none"
                    >
                      View project <ExternalIcon />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div
            id="experience"
            className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-label">What I build</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Thoughtful products, built to work in the real world.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
                My work spans frontend architecture, product development,
                developer tooling, automation, and AI infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a
                    href="https://www.linkedin.com/in/yu-nathan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BriefcaseBusiness aria-hidden="true" className="size-4" />{" "}
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://github.com/yu-nathan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 aria-hidden="true" className="size-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div>
              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  {index > 0 && <Separator className="mb-8" />}
                  <div className="grid gap-5 sm:grid-cols-[10rem_1fr]">
                    <p className="text-muted-foreground text-sm font-medium">
                      {experience.dates}
                    </p>
                    <div>
                      <h3 className="font-serif text-3xl tracking-tight">
                        {experience.company}
                      </h3>
                      <p className="text-accent mt-1 text-sm font-medium">
                        {experience.role}
                      </p>
                      <p className="text-muted-foreground mt-5 text-base leading-7">
                        {experience.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-border bg-foreground text-background border-t">
        <div
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-5xl tracking-tight sm:text-6xl">
                Let’s stay connected.
              </p>
              <p className="text-background/60 mt-4 max-w-xl text-sm leading-6">
                Follow along for projects, photos, trips, and whatever catches
                my attention next.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                ...socialLinks,
                {
                  label: "LinkedIn",
                  handle: "Nathan Yu",
                  href: "https://www.linkedin.com/in/yu-nathan/",
                  icon: BriefcaseBusiness,
                },
                {
                  label: "GitHub",
                  handle: "yu-nathan",
                  href: "https://github.com/yu-nathan",
                  icon: Code2,
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-background/20 hover:bg-background hover:text-foreground focus-visible:ring-background inline-flex size-12 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    aria-label={`${social.label}: ${social.handle}`}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <Separator className="bg-background/15 my-10" />
          <div className="text-background/50 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nathan Yu</p>
            <p>Made with care in San Francisco.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
