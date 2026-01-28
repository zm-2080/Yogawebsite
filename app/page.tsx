"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, amount: 0.2 },
};

const modalities = [
  {
    title: "Guided & Akashic Meditation",
    body:
      "Grounded, intuitive meditation sessions that reset the nervous system and restore clarity for personal or professional growth.",
  },
  {
    title: "Sound Healing & Vibrational Therapy",
    body:
      "A curated blend of bowls, gong, handpan, and voice for deep relaxation, emotional release, and heightened focus.",
  },
  {
    title: "Energy Work & Somatic Alignment",
    body:
      "Hands-on and hands-off techniques to clear energetic blockages, regulate stress responses, and support resilience.",
  },
  {
    title: "Kundalini Yoga & Breathwork",
    body:
      "Dynamic sequences that unlock energy, increase vitality, and build a calm, high-performance mindset.",
  },
  {
    title: "Yoga Nidra & Deep Rest",
    body:
      "Guided yogic sleep for profound recovery, improved sleep quality, and lasting mental clarity.",
  },
];

const offerings = [
  {
    title: "Classes & Workshops",
    subtitle: "In-person or online",
    body:
      "Group experiences designed for teams, retreats, and community gatherings. Build presence, cohesion, and shared energy.",
    cta: "View classes",
  },
  {
    title: "Private 1:1 Sessions",
    subtitle: "Sound healing + mindset work",
    body:
      "A tailored experience that blends energy work, meditation, and sound therapy to help you reset and move forward.",
    cta: "Book a session",
  },
  {
    title: "Corporate & Retreat Partnerships",
    subtitle: "Leadership + wellbeing",
    body:
      "High-impact facilitation for corporate teams and retreat hosts. Programs designed for focus, resilience, and team alignment.",
    cta: "Request a proposal",
  },
];

const testimonials = [
  {
    name: "C.G.",
    quote:
      "Celine addresses the root of a problem with remarkable clarity. The session brought deep connection and lasting change.",
  },
  {
    name: "C.A.",
    quote:
      "Powerful, eye-opening work that touches emotional and energetic levels. Celine holds space with mastery.",
  },
  {
    name: "A.N.",
    quote:
      "I left feeling deeply relaxed and grounded. Celine’s presence brings a calm that stays with you.",
  },
];

const credentials = [
  "20+ years in international corporate environments",
  "25 years of classical music training",
  "Kundalini Yoga Teacher & Meditation Guide",
  "Diploma of Remedial Massage",
  "Craniosacral & Acuenergetics Practitioner",
  "Akashic Records & intuitive guidance",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-zinc-900">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-white">
              SS
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
                Soul Sound
              </p>
              <p className="text-sm font-semibold">Celine Mathis</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
            <Link href="#services">Services</Link>
            <Link href="#method">Method</Link>
            <Link href="#testimonials">Results</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Button asChild className="rounded-full bg-emerald-900 text-white">
            <Link href="#contact">Book here</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <motion.section
          {...fadeUp}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <Badge className="w-fit bg-emerald-100 text-emerald-800">
              Sound Healing • Meditation • Corporate Wellness
            </Badge>
            <h1 className="font-serif text-5xl leading-tight text-zinc-900 md:text-6xl">
              Elevate wellbeing, leadership, and performance through soulful
              sound.
            </h1>
            <p className="text-lg text-zinc-600">
              Soul Sound by Celine Mathis blends sound healing, energy work, and
              mindful practices to help individuals and teams reset, refocus,
              and thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-emerald-900 text-white">
                <Link href="#contact">Schedule a session</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#services">Explore offerings</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
              <div>
                <p className="text-xl font-semibold text-zinc-900">20+ yrs</p>
                <p>Corporate experience</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-zinc-900">25 yrs</p>
                <p>Classical music training</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-zinc-900">Global</p>
                <p>Remote & in-person sessions</p>
              </div>
            </div>
          </div>
          <Card className="overflow-hidden border-none bg-white shadow-xl">
            <CardHeader className="space-y-4">
              <CardDescription className="uppercase tracking-[0.3em] text-emerald-700">
                Est. 2018
              </CardDescription>
              <CardTitle className="font-serif text-3xl">
                A modern sanctuary for deep restoration.
              </CardTitle>
              <p className="text-sm text-zinc-500">
                Sessions are designed to unlock calm, clarity, and energized
                presence for your next chapter.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-3xl bg-emerald-50 p-6 text-sm text-emerald-900">
                “Celine blends intuitive guidance with professional excellence.
                Every session feels deeply grounded and purposeful.”
              </div>
              <div className="grid gap-3 text-sm text-zinc-500">
                <div className="flex items-center justify-between">
                  <span>Private 1:1</span>
                  <span>Online or Brisbane</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Workshops</span>
                  <span>Teams & retreats</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Corporate wellness</span>
                  <span>Custom programs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section {...fadeUp} id="services" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
                Holistic modalities
              </p>
              <h2 className="font-serif text-4xl">
                Experiences that transform mind, body, and energy.
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="#contact">Download offerings</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {modalities.map((item) => (
              <Card key={item.title} className="border-emerald-100/60">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600">
                  {item.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="method" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-none bg-emerald-950 text-white">
            <CardHeader>
              <CardDescription className="text-emerald-200">
                Working with me
              </CardDescription>
              <CardTitle className="font-serif text-3xl">
                A grounded, intuitive approach with measurable outcomes.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-emerald-100">
              <p>
                My sessions integrate education, spirituality, and practical
                tools to support your daily life. We work with transparency,
                accountability, and clear objectives.
              </p>
              <ul className="space-y-3">
                <li>Clarify your goals and desired outcomes.</li>
                <li>Reset your nervous system and energy field.</li>
                <li>Implement rituals that sustain change.</li>
              </ul>
              <Button asChild className="rounded-full bg-white text-emerald-900">
                <Link href="#contact">Start your journey</Link>
              </Button>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">
              Qualifications & experience
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <Card key={item} className="border-emerald-100/60">
                  <CardContent className="pt-6 text-sm text-zinc-600">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-4xl">Ways to work together</h2>
            <Badge className="bg-amber-100 text-amber-900">High-conversion</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offerings.map((item) => (
              <Card key={item.title} className="flex h-full flex-col">
                <CardHeader className="space-y-2">
                  <CardDescription className="uppercase tracking-[0.3em] text-emerald-700">
                    {item.subtitle}
                  </CardDescription>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6 text-sm text-zinc-600">
                  <p>{item.body}</p>
                  <Button asChild variant="outline" className="w-fit rounded-full">
                    <Link href="#contact">{item.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="testimonials" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-4xl">Client results</h2>
            <Link
              href="https://www.google.com/maps/place/Soul+Sound+by+Celine+Mathis"
            target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" className="rounded-full">
                View reviews
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatar-placeholder.svg" alt={item.name} />
                    <AvatarFallback>{item.name}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <CardDescription>Client testimonial</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600">
                  {item.quote}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          id="contact"
          className="grid gap-10 rounded-[32px] bg-emerald-950 px-8 py-12 text-white lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <Badge className="w-fit bg-emerald-200 text-emerald-900">
              Let’s collaborate
            </Badge>
            <h2 className="font-serif text-4xl">
              Ready to build a calmer, stronger, higher-performing team?
            </h2>
            <p className="text-emerald-100">
              Share your goals and I’ll craft a custom wellness experience for
              your people. Sessions are available in Brisbane or worldwide.
            </p>
            <div className="space-y-2 text-sm text-emerald-200">
              <p>• Corporate wellness activations</p>
              <p>• Retreat facilitation & partnerships</p>
              <p>• Private 1:1 healing sessions</p>
            </div>
        </div>
          <Card className="border-none bg-white text-zinc-900">
            <CardHeader>
              <CardTitle className="text-2xl">Request availability</CardTitle>
              <CardDescription>
                Share your preferred dates and focus area.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full name" />
              <Input placeholder="Work email" />
              <Textarea placeholder="What would you like to create together?" />
              <Button className="w-full rounded-full bg-emerald-900 text-white">
                Submit inquiry
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-zinc-500">
            <p className="text-base font-semibold text-zinc-900">
              Soul Sound by Celine Mathis
            </p>
            <p>Brisbane • Global online sessions</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="#services">Services</Link>
            <Link href="#method">Method</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
