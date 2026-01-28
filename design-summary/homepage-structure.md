# Homepage Design Structure (Gemini Input)

## Project Context
- Framework: Next.js App Router
- Styling: Tailwind CSS + shadcn/ui
- Animation: Framer Motion (section fade-up)
- Typography: Manrope (sans), Cormorant Garamond (serif)
- Brand vibe: modern wellness, trade-focused, high-conversion, calm + premium

## Page Layout Overview
- Sticky top navigation
- Hero split layout (copy + credibility stats + offer card)
- Modalities grid (cards)
- Method + qualifications split section
- Offerings grid (3 cards)
- Testimonials grid (3 cards)
- CTA section with form (dark block + light form card)
- Minimal footer

## Section-by-Section Structure

### 1) Header (sticky)
- Logo circle with initials
- Brand title + subtitle
- Nav links: Services, Method, Results, Contact
- Primary CTA button (Book here)
- Visual style: glassy white background, thin border, blur

### 2) Hero
- Badge (pill) for key services
- Large serif headline
- Supporting paragraph (value prop)
- Primary CTA + secondary outline CTA
- Credibility stats row (3 small stats)
- Right side: highlight card with short quote + service list separators

### 3) Modalities (services)
- Section title + subtitle
- Optional CTA (Download offerings)
- Card grid, 2 columns
- Each card: title + body copy

### 4) Method + Qualifications
- Left: dark emerald card with how-it-works bullets + CTA
- Right: qualifications list in 2-column card grid

### 5) Offerings (3 cards)
- Title + badge
- 3-column cards
- Each card: subtitle label, title, description, CTA button

### 6) Testimonials
- Title + external reviews button
- 3 cards
- Each card: avatar + name + quote

### 7) CTA / Contact
- Dark emerald background, rounded container
- Left: badge + headline + bullet list
- Right: form card (name/email/message) + submit

### 8) Footer
- Minimal branding + location
- Simple nav links

## Visual Design Tokens (current)
- Background: warm white / stone gradient
- Accents: emerald + amber highlights
- Border: subtle emerald tint
- Button style: rounded-full, solid emerald for primary

## Shadcn Components Used
- Button
- Card (CardHeader, CardContent, CardTitle, CardDescription)
- Badge
- Avatar
- Separator
- Input
- Textarea

## Animation Pattern
- Framer Motion fade-up
  - initial: { opacity: 0, y: 24 }
  - whileInView: { opacity: 1, y: 0 }
  - transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  - viewport: { once: true, amount: 0.2 }

## Code Snippets (current implementation)

### Motion pattern (used on each section)
```tsx
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, amount: 0.2 },
};
```

### Header (sticky glass navigation)
```tsx
<header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
  <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-white">
        SS
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Soul Sound</p>
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
```

### Hero (headline + CTAs + trust stats)
```tsx
<motion.section {...fadeUp} className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
  <div className="space-y-6">
    <Badge className="w-fit bg-emerald-100 text-emerald-800">
      Sound Healing • Meditation • Corporate Wellness
    </Badge>
    <h1 className="font-serif text-5xl leading-tight text-zinc-900 md:text-6xl">
      Elevate wellbeing, leadership, and performance through soulful sound.
    </h1>
    <p className="text-lg text-zinc-600">
      Soul Sound by Celine Mathis blends sound healing, energy work, and mindful practices.
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
</motion.section>
```

### Modalities grid (card styling)
```tsx
<div className="grid gap-6 md:grid-cols-2">
  {modalities.map((item) => (
    <Card key={item.title} className="border-emerald-100/60">
      <CardHeader>
        <CardTitle className="text-xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-zinc-600">{item.body}</CardContent>
    </Card>
  ))}
</div>
```

### CTA / Contact block (dark + light form card)
```tsx
<motion.section
  {...fadeUp}
  id="contact"
  className="grid gap-10 rounded-[32px] bg-emerald-950 px-8 py-12 text-white lg:grid-cols-[1.1fr_0.9fr]"
>
  <div className="space-y-4">
    <Badge className="w-fit bg-emerald-200 text-emerald-900">Let’s collaborate</Badge>
    <h2 className="font-serif text-4xl">
      Ready to build a calmer, stronger, higher-performing team?
    </h2>
  </div>
  <Card className="border-none bg-white text-zinc-900">
    <CardHeader>
      <CardTitle className="text-2xl">Request availability</CardTitle>
      <CardDescription>Share your preferred dates and focus area.</CardDescription>
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
```

### Global tokens + typography
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-manrope);
  --font-serif: var(--font-cormorant);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}

@layer base {
  body {
    @apply bg-background text-foreground font-sans;
  }
}
```

## Improvement Goals for Gemini
- Add refined brand color palette (sage/terracotta/ochre inspired)
- Enhance hero with image/shape layers
- Add subtle textures or gradients
- Improve spacing rhythm and typographic scale
- Add richer micro-interactions on cards and buttons
- Maintain modern, conversion-driven layout

## Files to Edit
- `app/page.tsx`
- `app/globals.css` (tokens, fonts, global styles)
- Optional: `components/ui/*` for component variants
