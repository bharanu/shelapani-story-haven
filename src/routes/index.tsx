import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CirclePlay,
  Mail,
  MapPinned,
  Mountain,
  Phone,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import heroAsset from "@/assets/shelapani-hero.png.asset.json";
import ownerAsset from "@/assets/shelapani-owners.png.asset.json";
import orchardAsset from "@/assets/shelapani-orchard.png.asset.json";
import signAsset from "@/assets/shelapani-sign.png.asset.json";
import loungeAsset from "@/assets/shelapani-lounge.png.asset.json";
import suiteWindowAsset from "@/assets/shelapani-window-suite.png.asset.json";
import bedroomAsset from "@/assets/shelapani-bedroom.png.asset.json";
import jamAsset from "@/assets/shelapani-jam.png.asset.json";
import strawberriesAsset from "@/assets/shelapani-strawberries.png.asset.json";
import petsAsset from "@/assets/shelapani-pets.png.asset.json";
import guestsAsset from "@/assets/shelapani-guests.png.asset.json";
import shopAsset from "@/assets/shelapani-shop.png.asset.json";
import poolAsset from "@/assets/shelapani-pool.jpeg.asset.json";
import pickleAsset from "@/assets/shelapani-pickle.png.asset.json";
import vinegarAsset from "@/assets/shelapani-vinegar.png.asset.json";
import appleJamAsset from "@/assets/shelapani-applejam.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shelapani Homes | Premium Villa Stay in Shimla" },
      {
        name: "description",
        content:
          "Discover Shelapani Homes, Shimla's iconic luxury pool villa built by Sudhir and Manju Khimta—an emotional mountain retreat shaped by art, orchards, and breathtaking views.",
      },
      { property: "og:title", content: "Shelapani Homes | Premium Villa Stay in Shimla" },
      {
        property: "og:description",
        content:
          "A cinematic luxury stay in Shimla with founder story, mountain views, elegant rooms, poolside calm, and direct WhatsApp booking.",
      },
      { property: "og:image", content: assetUrl(heroAsset) },
      { name: "twitter:image", content: assetUrl(heroAsset) },
    ],
  }),
  component: Index,
});

function Index() {
  const whatsappLink = "https://wa.me/919779932322";
  const emailLink = "mailto:suderkhimta@gmail.com";
  const mapLink =
    "https://www.google.com/maps/place/Shelapani+Homes/@31.1049633,77.1614113,17z/data=!4m24!1m12!3m11!1s0x390578eeede0f663:0xaf8be67977a147f1!2sShelapani+Homes!5m3!1s2026-06-18!4m1!1i2!8m2!3d31.1049633!4d77.1639862!16s%2Fg%2F11yrhz8z91!17BQ0FF!3m10!1s0x390578eeede0f663:0xaf8be67977a147f1!5m3!1s2026-06-18!4m1!1i2!8m2!3d31.1049633!4d77.1639862!16s%2Fg%2F11yrhz8z91!17BQ0FF?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D";
  const youtubeEmbed = "https://www.youtube.com/embed/WJRbGW8MY-8?si=FQZom_quMUvZe1vf";

  const experienceNotes = [
    {
      icon: Mountain,
      title: "Panoramic mountain setting",
      copy: "Wide-open views, crisp air, and the quiet that makes every sunrise feel private.",
    },
    {
      icon: Waves,
      title: "Shimla's first pool villa legacy",
      copy: "A pioneering stay experience envisioned long before luxury hospitality became common in the hills.",
    },
    {
      icon: Trees,
      title: "Orchards and organic calm",
      copy: "Apple trees, flowering gardens, and slow mountain afternoons create the feeling of a lived-in retreat—not just a booking.",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-screen overflow-hidden bg-hero text-hero-foreground">
        <img
          src={assetUrl(heroAsset)}
          alt="Shelapani Homes exterior at sunset in Shimla"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />

        <div className="section-shell relative flex min-h-screen flex-col justify-between py-6 sm:py-8">
          <header className="animate-drift-up flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-2xl font-semibold text-hero-foreground sm:text-3xl">
                Shelapani Homes
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-hero-foreground/70">
                Shimla, Himachal Pradesh
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-medium text-hero-foreground/85 transition hover:text-hero-foreground sm:block"
            >
              Book on WhatsApp
            </a>
          </header>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:py-24">
            <div className="animate-drift-up max-w-3xl space-y-6 lg:col-span-2" style={{ animationDelay: "120ms" }}>
              <span className="eyebrow text-hero-foreground/86 before:bg-hero-foreground/45">
                Built in 2000 by Sudhir Khimta &amp; Manju Khimta
              </span>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.92] text-hero-foreground sm:text-6xl lg:text-8xl">
                A mountain home shaped by art, orchards, and quiet luxury.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-hero-foreground/82 sm:text-lg">
                Shelapani Homes is not just a villa stay—it is the life story of a family who turned courage,
                creativity, and Himalayan rootedness into Shimla's first luxury pool villa.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="hero" size="hero" asChild>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Book Your Stay
                    <ArrowRight />
                  </a>
                </Button>
                <Button variant="glass" size="hero" asChild>
                  <a href="#story">
                    Explore the Story
                    <Sparkles />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-story-glow py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">Founders' story</span>
            <img
              src={assetUrl(ownerAsset)}
              alt="Sudhir and Manju Khimta sharing a quiet moment at Shelapani Homes"
              className="shadow-luxury mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
              loading="lazy"
            />
            <p className="text-center text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Sudhir &amp; Manju Khimta
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Before Shelapani became a destination, it was a personal act of faith.
            </h2>
            <div className="space-y-5 font-display text-lg leading-[1.85] text-foreground/85 sm:text-xl">
              <p>
                Sudhir Khimta's earliest years moved to the rhythm of the mountains—cricket fields where he
                represented Himachal in the junior ranks, art classrooms where he chose fine arts over a
                conventional path, and a childhood he still describes through a quiet metaphor about life's
                inevitable ups and downs. Discipline from sport, sensitivity from art, and the steady pulse of
                Shimla shaped a young man with an unusually layered way of seeing the world.
              </p>
              <p>
                When family and village called, he returned home to tend the ancestral apple orchards, trading
                studio walls for open skies. Years later, with Manju Khimta beside him as both partner and
                co-dreamer, that creative instinct found its truest expression: in the year 2000, long before
                luxury tourism arrived in the hills, they built what locals had quietly doubted was possible—
                <span className="font-semibold text-foreground">Shimla's first luxury pool villa</span>,
                promoted in the early days through nothing more than newspaper ads and conviction.
              </p>
              <p>
                Shelapani Homes is the quiet sum of all of it—an artist's eye, a sportsman's discipline, an
                orchardist's patience, and a family's unwavering faith in a vision that has aged into a
                legacy. To stay here is to step inside that story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={assetUrl(orchardAsset)}
              alt="Organic garden sign among apple trees at Shelapani Homes"
              className="aspect-[4/5] w-full max-w-xs rounded-lg object-cover shadow-soft"
              loading="lazy"
            />
            <img
              src={assetUrl(signAsset)}
              alt="Shelapani Homes wooden sign surrounded by greenery"
              className="aspect-[4/5] w-full max-w-xs rounded-lg object-cover shadow-soft sm:translate-y-10"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <span className="eyebrow">Why it feels different</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Luxury here is softened by memory, landscape, and the feeling of being genuinely hosted.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              The villa rises from orchard land and local skepticism into something rare: a refined stay that still
              feels rooted, warm, and personal. Every path, room, and frame carries the calm confidence of a dream
              built early and built well.
            </p>

            <div className="grid gap-4">
              {experienceNotes.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="rounded-lg border border-border bg-card p-5 shadow-soft sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">{copy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-story-glow py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img
              src={assetUrl(strawberriesAsset)}
              alt="Freshly harvested organic strawberries from the Shelapani garden"
              className="aspect-square w-full rounded-lg object-cover shadow-soft"
              loading="lazy"
            />
            <img
              src={assetUrl(jamAsset)}
              alt="Shelapani Organic homemade apricot jam"
              className="aspect-square w-full translate-y-6 rounded-lg object-cover shadow-soft"
              loading="lazy"
            />
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <span className="eyebrow">From our garden to your table</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              An organic garden quietly tended for every guest who stays.
            </h2>
            <div className="space-y-5 font-display text-lg leading-[1.85] text-foreground/85 sm:text-xl">
              <p>
                Wrapped around the villa is a living, breathing organic garden—rows of strawberries warming in
                the mountain sun, apricot and apple trees heavy with seasonal fruit, and gentle beds of
                vegetables and herbs that the family has tended for years without a trace of chemicals. Nothing
                here is grown for show; it is grown to be picked, cooked, and shared.
              </p>
              <p>
                Guests wake up to fruit that was on the branch the evening before, vegetables pulled from the
                soil that morning, and small jars of <span className="font-semibold text-foreground">Shelapani
                Organic</span> homemade jams—apricot, strawberry, and whatever the season offers—made in
                Manju's kitchen from the garden's own harvest. Staying at Shelapani Homes is staying close to
                the land, and tasting exactly what that closeness means.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">The warmth of a lived-in home</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Where guests arrive for the view and remember the feeling.
            </h2>
            <div className="space-y-5 font-display text-lg leading-[1.85] text-foreground/85 sm:text-xl">
              <p>
                Shelapani Homes carries the easy generosity of a family house: sun on the lawn, laughter in front of
                the red-roofed villa, and the gentle company of beloved dogs who make the garden feel alive. It is
                polished and premium, yet never distant—the kind of place where photographs become warmer because the
                people in them feel completely at ease.
              </p>
              <p>
                For families, friends, creative crews, and travellers looking for something more intimate than a hotel,
                the villa offers space to gather beautifully. Every celebration feels framed by mountain air, orchard
                calm, and the unmistakable charm of a home that has been hosting with heart for years.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <img
              src={assetUrl(petsAsset)}
              alt="Hosts with beloved dogs on the Shelapani Homes lawn"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-luxury"
              loading="lazy"
            />
            <img
              src={assetUrl(guestsAsset)}
              alt="Happy guests celebrating outside the red-roofed Shelapani Homes villa"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft sm:translate-y-8"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="section-shell space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">Inside the stay</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Spacious living, thoughtful interiors, and a slow-luxury mood in every corner.
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              From sun-filled windows to rich wood textures and elegant rooms, the spaces at Shelapani Homes invite
              families, filmmakers, and weekend travellers into a stay that feels cinematic without losing comfort.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr_1fr]">
            <img
              src={assetUrl(loungeAsset)}
              alt="Grand lounge with warm lighting inside Shelapani Homes"
              className="aspect-[5/4] h-full w-full rounded-lg object-cover shadow-luxury lg:row-span-2"
              loading="lazy"
            />
            <img
              src={assetUrl(suiteWindowAsset)}
              alt="Window-side seating with mountain light in a Shelapani Homes suite"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
              loading="lazy"
            />
            <div className="rounded-lg bg-card p-6 shadow-soft sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">A home that hosts</p>
              <p className="mt-4 text-3xl font-semibold text-foreground">Elegant rooms, mountain-facing calm, and spaces made to gather.</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Spacious interiors and premium detailing bring comfort to every part of the stay—from quiet mornings
                by the window to memorable evenings with family and friends.
              </p>
            </div>
            <div className="rounded-lg bg-primary p-6 text-primary-foreground shadow-soft sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">Built for a new era</p>
              <p className="mt-4 text-3xl font-semibold">An ambitious villa created before luxury tourism felt certain.</p>
              <p className="mt-4 text-base leading-7 text-primary-foreground/80">
                Early promotion began with newspaper ads and belief—proof that the Shelapani story has always been
                about vision first, validation later.
              </p>
            </div>
            <img
              src={assetUrl(bedroomAsset)}
              alt="Premium bedroom interior at Shelapani Homes"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="space-y-5">
            <span className="eyebrow">Watch the story</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              See the spirit of Shelapani Homes in motion.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              This film adds voice and feeling to the story—Sudhir's journey, the mountain setting, and the soul of a
              home that was built with intent, not imitation.
            </p>
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-luxury">
              <div className="aspect-video w-full">
                <iframe
                  src={youtubeEmbed}
                  title="Shelapani Homes YouTube video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8">
            <span className="eyebrow">Plan your stay</span>
            <h3 className="text-3xl font-semibold">Reach out directly to the hosts.</h3>
            <p className="text-base leading-7 text-muted-foreground">
              For availability, location guidance, and quick conversation, connect directly through WhatsApp, email, or
              maps.
            </p>
            <div className="grid gap-3">
              <Button variant="hero" size="hero" asChild>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Phone />
                  WhatsApp 9779932322
                </a>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <a href={emailLink}>
                  <Mail />
                  Email the hosts
                </a>
              </Button>
              <Button variant="glass" size="hero" asChild>
                <a href={mapLink} target="_blank" rel="noreferrer">
                  <MapPinned />
                  Open Google Maps
                </a>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <a href="https://youtu.be/WJRbGW8MY-8?si=FQZom_quMUvZe1vf" target="_blank" rel="noreferrer">
                  <CirclePlay />
                  Watch on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="section-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">Shelapani Homes</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Premium mountain villa experience in Shimla, created by Sudhir &amp; Manju Khimta.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              WhatsApp
            </a>
            <a href={emailLink} className="transition hover:text-foreground">
              Email
            </a>
            <a href={mapLink} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              Google Maps
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
