"use client";

import { useState, useEffect } from "react";
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
    image:
      "https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Private 1:1 Sessions",
    subtitle: "Sound healing + mindset work",
    body:
      "A tailored experience that blends energy work, meditation, and sound therapy to help you reset and move forward.",
    cta: "Book a session",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Corporate & Retreat Partnerships",
    subtitle: "Leadership + wellbeing",
    body:
      "High-impact facilitation for corporate teams and retreat hosts. Programs designed for focus, resilience, and team alignment.",
    cta: "Request a proposal",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop",
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to dark header when scrolled past 80% of viewport height (past hero)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-[800ms] ease-out ${
          isScrolled
            ? "border-b border-[#E5E0D5] bg-[#F9F7F2]/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-[2px] border transition-colors duration-[800ms] ease-out ${
                isScrolled
                  ? "border-[#1A2B42] text-[#1A2B42]"
                  : "border-[#F9F7F2] text-[#F9F7F2]"
              }`}
            >
              SS
            </div>
            <div>
              <p
                className={`text-[10px] uppercase tracking-[0.15em] transition-colors duration-[800ms] ease-out ${
                  isScrolled ? "text-[#9B8B79]" : "text-[#E5E0D5]"
                }`}
              >
                Soul Sound
              </p>
              <p
                className={`text-sm font-light transition-colors duration-[800ms] ease-out ${
                  isScrolled ? "text-[#1A2B42]" : "text-[#F9F7F2]"
                }`}
              >
                Celine Mathis
          </p>
        </div>
          </div>
          <nav
            className={`hidden items-center gap-6 text-[11px] font-light uppercase tracking-[0.15em] transition-colors duration-[800ms] ease-out md:flex ${
              isScrolled ? "text-[#1A2B42]" : "text-[#F9F7F2]"
            }`}
          >
            <Link className="transition-opacity duration-[800ms] ease-out hover:opacity-60" href="#services">
              Services
            </Link>
            <Link className="transition-opacity duration-[800ms] ease-out hover:opacity-60" href="#method">
              Method
            </Link>
            <Link className="transition-opacity duration-[800ms] ease-out hover:opacity-60" href="#testimonials">
              Results
            </Link>
            <Link className="transition-opacity duration-[800ms] ease-out hover:opacity-60" href="#contact">
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className={`relative pb-1 text-[11px] font-light uppercase tracking-[0.15em] transition-all duration-[800ms] ease-out hover:opacity-60 ${
              isScrolled ? "text-[#1A2B42]" : "text-[#F9F7F2]"
            }`}
          >
            Book a session
            <span
              className={`absolute bottom-0 left-0 h-px w-full transition-colors duration-[800ms] ease-out ${
                isScrolled ? "bg-[#1A2B42]" : "bg-[#F9F7F2]"
              }`}
            />
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-24 pb-24">
        <section className="relative min-h-[100vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center filter saturate-90 sepia-[0.12]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2400&auto=format&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </div>
          <motion.div
            {...fadeUp}
            className="relative z-10 mx-auto flex min-h-[100vh] w-full max-w-6xl flex-col justify-center gap-12 px-6 pb-24 pt-40 text-[#F9F7F2]"
          >
            <div className="max-w-xl space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#E5E0D5]">
                Architectural Serenity
              </p>
              <h1 className="font-serif text-5xl font-light leading-tight tracking-[0.02em] md:text-6xl">
                Your practice is a sanctuary of stillness, resonance, and
                unfolding.
              </h1>
              <p className="text-lg font-light text-[#E5E0D5]">
                I guide you into the architecture of the body through sound,
                movement, and breath so you can return to clarity and presence.
              </p>
              <Link
                href="#services"
                className="relative w-fit pb-1 text-xs uppercase tracking-[0.3em] text-[#E5E0D5] transition-opacity duration-[800ms] ease-out hover:opacity-60"
              >
                Explore offerings
                <span className="absolute bottom-0 left-0 h-px w-full bg-[#E5E0D5]" />
              </Link>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute bottom-10 right-10 text-right text-xs font-serif text-[#E5E0D5]/80">
            <p>Private 1:1 • Workshops • Corporate Wellness</p>
            <p className="tracking-[0.08em]">Brisbane · Worldwide</p>
          </div>
        </section>

        <div className="grain-layer relative">
          <svg
            className="grain-overlay"
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <filter id="grain-texture">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-texture)" />
          </svg>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6">

        <motion.section {...fadeUp} id="services" className="space-y-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2D]/50 font-medium">
              Holistic modalities
            </p>
            <h2 className="font-serif text-4xl tracking-[0.05em] text-[#1A2B42] md:text-5xl max-w-2xl">
              Experiences curated like a quiet, restorative menu.
            </h2>
          </div>
          <div className="flex flex-col">
            {modalities.map((item, index) => (
              <div
                key={item.title}
                className={`group grid gap-6 py-12 md:grid-cols-[1fr_1.5fr] md:gap-12 ${
                  index > 0 ? "border-t border-[#E5E0D5]" : ""
                }`}
              >
                <h3 className="font-serif text-2xl font-light tracking-[0.05em] text-[#1A2B42] transition-colors duration-[800ms] ease-out group-hover:text-[#9B8B79]">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#2D2D2D]/70 text-justify transition-colors duration-[800ms] ease-out group-hover:text-[#1A2B42]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          id="method"
          className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <Card className="border border-[#1A2B42] bg-[#1A2B42] text-[#F9F7F2]">
            <CardHeader className="px-16 pt-16">
              <CardDescription className="text-[10px] uppercase tracking-[0.2em] text-[#E5E0D5]">
                Working with me
              </CardDescription>
              <CardTitle className="font-serif text-3xl font-light tracking-[0.06em]">
                I guide you with structure, intuition, and deep presence.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-16 pb-16 text-sm font-light text-[#F9F7F2]/80">
              <p>
                I integrate education, spirituality, and practical tools so you
                can inhabit meaningful change in your daily life.
              </p>
              <ul className="space-y-3">
                <li>Clarify the intention and architecture of your goals.</li>
                <li>Restore your nervous system to stillness and clarity.</li>
                <li>Design rituals that keep the unfolding alive.</li>
              </ul>
              <Link
                href="#contact"
                className="w-fit border-b border-[#F9F7F2] pb-1 text-xs uppercase tracking-[0.15em] text-[#F9F7F2] transition-opacity duration-[800ms] ease-out hover:opacity-60"
              >
                Start your journey
              </Link>
            </CardContent>
          </Card>
          <div className="space-y-10 lg:mt-12">
            <h3 className="font-serif text-3xl tracking-[0.05em] text-[#1A2B42]">
              Qualifications & experience
            </h3>
            <div className="flex flex-col gap-8">
              {credentials.map((item, index) => (
                <div key={item} className="space-y-6">
                  {index > 0 ? (
                    <div className="border-t border-[#E5E0D5]" />
                  ) : null}
                  <p className="text-sm font-light text-[#2D2D2D]/70 transition-colors duration-[800ms] ease-out hover:text-[#9B8B79]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="py-24 md:py-32">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-serif text-4xl tracking-[0.05em] text-[#1A2B42] md:text-5xl">
                Ways to work together
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {offerings.map((item) => (
                <div key={item.title} className="flex h-full flex-col gap-8 text-left">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center filter saturate-90 sepia-[0.12] transition-transform duration-[800ms] ease-out hover:scale-[1.02]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="h-full w-full bg-black/5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-light tracking-[0.05em] text-[#1A2B42]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#2D2D2D]/70 text-justify">
                    {item.body}
                  </p>
                  <Link
                    href="#contact"
                    className="group relative w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#1A2B42] transition-colors duration-[800ms] ease-out hover:text-[#9B8B79]"
                  >
                    {item.cta}
                    <span className="absolute bottom-0 left-0 h-px w-full bg-[#1A2B42]/70 transition-all duration-[800ms] ease-out group-hover:bg-[#9B8B79]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="testimonials" className="-mx-6 bg-[#F9F7F2] px-6 py-24 md:py-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-serif text-4xl tracking-[0.05em] text-[#1A2B42]">
                Client results
              </h2>
              <Link
                href="https://www.google.com/maps/place/Soul+Sound+by+Celine+Mathis"
                target="_blank"
                rel="noreferrer"
                className="group relative w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#1A2B42] transition-colors duration-[800ms] ease-out hover:text-[#9B8B79]"
              >
                View reviews
                <span className="absolute bottom-0 left-0 h-px w-full bg-[#1A2B42]/70 transition-all duration-[800ms] ease-out group-hover:bg-[#9B8B79]" />
              </Link>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D5] text-sm font-serif text-[#1A2B42]">
                      {item.name}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2D]/50">
                        Client testimonial
                      </p>
                    </div>
                  </div>
                  <p className="font-serif text-lg italic text-[#1A2B42]">
                    “{item.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          id="contact"
          className="grid gap-10 border border-[#1A2B42] bg-[#1A2B42] px-8 py-16 text-[#F9F7F2] lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <Badge className="w-fit border border-[#E5E0D5] bg-transparent text-[10px] uppercase tracking-[0.15em] text-[#E5E0D5]">
              Let’s collaborate
            </Badge>
            <h2 className="font-serif text-4xl tracking-[0.05em]">
              Ready to build a calmer, stronger, higher-performing team?
            </h2>
            <p className="font-light text-[#E5E0D5]">
              Share your goals and I will design a bespoke experience that
              brings clarity, resonance, and meaningful connection.
            </p>
            <div className="space-y-2 text-sm font-light text-[#E5E0D5]">
              <p>• Corporate wellness activations</p>
              <p>• Retreat facilitation & partnerships</p>
              <p>• Private 1:1 healing sessions</p>
            </div>
          </div>
          <Card className="border border-[#E5E0D5] bg-[#F9F7F2] text-[#2D2D2D]">
            <CardHeader>
              <CardTitle className="text-2xl tracking-[0.05em] text-[#1A2B42]">
                Request availability
              </CardTitle>
              <CardDescription className="text-sm font-light text-[#2D2D2D]/70">
                Share your preferred dates and focus area.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input className="rounded-[2px]" placeholder="Full name" />
              <Input className="rounded-[2px]" placeholder="Work email" />
              <Textarea
                className="rounded-[2px]"
                placeholder="What would you like to create together?"
              />
              <Button
                variant="outline"
                className="w-full rounded-[2px] border-[#9B8B79] text-[#9B8B79] transition-all duration-[800ms] ease-out hover:bg-[#9B8B79]/10"
              >
                Submit inquiry
              </Button>
            </CardContent>
          </Card>
        </motion.section>
          </div>
        </div>
      </main>

      <footer className="bg-[#1A2B42] text-[#F9F7F2]">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
          {/* Left Column - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-[#F9F7F2] font-serif text-lg text-[#F9F7F2]">
                SS
              </div>
              <div>
                <p className="font-serif text-2xl tracking-[0.05em] text-[#F9F7F2]">
                  Soul Sound
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-[#E5E0D5]/80">
              A sanctuary for stillness, resonance, and meaningful connection. 
              Guiding you into the architecture of the body through sound, 
              movement, and breath.
            </p>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-8 md:text-right">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#9B8B79]">
              Contact
            </h3>
            <div className="space-y-4 text-sm font-light text-[#E5E0D5]/80">
              <p className="flex items-center gap-3 md:justify-end">
                <span>Brisbane, Australia</span>
              </p>
              <p className="flex items-center gap-3 md:justify-end">
                <span>Available worldwide online</span>
              </p>
              <p className="flex items-center gap-3 md:justify-end">
                <a 
                  href="mailto:hello@celinemathis.com" 
                  className="transition-colors duration-[800ms] ease-out hover:text-[#F9F7F2]"
                >
                  hello@celinemathis.com
                </a>
              </p>
            </div>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://www.instagram.com/celinemathis/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E0D5]/30 text-[#E5E0D5] transition-all duration-[800ms] ease-out hover:border-[#F9F7F2] hover:text-[#F9F7F2]"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E0D5]/30 text-[#E5E0D5] transition-all duration-[800ms] ease-out hover:border-[#F9F7F2] hover:text-[#F9F7F2]"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#E5E0D5]/20">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <p className="text-xs font-light text-[#E5E0D5]/60">
              Copyright © 2025 Soul Sound by Celine Mathis
            </p>
            <p className="text-xs font-light text-[#E5E0D5]/60">
              Designed with intention
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
